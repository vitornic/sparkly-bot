const Discord = require('discord.js')

module.exports = {

  run: async (client, message, args) => {

    const channel = message.guild.channels.cache.get(process.env.APRESENTACAO)
    const nick = args
    message.delete().catch(ex => {})
    
    const embed = {
        color: 0xB1103C,
        title: 'Ficha de Cadastro',
        description: ``,
        thumbnail: {
            url: message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
        },
        timestamp: new Date(),
        footer: {
          text: 'Muita Treta !'
        },
        fields: []
    }

    embed.fields.push({
        name: `Aguardando Confirmação`,
        value: `*Nome*: ${message.author.username}
                *Nick*: ${nick}\n`
    })

    message.member.setNickname(message.content.replace(`${message.author.username}`, `${message.author.username}` + `${nick}`))

    channel.send({embed}).then((newMessage) =>
    newMessage.react('✅').then(newMessage.react('❌'))
    )

  },

  conf: {},

  get help () {
    return {
      name: 'registrar',
      description: 'Se registra para aprovação no servidor.',
      usage: 'registrar',
      category: 'Util'
    }
  }
}