const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports.run = async (bot, message, args) => {


    
    if(message.member.hasPermission("ADMINISTRATOR")) {     ///To allow a simple moderator to use the command just put MANAGE_MESSAGES in place of ADMINISTRATOR 
      let messagecount = parseInt(args[0]);
    
      if(isNaN(messagecount)) return message.channel.send(":x: " + "| Précise le nombre de message que tu veux supprimer fils");
    
      if(messagecount > 100){
        message.channel.send(":x: " + "| Erreur, vous ne pouvez supprimer qu'entre 2 et 100 messages à la fois !")
      }else if(messagecount < 2 ) {
        message.channel.send(":x: " + "| Erreur, vous ne pouvez supprimer qu'entre 2 et 100 messages à la fois !")
      } else {
    
      }{
        message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages, true));
      }
    } else {
      return message.reply(":x: " + "| Tu as besoin d'être \"ADMINISTRATOR\" pour faire ça")
    }
    }
    
    module.exports.help = {
        name: "clear"
    }