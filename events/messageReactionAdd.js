module.exports = async (client, reaction, user) => {

    if (!user || user.bot || !reaction.message.channel.guild) return

    if (reaction.message.channel.id === process.env.APRESENTACAO) {
        if (reaction._emoji.name === "✅") {
            reaction.message.guild.member(user).roles.add('740741189015437405')
            reaction.message.guild.member(user).roles.remove('705665776270573618')

            reaction.message.channel.send('Aprovado')

            //reaction.message.delete().catch(ex => {})
        } else if (reaction._emoji.name === "❌") {
            reaction.message.guild.member(user).kick('Você não foi aprovado em nosso servidor 😥').then().catch()
        }
    }

}