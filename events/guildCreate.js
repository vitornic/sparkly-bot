/**
    * Evento guildCreate é disparado assim que o bot entra em um servidor
*/

const { Guild } = require("discord.js")

module.exports = async (client) => {

    console.log(`Sparkly recuperou sua luz em ${client.fetchpreviewGuild}. Guerreiros: ${Guild.length} membros !`)

}