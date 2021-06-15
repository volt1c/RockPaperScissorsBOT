const bot = require('./bot')

require('dotenv').config()


console.info('[✅]> Bot enebled...')

if (process.env.TOKEN == undefined) {
  console.error(`[⛔️]> Token is undefined!`)
  return
}

if (process.env.PREFIX == undefined)
  console.warn(`[⚡]> Prefix isn't defined in .env file...`)

if (process.env.PREFIX != undefined) bot.prefix = process.env.PREFIX

console.info(`[✅]> Default prefix is '${bot.prefix}'.`)

bot.login(process.env.TOKEN)

console.log('Connected to Discord...')
