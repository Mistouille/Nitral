const Discord = require('discord.js')
const bot = new Discord.Client()

//------------------------------------------------//
//                   Préfixe                      //
//------------------------------------------------//

let prefix = ("++")

let flyfamille = ("Fly'")


//------------------------------------------------//
//                   DATA BASE                    //
//------------------------------------------------//


//------------------------------------------------//
//                   Initialisation du bot        //
//------------------------------------------------//

bot.on('ready', function () {
 bot.user.setStatus( 'Idle' );
 bot.user.setActivity(prefix + `help | ${bot.guilds.size} serveurs | ${bot.users.size} utilisateurs`,{type: "WATCHING"});
  console.log("Je suis connecté !\n====================================\n\n" + bot.users.size + " utilisateurs \n" + bot.guilds.size + " serveurs \n\n====================================\n\n" + bot.guilds.array ())
});

//------------------------------------------------//
//                   Bienvenue                    //
//------------------------------------------------//


//------------------------------------------------//
//                   Commande                     //
//------------------------------------------------//

bot.on('message', message => {

    //fun
    
    if (message.content ==="Team Wolf") {
        message.channel.send(":online-1: :wolf:**__TEAM WOLF EN FORCE__**:wolf:");
    }
    if (message.content === prefix +  "distrub") {
	     if(message.author.id == "234312981524119562"){
    	message.channel.bulkDelete (1)
    bot.user.setStatus( 'Online ' );
      bot.user.setActivity(`*help | ${bot.guilds.size} serveurs | ${bot.users.size} utilisateurs`) ;
      message.channel.send ("En cours de modification \n `en ligne`")
} else {
      message.channel.send("**Erreur** ! Tu n'es pas l'owner") 
    }
  }
if (message.content === prefix + "onmain") {
 if(message.author.id == "234312981524119562"){
    	message.channel.bulkDelete (1)
    bot.user.setStatus( 'idle' );
    bot.user.setActivity('EN MAINTENANCE');
        message.channel.send ("En cours de modification \n`en absence` et `EN MAINTENANCE`")
} else {
      message.channel.send("**Erreur** ! Tu n'es pas l'owner") 
    }
  }
  if (message.content === prefix + "stopmain") {
	  if(message.author.id == "234312981524119562"){
  	message.channel.bulkDelete (1)
    bot.user.setStatus( 'dnd' );
 bot.user.setActivity(`*help | ${bot.guilds.size} serveurs | ${bot.users.size} utilisateurs`);
 message.channel.send ("En cours de modification \n`en ne pas dérange`")
} else {
      message.channel.send("**Erreur** ! Tu n'es pas l'owner") 
    }
  }

    if (message.content ==="++dédicace") {
        message.channel.send ("Dédicace à,Feuille Daloë, Mathilde, Harmony, Cassie, Colk pour m'avoir fait confiance et d'avoir rajouté mon bot sur votre serveur et de l'utiliser vraiment beaucoup je vous remercie si jamais n'hésitez pas à rejoindre le serveur du bot en tapant `++invitation` et en tapant le bouton join support serveur 😉")
    console.log(`${message.author.username} | dédicace `)
    }
    if (message.content === "pain") {
    	   message.reply ("https://cdn.discordapp.com/attachments/422988375302078465/423934780611100672/TtpPv_Bqu3tMfudl_FzcYYwUk6s.gif")
        console.log ("pain au chocolat")
    }
    //owner
    if (message.content === prefix + "owner"){
        message.reply("📝voila si tu veux mp mon createur <@234312981524119562>📝");
        console.log("Commande owner" );
    }
    //NEWS
    if (message.content === prefix + "news"){
        message.channel.send ("__Mise à jour:__```\n Ajout des commandes fun \n Fix du *google \n Fix du kick et ban \n Fix du 8ball ```");
        console.log("Commande news" );
    }
    //avatar
    if (message.content.startsWith (prefix +"avatar")) {
            var avEmbed = new Discord.RichEmbed()
              .setColor ('#00FAD9')
              .setDescription(`Voici ton avatar` )
              .setImage( message.author.avatarURL)
              .setFooter("Avatar ");
    message.channel.send(avEmbed)
    }
    //test
    if (message.content === prefix + "check"){
        	    message.channel.send ('🤖 Bot Opérationnel 🤖')
        	    message.channel.send ('Mon ping est de ***' + `${Date.now() - message.createdTimestamp}` + ' ms***🏓');

        console.log("Commande test" );
    }
    //Embed help
    if (message.content === prefix + "help") {
        let help_embed = new Discord.RichEmbed ()
    	      .setColor('#15f153')
    	      .setTitle ("Commandes des membre ")
            .addField("__Setup__:","Envoi un message pour le bon fonctionnement du bot",false)
    	      .addField ("__Help__:","Affiche le help 🙇‍♂️", false)
    	      .addField ("__Ping__:", "Ping le bot 🏓", false)
    	      .addField ("__Avatar__:", "Affiche votre avatar 🎎", false)
    	      .addField ("__Invitation__:", "Envoi l'invitation du bot 📨", false)
    	     .addField ("Dédicace", "Petite surprise à ceux qui utilisent très souvent mon bot ", false)
    	      .addField ("__Check__:", "Vérifie si le bot et opérationnel et fait un ping 📢", false)
    	      .addField ("__Google__:", "Fait une requête Google ", false)
    	   let help_embedfun = new Discord.RichEmbed ()
    	      .setColor ("#01B0F0")
    	      .setTitle ("Commandes fun")
    	      .addField ("__Verlan__:"," Inverse un message 🔄 ", false)
    	      .addField ("__Pièce__:", "Choisi entre pile ou face (et pas tranche) 🎲", false)
    	      .addField ("__8ball__:", "Choisi un réponse à votre place 📠", false)
    	      .addField ("__Dice__:", "Lance un dé et prend un chiffre entre 1 et 6 🎲",false)
    	      .addField ("__Astrologia__:", "Dit ton signe astrologique ⛎", false)
    	      .addField ("__Say__", "Dit une phrase au bot 🤖💬", false)
    	      .addField ("Dédicace", "Petite surprise à ceux qui utilisent très souvent mon bot ", false)
           .addField ("__Kiss__", "Fait un bisou a une personne 💋 (++kiss [mention])", false)
           .addField ("__Hug__", "Fait un calin a une personne 👐 (++hug [mention])", false)
           .addField ("__Cry__", "Vous pleurez de tristesse 😢", false)
           .addField ("__Pat__", "Vous carressez une personne 👋 (++pat [mention] ) ", false)
           .addField ("__Punch__", "Vous donnez un coup de poing a une personne 👊 (++punch [mention]) ", false)
           .addField ("__Pout__", "Vous boudez une personne 😶 (++pout [mention]) ", false)
           .addField ("__Handholding__", "Vous tenez la main a une personne 🤝 (++handholding [mention]) ", false)
           .addField ("__Fuck__", "Fait un doigt d'honneur à quelqu'un 🖕(++fuck [mention])" , false )
           .addField ("__Res__", "Ressuscite quelqu'un 😇 (++res [mention])" , false )
           .addField ("__Everyone__", "Envoi une image ***__EVERYONE__*** 😡 " , false)
           .addField ("__Troll__", "Vous troller quelqu'un " , false)
           .addField ("__Slap__", "Claque une personne 🤚 (++slap [mention])" , false)
           .addField ("__Shoot__", "Vous tirez sur quelqu'un 🔫" , false)
           .addField ("__Highfive__", "Fait un highfive à une personne 🙏" , false)
           .addField ("__Triggered __", "Envoi un image triggered" , false)
       let help_embedinfo = new Discord.RichEmbed ()
    	      .setColor ("#333333")
    	      .setTitle ("Commandes information")
    	      .addField ("__News__:", "Vous informe des prochaines mise à jour du bot📥", false)
           .addField ("__Owner__:", "Envoi un message avec la mention du créateur 📧", false)
    	      .addField ("__Misthstats__:","Vous informe de l'état du bit de test 🤖",false)
    	      .addField ("__Serverinfo__:","Donne les statistiques du serveur 💹", false)
    	      .addField ("__Botinfo__:","Donne les statistiques du bot 📝",false)
    	      .addField ("__Userinfo__:","Donne les informations de l'utilisateur 👤", false)
    	      .addField ("__Trello__:", "Affiche le trello du bot 🗒️", false )
    	      .addField ("__Diserver__:", "Donne la liste de tout les serveur ou se situe le bot 📋", false)
    	   let help_embedadmin = new Discord.RichEmbed ()
    	      .setColor ("#B9121B")
    	      .setTitle ("Commandes Admin")
    	      .addField (" __Purge__:", "Supprime xx messages 🗑️", false)
    	      .addField ("__Ban__:", "Ban un utilisateur 🔨", false)
    	      .addField ("__Kick__:", "Expulse un utilisateur 💫", false)
    	      .addField ("__Mute__", "Mute un utilisateur " , false)
              .addField ("__Unmute__", "Unmute un utilisateur " , false)
            .addField (" __Report__:", "Report un utilisateur 🗂️", false)
            .addField ("__Reminder__", "Envoi un message toute les X seconde" , false)
            .setTimestamp()
    	      .setFooter ("Crée par zechaos en JavaScript")
    	   message.channel.send(help_embed);
    	   message.channel.send (help_embedfun);
    	   message.channel.send (help_embedinfo);
    	   message.channel.send (help_embedadmin);
    	   console.log(`${message.author.username} | Help`)
   }

   //Embed help membre
   if (message.content === prefix + "help membre") {
     let help_embed1 = new Discord.RichEmbed ()
    	      .setColor('#15f153')
    	      .setTitle ("Commandes des membre ")
            .addField("__Setup__:","Envoi un message pour le bon fonctionnement du bot",false)
    	      .addField ("__Help__:","Affiche le help 🙇‍♂️", false)
    	      .addField ("__Ping__:", "Ping le bot 🏓", false)
    	      .addField ("__Avatar__:", "Affiche votre avatar 🎎", false)
    	      .addField ("__Invitation__:", "Envoi l'invitation du bot 📨", false)
    	      .addField ("__Check__:", "Vérifie si le bot et opérationnel et fait un ping 📢", false)
    	      .addField ("__Google__ :", "Fait une requête sur Google ", false)
            .setTimestamp()
            .setFooter(`${message.author.username} | Help membre`);
    	      message.channel.send(help_embed1);
   }
   //embed fun
   if (message.content === prefix + "help fun") {
   	let help_embedfun = new Discord.RichEmbed ()
    	      .setColor ("#01B0F0")
    	      .setTitle ("Commandes fun")
    	      .addField ("__Verlan__:"," Inverse un message 🔄 ", false)
    	      .addField ("__Pièce__:", "Choisi entre pile ou face (et pas tranche) 🎲", false)
    	      .addField ("__8ball__:", "Choisi un réponse à votre place 📠", false)
    	      .addField ("__Dice__:", "Lance un dé et prend un chiffre entre 1 et 6 🎲",false)
    	      .addField ("__Astrologia__:", "Dit ton signe astrologique ⛎", false)
    	      .addField ("__Say__", "Dit une phrase au bot 🤖💬", false)
           .addField ("__Kiss__", "Fait un bisou a une personne 💋 (++kiss [mention])", false)
           .addField ("__Hug__", "Fait un calin a une personne 👐 (++hug [mention])", false)
           .addField ("__Cry__", "Vous pleurez de tristesse 😢", false)
           .addField ("__Pat__", "Vous carressez une personne 👋 (++pat [mention] ) ", false)
           .addField ("__Punch__", "Vous donnez un coup de poing a une personne 👊 (++punch [mention]) ", false)
           .addField ("__Pout__", "Vous boudez une personne 😶 (++pout [mention]) ", false)
           .addField ("__Handholding__", "Vous tenez la main a une personne 🤝 (++handholding [mention]) ", false)
           .addField ("__Fuck__", "Fait un doigt d'honneur à quelqu'un 🖕(++fuck [mention])" , false )
           .addField ("__Res__", "Ressuscite quelqu'un 😇 (++res [mention])" , false )
           .addField ("__Everyone__", "Envoi une image ***__EVERYONE__*** 😡 " , false)
           .addField ("__Troll__", "Vous troller quelqu'un " , false)
           .addField ("__Slap__", "Claque une personne 🤚 (++slap [mention]) " , false)
           .addField ("__Shoot__", "Vous tirez sur quelqu'un 🔫" , false)
           .addField ("__Highfive__", "Fait un highfive à une personne 🙏" , false)
           .addField ("__Triggered __", "Envoi un image triggered" , false)
           .setTimestamp()
           .setFooter(`${message.author.username} | Help fun`);
   	message.channel.send (help_embedfun);
   	}
   //Embed help info
   if (message.content === prefix + "help info") {
   	let help_embedinfo1 = new Discord.RichEmbed ()
   	       .setColor ("#333333")
    	      .setTitle ("Commandes information")
    	      .addField ("__News__:", "Vous informe des prochaines mise à jour du bot📥", false)
           .addField ("__Owner__:", "Envoi un message avec la mention du créateur 📧", false)
    	      .addField ("__Misthstats__:","Vous informe de l'état du bit de test 🤖",false)
    	      .addField ("__Serverinfo__:","Donne les statistiques du serveur 💹", false)
    	      .addField ("__Botinfo__:","Donne les statistiques du bot 📝",false)
    	      .addField ("__Userinfo__:","Donne les informations de l'utilisateur 👤", false)
    	      .addField ("__Trello__:", "Affiche le trello du bot 📰", false )
    	      .addField ("__Diserver__:", "Donne la liste de tout les serveur ou se situe le bot📜", false)
            .setTimestamp()
            .setFooter(`${message.author.username} | Help info`);
    	    message.channel.send (help_embedinfo1);
   }
   //Embed help admin
   if (message.content === prefix + "help admin") {
   	  let help_embedadmin1 = new Discord.RichEmbed ()
    	      .setColor ("#B9121B")
    	      .setTitle ("Commandes Admin")
    	      .addField (" __Purge__:", "Supprime xx messages 🗑️", false)
    	      .addField ("__Ban__:", "Ban un utilisateur 🔨", false)
    	      .addField ("__Kick__:", "Expulse un utilisateur 💫", false)
            .addField ("__Mute__", "Mute un utilisateur " , false)
              .addField ("__Unmute__", "Unmute un utilisateur " , false)
            .addField (" __Report__:", "Report un utilisateur 🗂️", false)
            .addField ("__Reminder__", "Envoi un message toute les X seconde" , false)
            .setTimestamp()
            .setFooter(`${message.author.username} | Help info`);
    	      message.channel.send (help_embedadmin1);
    }
   //Embed ping
   if (message.content === prefix + "ping") {
      	let ping_embed = new Discord.RichEmbed ()
    	      .setColor('#333333')
    	      .setTitle ("Ping")
    	      .addField ('Pong! Mon ping est de', '***' + `${Date.now() - message.createdTimestamp}` + ' ms***🏓', true )
            .setTimestamp()
            .setFooter(` Ping |`);
         message.channel.send(ping_embed) ;
         console.log (`${message.author.username} |ping `)
    }
    if (message.content === prefix + "pong") {
      	let ping_embed = new Discord.RichEmbed ()
    	      .setColor('#333333')
    	      .setTitle ("Pong")
    	      .addField ('Ping! Mon pong est de', '***' + `${Date.now() - message.createdTimestamp}` + ' ms***🏓', true )
            .setTimestamp()
            .setFooter(` Pong |`);
         message.channel.send(ping_embed) ;
         console.log ("Commande pong ")
    }
    //Embed invitation
    if (message.content === prefix + "invitation") {
    	   let invite_embed = new Discord.RichEmbed ()
    	      .setColor('#333333')
    	      .setTitle ("Invitation ")
    	      .addField ("Invitation du bot et invitation serveur ", "Voici le lien du [discordbots ](https://discordbots.org/bot/409253299699843072) pour rejoindre le serveur et m'inviter sur ton serveur ", true)
            .setTimestamp()
            .setFooter(`Invitation`);
        message.channel.send(invite_embed) ;
         console.log (`${message.author.username} | Invitation`)
    }
    if (message.content === prefix + "trello") {
    	  let trello_embed = new Discord.RichEmbed ()
    	      .setColor('#333333')
    	      .setTitle ("Trello")
    	      .addField ("Pour suivre l'avancement du bot", "Voilà le [trello ](https://trello.com/b/rUl5NBRH/nitral) du bot " )
            .setTimestamp()
            .setFooter(`Trello`);
         message.channel.send(trello_embed) ;
         console.log (`${message.author.username} | Trello`)
    }
    //Embed site (flyfamile)
    if (message.content === flyfamille + "site") {
    	   let site_embed = new Discord.RichEmbed ()
    	      .setColor ('#333333')
    	      .setTitle ("Site")
    	      .addField ("Pour suivre toute les News du serveur Fly Family", " Voilà le [site internet ](https://zechaos.wixsite.com/flyfamile) du serveur" )
         message.channel.send(site_embed) ;
    }
    //Embed misthstats
    if (message.content === prefix + "misthstats") {
    	   let misthstats_embed = new Discord.RichEmbed ()
    	      .setColor('#01B0F0')
    	      .setTitle ("Misth est off")
    	      .addField ("**__Aucun test en cours __**" ,'Aucun' )
            .setTimestamp()
            .setFooter(`MisthStat`);
         message.channel.send(misthstats_embed) ;
         console.log(`${message.author.username} | MisthStat`)
    }
    	if (message.content.startsWith (prefix + "google")) { 
   		let args = message.content.split(' ') 
   		args.shift ()
   		message.channel.send ("Voici le résultat de votre recherche: https://www.google.fr/#q=" +args.join('%20'))
         console.log(`${message.author.username} | google `)
}
    //Embed serveur info
   if (message.content === prefix +`serverinfo`){

 	    let sicon = message.guild.iconURL;
     	let serverembed = new Discord.RichEmbed()
     	.setDescription("Informations serveur")
     	.setColor("#15f153")
     	.setThumbnail(sicon)
     	.addField("Nom du serveur", message.guild.name,false )
     	.addField("Date de création", message.guild.createdAt,false)
     	.addField("Date de venu", message.member.joinedAt,false)
     	.addField("Membres Total", message.guild.memberCount,false)
      .addField ("Propriétaire du serveur", message.guild.owner.username,false)
      .addField ("ID du serveur", message.guild.id, false)
      .setTimestamp()
      .setFooter(`${message.author.username} | Server Info`);
   	  return message.channel.send(serverembed);
   	  console.log("Commande serverinfo ")
   }
 //Embed botinfo
   if (message.content === prefix +`botinfo`){
  	  	 let bicon = bot.user.displayAvatarURL;
  	  	 let botembed = new Discord.RichEmbed()
  	  	 .setTitle("Information sur le bot")
  	  	 .setColor("#15f153")
  	  	 .setThumbnail(bicon)
  	  	 .addField("Nom du bot", bot.user.username, false)
  	  	 .addField("Date de création", bot.user.createdAt,false )
  	  	 .addField ("ID du bot ", bot.user.id,false )
  	  	 .addField ("Créateur du bot", "[BCFB] zechaos", false)
  	  	 .addField ("Données serveur", bot.guilds.size, false)
  	  	 .addField ("Données utilisateurs", bot.users.size, false)
  	  	 .addField ("Le trello du bot", "Voilà mon [Trello](https://trello.com/b/rUl5NBRH/nitral) Pour voir l'avancement du bot ",false )
  	  	 .addField ("Invitation du bot et invitation serveur ", "Voici le lien du [discordbots ](https://discordbots.org/bot/409253299699843072) pour rejoindre le serveur et m'inviter sur ton serveur ", true)
  	  	 .addField ("Hebergeur", "Hébergement local avec un Asus zenfone 4 en full 4G")
  	  	 .addField ("Langage de programmation", "Crée en JavaScript", false)
         .setTimestamp()
         .setFooter(`${message.author.username} | Bot Info`);
  	  	 return message.channel.send(botembed);
  	  	 console.log(`${message.author.username} | Bot Info`)
   }

   if (message.content === "serveur team wolf") {
      message.reply ("https://discord.gg/suFsCPy")
   }
   //Embed userinfo
     if (message.content === prefix +`userinfo`){
  	  	 let bot2embed = new Discord.RichEmbed()
  	  	 .setTitle("Information sur l'utilisateur ")
  	  	 .setColor("#15f153")
  	  	 .setThumbnail(message.author.avatarURL)
  	  	 .addField ("Pseudo", message.author.username + message.author.discriminator, false)
  	  	 .addField ("Date de création du compte", message.author.createdAt, false)
  	  	 .addField("Date de venu", message.member.joinedAt,false)
  	   	 .addField ("ID de l'utilisateur", message.author.id,false )
         .setTimestamp()
         .setFooter(`User Info`);
  	  	 return message.channel.send(bot2embed);
  	  	 console.log(`${message.author.username} |UserInfo`)
   }
      //Kick
      if (message.content.startsWith(prefix + "kick")) {

        if (!message.channel.permissionsFor(message.author).hasPermission("KICK_MEMBERS")) {
        message.channel.send ("📛 Tu n'as pas la permission 📛");
        console.log("📛 Tu n'as pas la permission 📛");
        return;
      }
      else if (!message.channel.permissionsFor(bot.user).hasPermission("KICK_MEMBERS")) {
        message.channel.send ("📛 Je n'es pas la permission 📛");
        console.log("📛 Je n'es pas la permission 📛");
        return;
      }
      if(message.mentions.users.size === 0){
			return message.channel.send ("**:x: Veuillez mentionner l'utilisateur que vous voulez kick**")
	}

        var member= message.mentions.members.first();

        member.kick().then((member) => {
          message.channel.bulkDelete (1)
          let kickEmbed = new Discord.RichEmbed()
             .setDescription("~Kick~")
             .setColor("#e56b00")
             .addField("Utilisateur Kick", `${member}`)
             .addField("Kick par", `${message.author.username}`)
             .addField("Kick dans ", message.channel)
             .addField("Le", message.createdAt)
             .setTimestamp()
             .setFooter(`Kick`);
      message.channel.send("👋" + member.displayName + " à était belle et bien kick 💫");
                    let incidentchannel = message.guild.channels.find(`name`, "logs-nitral");
    if(!incidentchannel) return message.channel.send("Impossible de trouver le channel ```logs-nitral```.");

              incidentchannel.send(kickEmbed)
        })
        .catch(() => {
            message.channel.send("⛔ Accès refusé ⛔ ");
        });
        console.log(`${message.author.username} | kick ${member}`)
      }
      //Ban
      if (message.content.startsWith(prefix + "ban")) {

        if (!message.channel.permissionsFor(message.author).hasPermission("BAN_MEMBERS")) {
        message.channel.send ("📛 Tu n'as pas la permission 📛");
        console.log("📛 Tu n'as pas la permission 📛");
        return;
      }
      else if (!message.channel.permissionsFor(bot.user).hasPermission("BAN_MEMBERS")) {
        message.channel.send ("📛 Je n'es pas la permission 📛");
        console.log("📛 Je n'es pas la permission 📛");
        return;
     }
     if(message.mentions.users.size === 0){
			return message.channel.send ("**:x: Veuillez mentionner l'utilisateur que vous voulez ban**")
	}

        var member= message.mentions.members.first();

        member.ban().then((member) => {
        	message.channel.bulkDelete (1)
          let banEmbed = new Discord.RichEmbed()
             .setDescription("~Ban~")
             .setColor("#e56b00")
             .addField("Utilisateur ban", `${member}`)
             .addField("Ban par", `${message.author.username}`)
             .addField("Ban dans ", message.channel)
            .addField("Le", message.createdAt)
            .setTimestamp()
            .setFooter(`Ban`);
            message.channel.send("👋 Le ***__BanHammer__*** a frappé sur " + member.displayName + " pas sûre qu'il s'en remet ");
              let incidentchannel = message.guild.channels.find(`name`, "logs-nitral");
    if(!incidentchannel) return message.channel.send("Impossible de trouver le channel ```logs-nitral```.");

              incidentchannel.send(banEmbed)
        })
        .catch(() => {
            message.channel.send("⛔ Accès refusé ⛔ ");
        });
        console.log(`${message.author.username} | Ban ${member}`)
      }
      //diserver
     if (message.content === prefix + "diserver") {
    	      message.channel.send ( "Connecté dans les serveur \n\n```" + bot.guilds.array () +"```" )
        message.channel.send (bot.users.size + " utilisateurs \n" + bot.guilds.size + " serveurs")
          console.log (`${message.author.username} | diserver`)
    }
    //Verlan
    if (message.author.bot) return;
    if (message.content.indexOf(prefix +'verlan') === 0) {

        var text = message.content.substring(7);

        var reversed = '';
        var i = text.length;

        while (i > 0) {
            reversed += text.substring(i - 1, i);
            i--;
        }

        message.channel.send(reversed);
        console.log("Verlan")
    }
    //pile ou face
  var pile_ou_face = ["pile ", "face"]
  var piece = pile_ou_face[Math.floor(Math.random() * pile_ou_face.length)] ;

  if (message.content === prefix + "pièce") {
  	   message.channel.send ("La pièce est lancé...")
  	   message.channel.bulkDelete (1)
  	   message.channel.send ("Le résultat est " + piece)
  	   console.log (`${message.author.username} | Piéce`)
  	  }
  	  //8ball
  function doMagic8BallVoodoo() {
 	var text = message.content.substring(6);
var rand = ['Oui ','Assurément','Pas du tout ',"Demande à quelqu'un d'autre. " , "C'est sûre", 'Non', 'Je ne peux pas le dire maintenant ', ' Probablement que non ', ' Probablement que oui ' , 'Peut-être ', ' Jamais ', "Je n'est pas la réponse à " + text, "Je crois", "Sûrement \n\n\n \n \n pas" ];

      return rand[Math.floor(Math.random()*rand.length)];
    }

   if(message.content.startsWith( prefix +"8ball")) {

    message.channel.send ( doMagic8BallVoodoo() )
    console.log (`${message.author.username} | 8ball`)
    }

  //Dé
  var dévar = [":one: ", ":two:",":tree:",":foor",":five:",":six:"]
  var  dévaran = dévar[Math.floor(Math.random() * dévar.length)] ;

  if (message.content === prefix + "dice") {
  	   let dembed2 = new Discord.RichEmbed ()
  	     .setColor ('#15f153')
  	     .addField ("Le résultat est ", dévaran)
         .setTimestamp()
         .setFooter(`${message.author.username} | Dice`);
        return message.channel.send(dembed2);
  	      console.log (`${message.author.username} | Dice`)
  	  }
  	  //Astrologia
  	  var astre = ["Bélier ♈ ", "Taureau ♉", "Gémeaux ♊", "Cancer ♋", "Lion ♌", "Vierge ♍", "Balance ♎", "Scorpion ♏", "Sagittaire ♐", "Capricorne ♑", "Verseau ♒", "Poisson ♓" ]
     var ast = astre[Math.floor(Math.random() * astre.length)] ;

    if (message.content.startsWith (prefix +"astrologia") ) {
     	let astembed = new Discord.RichEmbed ()
     	.addField ("Le signe astrologique est ", ast)
      .setTimestamp()
      .setFooter(`${message.author.username} | Astrologia`);
      	message.channel.send (astembed)
      	console.log ("Astrologia")
    	}
    if (message.content.startsWith (prefix +"say")) {
       var text = message.content.substring(5);
      message.channel.bulkDelete (1)
       message.channel.send (text)
   console.log (`${message.author.username} | Say` + text)
    }
    //KISS & HUGS & CRY
          //variable
      var cry = ["https://cdn.weeb.sh/images/Syzw78XPZ.gif" ,"https://cdn.weeb.sh/images/HymMXUQPW.gif" , "https://cdn.weeb.sh/images/ryap_aEC-.gif" ,"https://cdn.weeb.sh/images/SJ-11x5kz.gif" ,"https://cdn.weeb.sh/images/Bk_fmL7wZ.gif" ,"https://cdn.weeb.sh/images/rJ5IX8XPZ.gif" ]
      var kiss = ["https://cdn.weeb.sh/images/SJINn6OPW.gif", "https://cdn.weeb.sh/images/SJ--2auDZ.gif", "https://cdn.weeb.sh/images/BkLQnT_PZ.gif","https://cdn.weeb.sh/images/BkUJNec1M.gif", "https://cdn.weeb.sh/images/S1VEna_v-.gif","https://cdn.weeb.sh/images/H1e7nadP-.gif", "https://cdn.weeb.sh/images/SJ3dXCKtW.gif", "https://cdn.weeb.sh/images/H1Gx2aOvb.gif", "https://cdn.weeb.sh/images/B1yv36_PZ.gif", "https://cdn.weeb.sh/images/Bkuk26uvb.gif",
 "https://cdn.weeb.sh/images/SJ8I2Tuv-.gif", "https://cdn.weeb.sh/images/ryoW3T_vW.gif", "https://cdn.weeb.sh/images/r1mcJlFVz.gif","https://cdn.weeb.sh/images/ryceu6V0W.gif","https://cdn.weeb.sh/images/B12LhT_Pb.gif","https://cdn.weeb.sh/images/rymvn6_wW.gif"]
      var pat = ["https://78.media.tumblr.com/1a207f8a51036ed1c8f788cda15c9d29/tumblr_nb0gnw9qgh1tbewqgo1_500.gif" ,"https://68.media.tumblr.com/584a3894e3483eed23d1afaf1f6f9347/tumblr_ok1oplyzSF1r0tp5lo1_500.gif", "http://78.media.tumblr.com/229ec0458891c4dcd847545c81e760a5/tumblr_mpfy232F4j1rxrpjzo1_r2_500.gif" ,"http://gifimage.net/wp-content/uploads/2017/07/head-pat-gif-10.gif" ,"http://www.cvltnation.com/wp-content/uploads/2014/03/1-12-13-hilarious-caturday-funny-cat-photos9.gif", "https://media1.tenor.com/images/68d981347bf6ee8c7d6b78f8a7fe3ccb/tenor.gif?itemid=5155410" ,]
      var punch = ["https://cdn.weeb.sh/images/HJfGPTWbf.gif", "https://78.media.tumblr.com/f0032ce15e4ded204b83b00c764a52ad/tumblr_olcckgOtiA1qzxv73o1_r4_500.gif","http://media.giphy.com/media/11zD6xIdX4UOfS/giphy.gif","https://media.tenor.co/images/7a582f32ef2ed527c0f113f81a696ae3/tenor.gif","https://media.tenor.co/images/7a582f32ef2ed527c0f113f81a696ae3/tenor.gif","http://www.videovortex.evan-roth.com/gifs2/Punch-Anime.gif","http://gph.is/15zjo9x"]
      var hug = ["https://cdn.weeb.sh/images/rypMnpuvW.gif", "https://cdn.weeb.sh/images/HJ5khTOP-.gif", "https://cdn.weeb.sh/images/B1yv36_PZ.gif", "https://cdn.weeb.sh/images/Skv72TuPW.gif", "https://cdn.weeb.sh/images/rkv_mRKF-.gif","https://cdn.discordapp.com/attachments/368563696617652225/422316938983899146/9137021.gif", "https://cdn.discordapp.com/attachments/368563696617652225/419295112430878730/photofunky_1.gif","https://cdn.weeb.sh/images/HyNJIaVCb.gif","https://cdn.weeb.sh/images/SJfEks3Rb.gif","https://cdn.weeb.sh/images/Bk5T2_1Ob.gif","https://cdn.weeb.sh/images/HkQs_dXPZ.gif","https://cdn.weeb.sh/images/BJx2l0ttW.gif","https://cdn.weeb.sh/images/BJF5_uXvZ.gif","https://cdn.weeb.sh/images/B1wRd_XP-.gif"];
      var bang = ["https://cdn.weeb.sh/images/rJmPWI7wW.gif", "https://cdn.weeb.sh/images/SJeGENYoW.gif", "https://cdn.weeb.sh/images/BkzSQVFoZ.gif", "https://cdn.weeb.sh/images/rkccQNFib.gif", " https://cdn.weeb.sh/images/SkFub87DW.gif", "https://cdn.weeb.sh/images/BJADXEtoZ.gif" ]
      var hand =  ["https://cdn.weeb.sh/images/SJbTxT9Wz.gif", "https://cdn.weeb.sh/images/rJx5xa9bf.gif", "https://cdn.weeb.sh/images/H1urgT5-f.gif", "https://68.media.tumblr.com/316b2837d1d4f027142f8162951b8db3/tumblr_mz2up4FAOQ1qbvovho1_500.gif" ,"http://media.tumblr.com/a384c66a6debfacc82459715f9d5985e/tumblr_inline_mte8heJG8W1rg1ld5.gif" ,"http://media.tumblr.com/e0cc7b7e054669220d9034618751fb05/tumblr_inline_mte8loMS1o1rg1ld5.gif" ,"https://78.media.tumblr.com/22889ee665317daea4a69bc3c24ee250/tumblr_n1mt3301tx1rr1hwfo1_500.gif" , "http://78.media.tumblr.com/97ff60aa0f57511633e4b0bdd78c1f21/tumblr_mrwcg7T6KT1rkam12o1_500.gif","https://78.media.tumblr.com/84aab8e7f877b3c4fa2ab9b9201fec6b/tumblr_no2qmvDrrM1uury7mo3_500.gif"]
      var pout = ["http://pa1.narvii.com/5880/de25826d12fce634d694291a00af43122a23af2b_hq.gif","https://uploads.disquscdn.com/images/483afd92544bee20e84f830b6da7ce862a752e040590f894d66de0562cd17227.gif","https://68.media.tumblr.com/92f87109d279c9e20c9ce523f191dabb/tumblr_o4pc6iBTl61tydz8to1_500.gif","https://68.media.tumblr.com/68b702ab1f085727e3cfcc5509d1d16c/tumblr_og9nynBygL1vuhwqdo1_1280.gif","https://pa1.narvii.com/5939/2251a3e1feeabac7a1c1b254e75b4bd73ad7e544_hq.gif"]
      var high = ["https://78.media.tumblr.com/4bf533322777242924727977936e6c28/tumblr_n04birgZxv1rl376ro1_500.gif", "http://gifimage.net/wp-content/uploads/2017/09/anime-high-five-gif-14.gif", "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/epic-high-five-pokemon-ash-dawn.gif", "https://m.popkey.co/c95783/5x7Xl_f-maxage-0_s-200x150.gif", "https://78.media.tumblr.com/398ca8b1c1a0de03078f7dacd4d522b9/tumblr_o7leikmO391tkf3aao1_500.gif", "https://media.tenor.com/images/fbbf9713d5202abed4ad4f4c3306cbe9/tenor.gif", "http://78.media.tumblr.com/f958003a5b13cd0470afc736373ab519/tumblr_n0os0yvKQw1tnvwmho1_500.gif", "https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/hunterxhuntermangareturning.gif" ]
      var res = ["https://i.pinimg.com/originals/68/3e/a2/683ea223d344dcf03b8258e1a4030343.gif","https://i.makeagif.com/media/12-04-2015/QL4eHR.gif"]
      var troll = ["https://babylon.naurunappula.com/org/60/68/60685a3f47cb9ef4/0/666869.gif", "https://media1.tenor.com/images/3aad9119d3eba20f572cce7f431442ae/tenor.gif?itemid=4494681", "http://gif-finder.com/wp-content/uploads/2015/05/LOL-Trol-Face.gif", "http://78.media.tumblr.com/e590b1e38ac2614a5a12ffd6831eed80/tumblr_n5n7n3zts01qbahrjo1_400.gif" ]
      var cud = ["https://cdn.weeb.sh/images/SJceIU7wZ.gif", "https://cdn.weeb.sh/images/r1A77CZbz.gif", "https://cdn.weeb.sh/images/SJYxIUmD-.gif", "https://cdn.weeb.sh/images/BkZCSI7Pb.gif", "https://cdn.weeb.sh/images/rkBl8LmDZ.gif", "https://cdn.weeb.sh/images/B1_e1gTXG.gif", "https://cdn.weeb.sh/images/BkkgL8mDW.gif", "https://cdn.weeb.sh/images/Hy5y88mPb.gif" ]
      var fuck = ["http://images5.fanpop.com/image/photos/30800000/Fuck-you-anime-30843105-270-256.gif","http://i.imgur.com/ItdrZKi.gif","https://i.pinimg.com/originals/f5/bb/f1/f5bbf1445b067c26d88cbe589d846fd9.gif", "https://i.pinimg.com/originals/05/65/45/0565450075fbb023fa061f4af4916ee6.gif", "https://cloud.lovinmalta.com/images/Queen-Elizabeth-II-Fuck-you-Reaction-gif.gif?mtime=20160825115716",
"http://www.gifimili.com/gif/2018/02/homer-simpson-doigt-d-honneur.gif","http://chantouvivelavie.c.h.pic.centerblog.net/42a0eb5c.gif", "https://www.tuxboard.com/photos/2016/03/fuck-femme-doigt-dhonneur-1.gif", "http://legeekcestchic.eu/wp-content/uploads/2014/06/le-tumblr-du-jour-dites-le-avec-un-doigt3.gif", "http://static.hitek.fr/img/actualite/25rnq80.gif", "https://dailygeekshow.com/wp-content/uploads/2013/08/22-images-qui-ruineront-vos-souvenirs-denfance-a-tout-jamais22.gif", "https://media.melty.fr/article-3549942-raw/media.gif" ]
      var ev = ["http://i0.kym-cdn.com/photos/images/facebook/001/291/661/4cf.jpg", "http://i0.kym-cdn.com/photos/images/original/001/243/406/73c.jpg", "http://i0.kym-cdn.com/photos/images/original/001/242/548/f0f.jpg", "https://pics.me.me/everyone-discord-memes-buy-or-sell-19502778.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2gL44pt4ZC4w9VOq9bekbeH4NVwG-9wJ8QkcNWI7alt5zavu9", "https://i.imgur.com/FTB2stB.gif", "https://i.imgur.com/7cQtGb1.png"]
      var slap = ["https://cdn.weeb.sh/images/BJ8o71tD-.gif", "https://cdn.weeb.sh/images/SJlkNkFwb.gif", "https://cdn.weeb.sh/images/SkSCyl5yz.gif", "https://cdn.weeb.sh/images/B1oCmkFw-.gif", "https://cdn.weeb.sh/images/rknn7Jtv-.gif", "https://cdn.weeb.sh/images/HkJ6-e91z.gif", "https://cdn.weeb.sh/images/ByHUMRNR-.gif"]


          //ALEA
      var cuddle = cud [Math.floor(Math.random() * cud.length)] ;
      var trolling = troll [Math.floor(Math.random() * troll.length)] ;
      var five = high [Math.floor(Math.random() * high.length)] ;
     var banging = bang [Math.floor(Math.random() * bang.length)] ;
      var eve = ev [Math.floor(Math.random() * ev.length)] ;
      var resing = res [Math.floor(Math.random() * res.length)] ;
      var fucking = fuck [Math.floor(Math.random() * fuck.length)] ;
      var crying = cry[Math.floor(Math.random() * cry.length)] ;
      var pating = pat[Math.floor(Math.random() * pat.length)] ;
      var kissing = kiss[Math.floor(Math.random() * kiss.length)] ;
      var slapping = slap [Math.floor(Math.random() * slap.length)] ;
      var huging = hug[Math.floor(Math.random() * hug.length)] ;
      var punching = punch[Math.floor(Math.random() * punch.length)] ;
      var handholding = hand[Math.floor(Math.random() * hand.length)] ;
      var pouting = pout[Math.floor(Math.random() * pout.length)] ;

        //commandes
    if (message.content.startsWith (prefix +"highfive")) {
            var text = message.content.substring(11)
            var fiveEmbed = new Discord.RichEmbed()
              .setColor ('#00FAD9')
              .setDescription(`${message.author.username}` + " a fait un highfive a "+ text )
              .setImage(five)
              .setTimestamp()
              .setFooter(`Highfive`)
              message.channel.send (fiveEmbed)
              console.log(`${message.author.username} | HighFive`)
    }

     if (message.content.startsWith (prefix +"troll")) {
            var text = message.content.substring(7)
            var trollEmbed = new Discord.RichEmbed()
              .setColor ('#00FAD9')
              .setDescription(`${message.author.username }` + " a troller"+ text )
              .setImage(trolling)
              .setTimestamp()
              .setFooter(`Troll`)
              message.channel.send (trollEmbed)
              console.log(`${message.author.username} | Troll`)
    }
     if (message.content.startsWith (prefix +"shoot")) {
          var text = message.content.substring(7)
          var bangEmbed = new Discord.RichEmbed()
              .setColor ('#00FAD9')
              .setDescription(`${message.author.username}` + " a tiré sur "+ text )
              .setImage(banging)
              .setTimestamp()
              .setFooter(`Shoot`)
              message.channel.send (bangEmbed)
              console.log(`${message.author.username} | Bang`)
    }
     if (message.content.startsWith (prefix +"fuck")) {
     	    var text = message.content.substring(6)
          var fuckEmbed = new Discord.RichEmbed()
              .setColor ('#00FAD9')
              .setDescription(`${message.author.username}` + " fait un doigt d'honneur à "+ text )
              .setImage(fucking)
              .setTimestamp()
              .setFooter(`Fuck`)
              message.channel.send(fuckEmbed)
              console.log(`${message.author.username} | Fuck`)
    }
    if (message.content.startsWith (prefix +"slap")) {
            var text = message.content.substring(6)
            var slapEmbed = new Discord.RichEmbed()
              .setColor ('#00FAD9')
              .setDescription(`${message.author.username}` + " donne une claque à "+ text )
              .setImage(slapping)
              .setTimestamp()
              .setFooter(`Slap`)
              message.channel.send(slapEmbed)
              console.log(`${message.author.username} | Slap`)

    }
    if (message.content.startsWith (prefix +"cuddle")) {
            var text = message.content.substring(8)
            var cudEmbed = new Discord.RichEmbed()
              .setColor ('#00FAD9')
              .setDescription(`${message.author.username}` + " réconforte "+ text )
              .setImage( cuddle)
              .setTimestamp()
              .setFooter(`Cuddle`)
              message.channel.send(cudEmbed)
              console.log(`${message.author.username} |Cuddle`)
    }
    if (message.content.startsWith (prefix +"everyone")) {
     	      var eveEmbed = new Discord.RichEmbed()
              .setColor ('#00FAD9')
              .setDescription(`${message.author.username}` + " a fait everyone ")
              .setImage(eve)
              .setTimestamp()
              .setFooter(`Everyone`)
              message.channel.send (eveEmbed)
              console.log(`${message.author.username} | Everyone`)
    }
    if (message.content.startsWith (prefix +"res")) {
     	      var text = message.content.substring(5)
            var resEmbed = new Discord.RichEmbed()
              .setColor ('#00FAD9')
              .setDescription(`${message.author.username}` + " ressuscite "+ text )
              .setImage(resing)
              .setTimestamp()
              .setFooter(`Ressurect`)
              message.channel.send(resEmbed)
              console.log(`${message.author.username} | Ressurect`)
    }
    if (message.content.startsWith (prefix +"cry")) {
            var cryEmbed = new Discord.RichEmbed()
              .setColor ('#00FAD9')
              .setDescription(`${message.author.username}` + " pleure" )
              .setImage(crying)
              .setTimestamp()
              .setFooter(`Cry`)
              console.log(`${message.author.username} | Cry`)
              message.channel.send(cryEmbed)

    }
    if (message.content.startsWith (prefix +"kiss")) {
            var text = message.content.substring(6)
            var kissEmbed = new Discord.RichEmbed()
              .setDescription(`${message.author.username}` + " fait un bisou a "  + text)
              .setColor ('#00FAD9')
              .setImage(kissing)
              .setTimestamp()
              .setFooter(`Kiss`)
              console.log(`${message.author.username} | Kiss`)
              message.channel.send(kissEmbed)

    }
    if (message.content.startsWith (prefix +"punch")) {
            var text = message.content.substring(7)
            var punchEmbed = new Discord.RichEmbed()
              .setColor ('#00FAD9')
              .setDescription(`${message.author.username}` + " donne un coup de poing à "+ text )
              .setImage(punching)
              .setTimestamp()
              .setFooter(`Punch`)
              console.log(`${message.author.username} | Punch`)
              message.channel.send(punchEmbed)

}
    if (message.content.startsWith (prefix +"handholding")) {
            var text = message.content.substring(13)
            var handEmbed = new Discord.RichEmbed()
              .setColor ('#00FAD9')
              .setDescription(`${message.author.username}` + " donne la main à " + text )
              .setImage(handholding)
              .setTimestamp()
              .setFooter(`Handholding`)
              console.log(`${message.author.username} | Handholding`)
              message.channel.send(handEmbed)

    }
    if (message.content.startsWith (prefix +"pout")) {
            var text = message.content.substring(6)
            var poutEmbed = new Discord.RichEmbed()
              .setColor ('#00FAD9')
              .setDescription(`${message.author.username}` + " boude "+ text )
              .setImage(pouting)
              .setTimestamp()
              .setFooter(`Pout`)
              console.log(`${message.author.username} | Pout`)
              message.channel.send(poutEmbed)

     }
    if (message.content.startsWith (prefix +"pat")) {
            var text = message.content.substring(5)
            var patEmbed = new Discord.RichEmbed()
              .setColor ('#00FAD9')
              .setDescription(`${message.author.username}` + " carresse "+ text )
              .setImage(pating)
              .setTimestamp()
              .setFooter(`Pat`)
              console.log(`${message.author.username} | Pat`)
              message.channel.send(patEmbed)
    }
    if (message.content.startsWith (prefix +"hug")) {
            var text = message.content.substring(5)
            var HugEmbed = new Discord.RichEmbed()
              .setColor ('#00FAD9' )
              .setDescription(`${message.author.username}` + " fait un calîn a "  + text)
              .setImage(huging)
              .setTimestamp()
              .setFooter(`Hug`);
              message.channel.send(HugEmbed)
              console.log(`${message.author.username} | Hug`)
      }
      //triggered
      if(message.content.startsWith(prefix + "triggered")) {
        var image;
        var args = message.content.split(" ").slice(1).join(" ");
          if(args){
            var image = args;
          }else{
            var image = message.author.avatarURL;
          }
            message.channel.send({ file: { attachment: "http://www.triggered-api.tk/api/v1/url=" + image, name: "triggered.gif"
          }})
          console.log(`${message.author.username} | Triggered`)
        }

      if (message.content.startsWith(prefix + "purge")) {

        if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
          message.channel.send ("📛 Tu n'as pas la permission 📛");
          console.log("📛 Tu n'as pas la permission 📛");
          return;
        }
        else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) {
          message.channel.send ("📛 Je n'es pas la permission 📛");
          console.log("📛 Je n'es pas la permission 📛");
          return;
        }
        let args = message.content.split(" ").slice(1);
        if (!args[0]){
          message.delete();
          message.channel.send("Données incorrecte")
          return;
        }
        if (args[0] > 100){
          message.delete();
          var offclearEmbed = new Discord.RichEmbed()
                .setColor ('#00FAD9')
                .setDescription("Le nombre maximal est est : 100" )
                .setTimestamp()
                .setFooter(` Purge `);
                message.channel.send(offclearEmbed)
                console.log(`${message.author.username} | Purge incorrete`)
          return;
        }
        message.delete();
        message.channel.bulkDelete(args[0]);
            var onclearEmbed = new Discord.RichEmbed()
                  .setColor ('#00FAD9')
                  .setDescription(`${message.author.username}` + " a clear "+ args[0] + " messages" )
                  .setTimestamp()
                  .setFooter(` Purge `);
                  message.channel.send(onclearEmbed)
                  var onclearEmbed2 = new Discord.RichEmbed()
                        .setDescription("~Purge~")
                        .setColor ('#e56b00')
                        .addField("Utilisateur", `${message.author.username}`, false)
                        .addField("Nombre de message supprimé",args[0] + " messages")
                        .addField("Channel", message.channel, false)
                        .addField("A", message.createdAt, false)
                        .setTimestamp()
                        .setFooter(` Purge `);
              let incidentchannel = message.guild.channels.find(`name`, "logs-nitral");
              if(!incidentchannel) return message.channel.send("Impossible de trouver le channel `logs-nitral`.");

                        incidentchannel.send(onclearEmbed2)
        console.log(`${message.author.username} | Purge `+ args[0] + " messages")
        return;
   }
  if (message.content.startsWith(prefix + "report")) {
    var member= message.mentions.members.first();
    var text = message.content.substring(8)
    message.channel.send(`${message.author.username} vient de report ${member}.\n\n **Raison :** ${text}. `);
      let repEmbed = new Discord.RichEmbed()
         .setDescription("~Report~")
         .setColor("#e56b00")
         .addField("Utilisateur Report", `${member}`, false)
         .addField("Report par", `${message.author.username}`, false)
         .addField("Dans ", message.channel, false)
         .addField("Le", message.createdAt, false)
         .addField ("Raison", text, false)
         .setTimestamp()
         .setFooter(` Report`);

          let incidentchannel = message.guild.channels.find(`name`, "report-nitral");
          if(!incidentchannel) return message.channel.send("Impossible de trouver le channel ```report-nitral```.");

          incidentchannel.send(repEmbed)
    console.log(`${message.author.username} | Report `)
  }
    if (message.content.startsWith ("ed")){
      message.channel.send ("https://www.ecoledirecte.com/login")
    }
    if (message.content.startsWith(prefix + "setup")) {
        message.channel.send("Pour le bon fonctionnement du bot \n \n Merci de cree un channel `report-nitral` pour tout les report fait par les membres\n \n Et de cree un channel `logs-nitral` pour tout les logs concernant les kick, ban, et purge")
          message.channel.send("En cas de probleme merci de le faire remonter sur le serveur officiel :https://discordapp.com/invite/DjKumUZ")
    }
       if (message.content.startsWith(prefix + "off")) {

     if(message.author.id == "234312981524119562"){

      message.channel.send ("Arrêt en cour");
      message.channel.send ("Arrêt en cour");
      message.channel.send ("Arrêt en cour");

        console.log('/ Je suis désormais offline / ');

        bot.destroy();
        process.exit()
    } else {
      message.channel.send("**Erreur** ! Tu n'es pas l'owner") 
    }
  }
 

if(message.content.startsWith(prefix + 'mute')){
if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_ROLES")) {
          message.channel.send ("📛 Tu n'as pas la permission 📛");
          console.log("📛 Tu n'as pas la permission 📛");
          return;
        }
        else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_ROLES")) {
          message.channel.send ("📛 Je n'es pas la permission 📛");
          console.log("📛 Je n'es pas la permission 📛");
          return;
        }
if(message.mentions.users.size === 0){
return message.channel.send ("**:x: Veuillez mentionner l'utilisateur que vous voulez mute**")
}
let muteMember = message.guild.member(message.mentions.users.first());
if(!muteMember){
return message.channel.send("**:x: Cet utilisateur n'est certainement pas valide**")
}
message.channel.overwritePermissions(muteMember, {SEND_MESSAGES: false}).then(member => {
message.channel.send(member.user.username+"a bien été mute**");
let muteEmbed = new Discord.RichEmbed()
             .setDescription("~Mute~")
             .setColor("#e56b00")
             .addField("Utilisateur mute", `${member}`)
             .addField("Mute par", `${message.author.username}`)
             .addField("Mute dans ", message.channel)
            .addField("Le", message.createdAt)
            .setTimestamp()
            .setFooter(`Mute`);
             let incidentchannel = message.guild.channels.find(`name`, "logs-nitral");
    if(!incidentchannel) return message.channel.send("Impossible de trouver le channel ```logs-nitral```.");
    incidentchannel.send(muteEmbed)
})
}
if(message.content.startsWith(prefix + 'unmute')){
if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_ROLES")) {
          message.channel.send ("📛 Tu n'as pas la permission 📛");
          console.log("📛 Tu n'as pas la permission 📛");
          return;
        }
        else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_ROLES")) {
          message.channel.send ("📛 Je n'es pas la permission 📛");
          console.log("📛 Je n'es pas la permission 📛");
          return;
        }
        if(message.mentions.users.size === 0){
			return message.channel.send ("**:x: Veuillez mentionner l'utilisateur que vous voulez unmute**")
	}
let unmuteMember = message.guild.member(message.mentions.users.first());
if(!unmuteMember){
return message.channel.send("**:x: Cet utilisateur n'est certainement pas valide**")
}
message.channel.overwritePermissions(unmuteMember, {SEND_MESSAGES: true}).then(member => {
message.channel.send(member.user.username + " a bien été unmute**" );
let unmuteEmbed = new Discord.RichEmbed()
             .setDescription("~Unmute~")
             .setColor("#e56b00")
             .addField("Utilisateur unmute", `${member}`)
             .addField("Unmute par", `${message.author.username}`)
             .addField("Unmute dans ", message.channel)
            .addField("Le", message.createdAt)
            .setTimestamp()
            .setFooter(`Unmute`);
            let incidentchannel = message.guild.channels.find(`name`, "logs-nitral");
    if(!incidentchannel) return message.channel.send("Impossible de trouver le channel ```logs-nitral```.");
    incidentchannel.send(unmuteEmbed)
})
}
if(message.content.startsWith(prefix + "reminder")){
if(message.channel.type === "dm") return;


if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")){return message.reply("**:x: Vous n'avez pas la permission Administrateur").catch(console.error);

}else{

let args = message.content.split(' ');
let time = args[1];
let timeofreminder = message.content.slice(2, args.length);

function reminder (remind, toRemind) {

if(!time){
message.channel.send("**:x: Erreur format, Correcte usage: `"+ prefix + "reminder <time en secondes !> <votre reminder>`**");
}else{
if(message.content.includes("reminder end")){

setInterval(function() {

message.channel.send();
}, (time * 1000));
message.channel.send("** J'ai enlevé votre reminder avec succès :wink:**");
}else{

setInterval(function() {

message.channel.send(message.content.slice(message.content.indexOf(message.content.split(" ")[2])));
}, (time * 1000));

message.channel.send("** J'ai ajouter votre reminder avec succès ! Tapez `" + prefix + "reminder end` pour l'enlever :wink:**");
}
}
}
reminder(time, timeofreminder);
}
}

});
//Token
bot.login (process.env.TOKEN)

    
    
    
