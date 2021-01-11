const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (kontrol == "Elminstêr") {

        if (!prefix) {
          const embed = new Discord.MessageEmbed()
            .setColor("RED")
          .setTimestamp()
          .setFooter(' ♥️Elminstêr 2020 | Youtube İnvite Logger')
          .setThumbnail(message.author.avatarURL({dynamic:true}))
            .setDescription(`Prefix zaten ayarlanmamış!`);
          message.channel.send(embed);
          return;
        }
        const embed = new Discord.MessageEmbed()
          .setColor("GREEN")
        .setFooter(' ♥️Elminstêr 2020 | Youtube İnvite Logger')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL({dynamic:true}))
          .setDescription(`Prefix başarıyla sıfırlandı!`);

        message.channel.send(embed);
        db.delete(`prefix_${message.guild.id}`);
      
  } else {
    
        if (!prefix) {
          const embed = new Discord.MessageEmbed()
          .setThumbnail(message.author.avatarURL({dynamic:true}))
            .setColor("RED")
          .setTimestamp()
          .setFooter(' ♥️Elminstêr 2020 | Youtube İnvite Logger')
            .setDescription(`Prefix Zaten Ayarlanmamış!`);
         

          message.channel.send(embed);
          return;
        }
        const embed = new Discord.MessageEmbed()
          .setColor("GREEN")
        .setFooter(' ♥️Elminstêr 2020 | Youtube İnvite Logger')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL({dynamic:true}))
          .setDescription(`Prefix Başarıyla Sıfırlandı!`);
          

        message.channel.send(embed);
        db.delete(`prefix_${message.guild.id}`);
      
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["prefix-reset"],
  permLevel: 3,
  kategori: "sunucu"
};

module.exports.help = {
  name: "prefix-sıfırla",
  description: "prefix-sıfırla",
  usage: "prefix-sıfırla"
};