const Discord = require('discord.js')

module.exports = {

  run: async (client, message, args) => {
    process.env.APRESENTACAO = message.channel.id
    message.channel.send("Canal definido como apresentação 😉")
  },

  conf: {},

  get help () {
    return {
      name: 'apresentacao',
      description: 'Define o canal atual como canal de apresentação.',
      usage: 'apresentacao',
      category: 'Util'
    }
  }
}