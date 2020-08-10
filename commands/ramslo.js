const Discord = require('discord.js')

module.exports = {

  run: async (client, message, args) => {

    const embed = {
        color: 0xB1103C,
        title: 'Horário boss ramslo',
        description: 'Marque seus tempos',
        timestamp: new Date(),
        footer: {
          text: 'Muita Treta !'
        },
        fields: []
    }

    message.channel.send({
        embed: embed
    }).then(() => message.react('❤️'))
  },

  conf: {},

  get help () {
    return {
      name: 'ramslo [WIP]',
      description: 'Exibe um contator de horário para o boss Ramslo.',
      usage: 'ramslo',
      category: 'Util'
    }
  }
}