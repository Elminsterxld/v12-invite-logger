const { Collection, Client } = require("discord.js");
const ayarlar = require('./ayarlar.json');
const Database = require("./Helpers/Database");
const client = new Client;
////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
const Invites = new Collection();////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr v
client.on("ready", () => {////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
    client.guilds.cache.forEach(guild => {////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr vvvv
        guild.fetchInvites().then(_invites => {////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
            Invites.set(guild.id, _invites);////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr v
        }).catch(err => { });////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr v////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr vvv
    });
  ////Elminstêr 
  ///Elminstêr /Elminstêr Elminstêr 
});
client.on("inviteCreate", (invite) => {
    var gi = Invites.get(invite.guild.id);
    gi.set(invite.code, invite);
    Invites.set(invite.guild.id, gi);
});
client.on("inviteDelete", (invite) => {
    var gi = Invites.get(invite.guild.id);
    gi.delete(invite.code);
    Invites.set(invite.guild.id, gi);
});


client.on("guildCreate", (guild) => {
	guild.fetchInvites().then(invites => {
		Invites.set(guild.id, invites);
	}).catch(e => {})
});

//
client.on("guildMemberAdd", (member) => {
    //const gi = new Collection().concat(Invites.get(member.guild.id));
    const db = new Database("./Servers/" + member.guild.id, "Invites"), gi = (Invites.get(member.guild.id) || new Collection()).clone(), settings = new Database("./Servers/" + member.guild.id, "Settings").get("settings") || {};
    var guild = member.guild, fake = (Date.now() - member.createdAt) / (1000 * 60 * 60 * 24) <= 3 ? true : false, channel = guild.channels.cache.get(settings.Channel);
    guild.fetchInvites().then(invites => {
        // var invite = invites.find(_i => gi.has(_i.code) && gi.get(_i.code).maxUses != 1 && gi.get(_i.code).uses < _i.uses) || gi.find(_i => !invites.has(_i.code)) || guild.vanityURLCode;
        var invite = invites.find(_i => gi.has(_i.code) && gi.get(_i.code).uses < _i.uses) || gi.find(_i => !invites.has(_i.code)) || guild.vanityURLCode;
        Invites.set(member.guild.id, invites);
        var content = `${member} is joined the server.`, total = 0, regular = 0, _fake = 0, bonus = 0;
        if(invite == guild.vanityURLCode) content = settings.defaultMessage ? settings.defaultMessage : `-member- is joined the server! But don't know that invitation he came up with. :tada:`;
        else content = settings.welcomeMessage ? settings.welcomeMessage : `The -member-, joined the server using the invitation of the -target-.`;

        if (invite.inviter) { 
            db.set(`invites.${member.id}.inviter`, invite.inviter.id); 
            if(fake){
                total = db.add(`invites.${invite.inviter.id}.total`, 1);
                _fake = db.add(`invites.${invite.inviter.id}.fake`, 1);
            }
            else{
                total = db.add(`invites.${invite.inviter.id}.total`, 1);
                regular = db.add(`invites.${invite.inviter.id}.regular`, 1);
            }
            var im = guild.member(invite.inviter.id);
            bonus = db.get(`invites.${invite.inviter.id}.bonus`) || 0;
            if(im) global.onUpdateInvite(im, guild.id, Number(total + Number(bonus)));
            
        }
  ////Elminstêr 

        db.set(`invites.${member.id}.isfake`, fake);

        if(channel){
       //channel.send(`${member} Adlı Kişi Sunucuya Katıldı **Davet Eden Şahıs:** ${invite.inviter.tag} (**${total + bonus}** Davet! :white_check_mark:)`)
          // gİRİŞ MESAJLARI İÇİN 
          ////Elminstêr 
          content = content
////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
            .replace("-member-", `${member}`)////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
            .replace("-target-", `${invite.inviter}`)////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
            .replace("-total-", `${total + bonus}`)////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
            .replace("-regular-", `${regular}`)////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
            .replace("-fakecount-", `${_fake}`)////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
            .replace("-invite-", `${invite && invite.code != undefined ? invite.code : "what is that?"}`)////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
            .replace("-fake-", `${fake}`);////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
            channel.send(content);////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
        }  ////Elminstêr ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
    }).catch();////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
});////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
////Elminstêr 
client.on("guildMemberRemove", (member) => {
    const db = new Database("./Servers/" + member.guild.id, "Invites"), settings = new Database("./Servers/" + member.guild.id, "Settings").get("settings") || {};
    var total = 0, bonus = 0, regular = 0, fakecount = 0, channel = member.guild.channels.cache.get(settings.Channel), content = settings.leaveMessage ? settings.leaveMessage : `${member} is left the server.`, data = db.get(`invites.${member.id}`);
    if(!data){
        return;
    }////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
        if(data === null) data = "Bulunamadı"
    if(data.isfake && data.inviter){
        fakecount = db.sub(`invites.${data.inviter}.fake`, 1);////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
        total = db.sub(`invites.${data.inviter}.total`, 1);////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
    }////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
    else if(data.inviter){////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
        regular = db.sub(`invites.${data.inviter}.regular`, 1);////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
        total = db.sub(`invites.${data.inviter}.total`, 1);////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
    }////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
    if(data.inviter) bonus = db.get(`invites.${data.inviter}.bonus`) || 0;////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 
    
    var im = member.guild.member(data.inviter)
    if(im) global.onUpdateInvite(im, member.guild.id, Number(total) + Number(bonus));

    db.add(`invites.${data.inviter}.leave`, 1);
       if(channel){  ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 

        content = content

        .replace("-member-", `${member}`)////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
        .replace("-target-", `${im ? im : data.inviter}`)////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
        .replace("-total-", `${Number(total) + Number(bonus)}`)////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
        .replace("-regular-", `${regular}`)////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
        .replace("-fakecount-", `${fakecount}`)////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
        .replace("-fake-", `${data.isfake}`);////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
        channel.send(content);////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
     //   let user = client.users.cache.get(data.inviter)
         /// mesaj ayarlamaları için yapıldı
     //	channel.send(`${member.user.tag} Sunucudan Ayrıldı **Şahsı Davet Eden:** ${user.tag} (**${Number(total) + Number(bonus)}** Davet! :x:)`)
     }
});
  ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 

global.onUpdateInvite = (guildMember, guild, total) => {////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
    if(!guildMember.manageable) return;////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
    const rewards = new Database("./Servers/" + guild, "Rewards").get("rewards") || [];////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
    if(rewards.length <= 0) return;////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
    var taken = rewards.filter(reward => reward.Invite > total && guildMember.roles.cache.has(reward.Id));////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
    taken.forEach(take => {////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
        guildMember.roles.remove(take.Id);////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
    });////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
    var possible = rewards.filter(reward => reward.Invite <= total && !guildMember.roles.cache.has(reward.Id));////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
    possible.forEach(pos =>{////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
        guildMember.roles.add(pos.Id);////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
    });////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr 
}////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr ////Elminstêr v
client.login(ayarlar.token)  ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr   ////Elminstêr 