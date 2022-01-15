require('emoji-logs').config({})
require('dotenv').config()

const bot = require('./bot')

console.info('Bot enebled...')

if (process.env.TOKEN == undefined) {
  console.error(`Token is undefined!`)
  process.exit()
}

if (process.env.PREFIX == undefined)
  console.warn(`Prefix isn't defined in .env file...`)

if (process.env.PREFIX != undefined) bot.prefix = process.env.PREFIX

console.info(`Default prefix is '${bot.prefix}'.`)

bot
  .login(process.env.TOKEN)
  .then(() => {
    console.info('Connected to Discord...')
  })
  .catch(() => {
    console.error('Can not connect to Discord...')
  })
