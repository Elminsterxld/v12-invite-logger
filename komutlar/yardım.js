const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const embedyardim = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(`${client.user.username} `, client.user.avatarURL({dynamic:true})) 
      .setDescription('> Bu Altyapı Elminstêr#0007 Tarafından Yapıldı!')
      .addField('** Davet Komutları (9)**', ` Davet Sistemi Komutları \n` +  '`davetlerim`, `davet-kanal`, `davet-kanal-sıfırla`, `ayarlar`, `rütbe-ekle`, `rütbe-sıfırla`, `rütbeler`, `top`, `bonus`')
      .addField('** Yetkili Komutları (5)**',   ` Genel Komutlar. \n` + '`ban`, `kick`, `sil`,`prefix`,`prefix-sıfırla`')
      .addField('** Kodlar (7)**',` Ayarlar Komutunda ki Mesajları Ayarlamak İçin Gerekenler. \n` +  '`-member-`, `-target-`, `-fake-`, `-total-`,`-regular-`,`-invite-`,`-fakecount-`')
    .addField('** Sahib Komutları (2)**',`Sadece Bot Sahibinin Kullanabileceği Komutlar. \n`+ '`beyazliste`,`karaliste`')
   .setFooter(`© ${client.user.username} ` , client.user.avatarURL({dynamic:true}))
    .setTimestamp()
    .setThumbnail(message.author.avatarURL({dynamic:true}))
    message.channel.send(embedyardim).catch()
    
//////Elminstêr#0007
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["h", "halp", "help", 'y', 'yadrım'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};