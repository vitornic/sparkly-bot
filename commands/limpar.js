const Discord = require('discord.js')

module.exports = {

  run: async (client, message, args) => {
    
    if (!message.member.hasPermission("MENAGE_MESSAGES")) {
        return message.reply("Você não recebeu a graça necessária para utilizar tal poder")
    }

    const deleteCount = parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 1 || deleteCount > 100) {
        return message.reply("Meus poderes permitem apagar até 100 ações")
    }

    const fetched = await message.channel.messages.fetch({limit: deleteCount + 1})

    message.channel.bulkDelete(fetched)
    message.channel.send(`${args[0]} mensagens limpas neste chat`)
    .catch(ex => console.log(`Não consegui apagar suas mensagens devido ao: ${error}`))

  },

  conf: {},

  get help () {
    return {
      name: 'limpar',
      description: 'Limpar o número de mensagens definido pelo utilizador.',
      usage: 'limpar',
      category: 'Util'
    }
  }
}