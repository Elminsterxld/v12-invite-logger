const Discord = require("discord.js");////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
const Database = require("../Helpers/Database");////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
// exports.onLoad = (client) => {};////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
/**
 * @param {Discord.Client} client ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR") && !message.member.hasPermission("MANAGE_GUILD")) return message.reply(":x: Bu İşlemi Gerçekleştirmek İçin** Yönetici Yetkisine İhtiyacın Var!")
    if(args.length <= 0) return message.reply("Lütfen Değişken Belirtiniz \n> `welcomeMessage, leaveMessage, defaultMessage`, Bu Değişkenleri Görmek İçin `!yardım`");
    ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
    var arg = args[0].toLocaleLowerCase();
     var types = ["leaveMessage", "welcomeMessage", "defaultMessage","Channel"];
////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
    var type = types.find(_type => _type.toLocaleLowerCase() == arg);
    if(!type) return message.reply("Lütfen Değişken Belirtiniz \n> `welcomeMessage, leaveMessage, defaultMessage`, Yazarak Bakınız");

    const db = new Database("./Servers/" + message.guild.id, "Settings");
    db.set(`settings.${type}`, args.splice(1).join(" "));

    message.reply(` ✅ Başarıyle Belirttiğiniz Ayarı Yaptınız! Şimdi Deneme Vakti!`);
};////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
exports.conf = {

  enabled: true,

  guildOnly: false,
////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
  aliases: ['ayarlar','ayar'],////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
////Elminstêr ////Elminstêr 
  permLevel: 0

};////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
exports.help = {////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
  name: 'ayarlar',////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
  description: 'Ayarlar Cekersiniz',////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 

  usage: 'ayarlar çek'

};