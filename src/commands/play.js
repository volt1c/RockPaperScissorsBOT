module.exports = {
  name: 'play',
  description: 'Play!',
  async execute({ message, args }) {
    if (!args[0])
      return message.channel.send('**You did not choose an action!**')

    const actions = ['rock', 'paper', 'scissors']

    if (!actions.includes(args[0]))
      return message.channel.send(
        '**What is that ?! :face_with_raised_eyebrow:**'
      )

    const user = message.guild.members.cache.get(message.author.id).tag
    const userAction = args[0].toLowerCase()
    const botAction = actions[Math.floor(Math.random() * 3)]

    let result

    if (
      (userAction == 'paper' && botAction == 'rock') ||
      (userAction == 'scissors' && botAction == 'paper') ||
      (userAction == 'rock' && botAction == 'scissors')
    )
      result = 'win'

    if (
      (userAction == 'rock' && botAction == 'paper') ||
      (userAction == 'paper' && botAction == 'scissors') ||
      (userAction == 'scissors' && botAction == 'rock')
    )
      result = 'lose'

    if (userAction == botAction) result = 'tie'

    message.channel.send(`**<@${message.author.id}> ${result}.**`)
  },
}
