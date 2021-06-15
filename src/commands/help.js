const { prefix } = require('../bot')

module.exports = {
  name: 'help',
  description: 'Help.',
  async execute({ message, discord }) {
    message.channel.send(
      new discord.MessageEmbed()
        .setColor('#5cffe9')
        .setTitle('Help...')
        .setDescription(`**📑 Commands list**`)
        .addFields(
          {
            name: `${prefix}play <**rock**|**paper**|**scissors**>`,
            value: 'use this command to play rock paper scissors',
            inline: false,
          },
          {
            name: `${prefix}info`,
            value: 'Information about bot.',
            inline: false,
          }
        )
        .setFooter('Kamil Pawlaczyk (c) 2021')
    )
  },
}
