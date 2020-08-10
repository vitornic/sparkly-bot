const Discord = require('discord.js')

module.exports = {

  run: async (client, message, args) => {
    process.env.JOINCHANNEL = message.channel.id
    message.channel.send("Canal definido como boas vindas 😉")
  },

  conf: {},

  get help () {
    return {
      name: 'recepcao',
      description: 'Define o canal atual como canal de boas vindas.',
      usage: 'recepcao',
      category: 'Util'
    }
  }
}