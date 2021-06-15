const discord = require('discord.js')
const client = new discord.Client()

client.prefix = '-'
client.commands = new Map()

require('fs')
  .readdirSync('./src/commands')
  .filter((file) => file.endsWith('.js'))
  .forEach((file) => {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
  })

client.on('message', (message) => {
  const { author, guild, channel, content } = message
  const { prefix, commands } = client

  if (author.bot || !guild) return
  if (!content.startsWith(prefix) || author.bot) return

  const args = content.slice(client.prefix.length).split(/ +/g)
  const command = args.shift().toLowerCase()

  if (content === prefix) {
    channel.send("**Yes, it's my prefix...**")
  }

  if (!commands.has(command)) return
  try {
    commands.get(command).execute({ message, args, discord, prefix })
  } catch (error) {
    console.error(error)
    message.reply('There was a problem with this command!')
  }
})

module.exports = client
