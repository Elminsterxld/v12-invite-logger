const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (kontrol == "Elminstêr") {
  
      
        let prefix = args.slice(0).join(" ");
        if (!prefix) {
          const embed = new Discord.MessageEmbed()
            .setColor("RED")
          .setFooter(' ♥️Elminstêr 2020 | Youtube İnvite Logger')
          .setTimestamp()
          .setThumbnail(message.author.avatarURL({dynamic:true}))
            .setDescription(`Lütfen bir prefix belirtiniz!`);
            

          message.channel.send(embed);
          return;
        }
        const embed = new Discord.MessageEmbed()
          .setColor("GREEN")
        .setFooter(' ♥️Elminstêr 2020 | Youtube İnvite Logger')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL({dynamic:true}))
          .setDescription(`Prefix; \`${prefix}\` olarak ayarlandı!`);
         

        message.channel.send(embed);
        db.set(`prefix_${message.guild.id}`, prefix);
     
  
  } else {
   
      
        let prefix = args.slice(0).join(" ");
        if (!prefix) {
          const embed = new Discord.MessageEmbed()
            .setColor("RED")
          .setFooter(' ♥️Elminstêr 2020 | Youtube İnvite Logger')
          .setTimestamp()
          .setThumbnail(message.author.avatarURL({dynamic:true}))
            .setDescription(`Lütfen Bir Prefix Belirtiniz!`);
       

          message.channel.send(embed);
          return;
        }
        const embed = new Discord.MessageEmbed()
          .setColor("GREEN")
        .setFooter(' ♥️Elminstêr 2020 | Youtube İnvite Logger')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL({dynamic:true}))
          .setDescription(`Prefix; \`${prefix}\`olarak ayarlandı!`);
         

        message.channel.send(embed);
        db.set(`prefix_${message.guild.id}`, prefix);
      
  
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["prefix"],
  permLevel: 3,
  kategori: "sunucu"
};

module.exports.help = {
  name: "prefix",
  description: "prefix",
  usage: "prefix"
};