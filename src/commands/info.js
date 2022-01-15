module.exports = {
  name: 'info',
  description: 'Info command!',
  execute({ message, discord, prefix }) {
    message.channel.send(
      new discord.MessageEmbed()
        .setColor('#ff5ce9')
        .setTitle('Info...')
        .setDescription(`**📮 Type __${prefix}help__ to get more commands!**`)
        .addFields(
          {
            name: '[ 👋 ] Author :',
            value: 'Kamil#8653',
            inline: false,
          },
          {
            name: '[ 🤖 ] Version :',
            value: 'v1.0',
            inline: false,
          },
          {
            name: '[ 🌐 ] Github :',
            value: 'https://github.com/volt1c',
            inline: false,
          }
        )
        .setFooter('Kamil Pawlaczyk (c) 2021')
    )
  },
}
