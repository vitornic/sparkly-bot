/**
    * Evento ready é disparado assim que o bot é conectado ao Discord
*/

module.exports = async (client) => {

    console.log(`Sparkly iniciado com ${client.users.fetch.length} usuários, em ${client.fetchGuildPreview.length} servidores.`)
    client.user.setActivity(`${process.env.PREFIX}help`)

}