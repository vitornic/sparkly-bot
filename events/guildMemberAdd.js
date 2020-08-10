module.exports = async (client, member) => {

    const channel = member.guild.channels.cache.get(process.env.JOINCHANNEL)

    const embed = {
        color: 0xB1103C,
        author: (client.user.tag,
            client.user.displayAvatarURL()),
        title: '❤️ Boas-vindas ❤️',
        description: `**<@${member.id}>**, bem-vindo(a) ao servidor **${member.guild.name}**!
        Atualmente estamos com **${member.guild.memberCount} membros**
        divirta-se conosco!`,
        thumbnail: {
            url: member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }),
        },
        timestamp: new Date(),
        footer: {
          text: 'Muita Treta !'
        },
        fields: []
      }

    embed.fields.push({
        name: `**Registro**`,
        value: 'digite `!registrar SeuNickInGame` neste canal e aguarde um pouco😉'
    })

    channel.send({
        embed: embed
    })
}