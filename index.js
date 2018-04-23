const Discord = require('discord.js')
const bot = new Discord.Client()
const low = require("lowdb");
const FileSync = require ('lowdb/adapters/FileSync')
const client = new Discord.Client();
const fs = require("fs");
const cute = require("cuteapi");
const cuteapi = new cute('process.env.TOKEN2');
const weather = require('weather-js');
bot.commands = new Discord.Collection();
const {get} = require("snekfetch");
const ms = require("ms");
//const economy = require('discord-eco');

let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

let rvotes =("99")

let xp = require("./xp.json");
var cooldown = new Set()
//let warns = JSON.parse(fs.readFileSync("warnings.json", "utf8"));
let prefix = "++"

//------------------------------------------------//
//                   Préfixe                      //
//------------------------------------------------//

let owner =("...nitrarootOwnergijcfzungecjydzgjivfbygjyevjuf. gecjydzgjivfbygjyevjuf...ngecjydzgjivfbygjyevjuf.")
let flyfamille = ("Fly'")

//------------------------------------------------//
//                   Initialisation du bot        //
//------------------------------------------------//

bot.on('ready',() => {
    setInterval (function (){
        bot.user.setStatus( 'online' );
        bot.user.setActivity(prefix + `help | ${bot.guilds.size} serveurs  | ${bot.users.size} utilisateurs`,{type: "WATCHING"});
        //bot.user.setActivity("En maintenance")
    },60000 *3);
  console.log("Je suis connecté !\n====================================\n\n" + bot.users.size + " utilisateurs \n" + bot.guilds.size + " serveurs \n\n====================================\n\n" + bot.guilds.array ())
});3000

/*fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});*/

bot.on("message", async message => {

let defineduser = message.mentions.users.first();

//------------------------------------------------//
//                   Bienvenue                    //
//------------------------------------------------//

//------------------------------------------------//
//                   Handler                      //
//------------------------------------------------//


/*if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(prefix.length);
  if(commandfile) commandfile.run(bot,message,args);*/
//------------------------------------------------//
//                   Préfixe                      //
//------------------------------------------------//

  /*let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

let prefix = prefixes[message.guild.id].prefixes;

if (message.content.startsWith(prefix + "setprefix")){
  if (!message.channel.permissionsFor(message.author).has("MANAGE_ROLES")) {
      message.channel.send ("📛 Tu n'as pas la permission 📛");
      console.log("📛 Tu n'as pas la permission 📛");
      return;
    }
  if(!args[0] || args[0 == "help"]) return message.reply("Usage : ++setprefix votre prefix");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix ")
  .setDescription(`Les prefixe est  ${args[0]}`);
  message.channel.send(sEmbed);
}*/

//------------------------------------------------//
//                  money                            //
//------------------------------------------------//

    /*let msg = message.content.toUpperCase();
    let cont1 = message.content.slice(prefix.length).split(" "); // This slices off the prefix, then stores everything after that in an array split by spaces.
    let args = cont.slice(1); // This removes the command part of the message, only leaving the words after it seperated by spaces
if (msg === `${prefix}BALANCE` || msg === `${prefix}MONEY`) { // This will run if the message is either ~BALANCE or ~MONEY
economy.fetchBalance(message.author.id + message.guild.id).then((i) => { // economy.fetchBalance grabs the userID, finds it, and puts the data with it into i.
            const embed = new Discord.RichEmbed()
                .setDescription(`**${message.guild.name} Bank**`)
                .setColor(0xD4AF37) // You can set any HEX color if you put 0x before it.
                .addField('Account Holder',message.author.username,true) // The TRUE makes the embed inline. Account Holder is the title, and message.author is the value
                .addField('Account Balance',i.money,true)
            message.channel.send({embed})
        })
    }*/
    
let coins = require("./coins.json");
if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  }
  if (message.content.startsWith(prefix + "coins")){
    
if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField("💸", uCoins);

  message.channel.send(coinEmbed)

}





      let xpAdd = Math.floor(Math.random() * 10) + 8;
      //  console.log(xpAdd);


        if(!xp[message.author.id]){
          xp[message.author.id] = {
            xp: 0,
            level: 1
          };
        }
        let curxp = xp[message.author.id].xp;
        let curlvl = xp[message.author.id].level;
        let nxtLvl = xp[message.author.id].level * 300;
        xp[message.author.id].xp =  curxp + xpAdd;
        if(nxtLvl <= xp[message.author.id].xp){
          xp[message.author.id].level = curlvl + 1;


        }
        fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
          if(err) console.log(err)
        });

  if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
   };
}
  if (message.content.startsWith(prefix + "levels")){
    let curxp2 = xp[message.author.id].xp;
    let curlvl2 = xp[message.author.id].level;
    let nxtLvlXp2 = curlvl * 300;
    let difference = nxtLvlXp2 - curxp2;

    let lvlEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("#AB49CD")
      .addField("Niveau :", curlvl2, false)
      .addField("XP", curxp2, false)
      .addField ("Prochain niveau ", difference ,false)
      .setTimestamp()
      .setFooter(`Levels`);
  message.channel.send(lvlEmbed)
  console.log(`${message.author.username} | levels `)
}
  if (message.content.startsWith(prefix + "xp")){
    let curxp2 = xp[message.author.id].xp;
        let xpEmbed = new Discord.RichEmbed()
          .setAuthor(message.author.username)
          .setColor("#AB49CD")
          .addField("XP", curxp2, false)
          .setTimestamp()
          .setFooter(`Levels`);
            message.channel.send(xpEmbed)
            console.log(`${message.author.username} | xp `)
  }
  if (message.content.startsWith(prefix + "progress")){
    let curxp3 = xp[message.author.id].xp;
    let curlvl3 = xp[message.author.id].level;
    let nxtLvlXp3 = curlvl * 300;
    let difference = nxtLvlXp3 - curxp3;
        let xpEmbed = new Discord.RichEmbed()
          .setAuthor(message.author.username)
          .setColor("#AB49CD")
          .addField ("Prochain niveau ","Dans" + difference + "xp",false)
          .setTimestamp()
          .setFooter(`Levels`);
            message.channel.send(xpEmbed)
            console.log(`${message.author.username} | progess `)
  }
    //------------------------------------------------//
    //                   Commande                     //
    //------------------------------------------------//
        //Fun

//Embed
let cat = ["http://img-comment-fun.9cache.com/media/c81c59c9145641080812687141_700wa_0.gif", "https://reseauinternational.net/wp-content/uploads/2015/10/gifa-cat-surprised.gif", "http://img4.hostingpics.net/pics/113686catmousetabletpounce.gif", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vslRfH69TDhw9to9dtiBi9fwtiOwjHJ7HRSvi7wYSCvqP6rl","https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ny85NTkvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzYzOTcxNjY1LmpwZw=="," http://www.ordanburdansurdan.com/wp-content/uploads/2017/06/oxgkvrvnd5o-1.jpg", "https://ichef.bbci.co.uk/news/660/cpsprodpb/71E1/production/_99735192_gettyimages-459467912.jpg", "https://cms.kienthuc.net.vn/zoom/500/Uploaded/ctvkhoahoc/2017_10_20/10_NMHD.jpg", "http://i0.kym-cdn.com/photos/images/facebook/000/012/445/lime-cat.jpg", "https://i2-prod.mirror.co.uk/incoming/article11812659.ece/ALTERNATES/s1200/The-Feline-World-Gathers-For-The-Supreme-Cat-Show-2017.jpg", "https://mymodernmet.com/wp/wp-content/uploads/2017/11/minimalist-cat-art-subreddit-10.jpg", "https://metrouk2.files.wordpress.com/2017/11/capture16.png?w=748&h=706&crop=1"] 
let cating = cat[Math.floor(Math.random() * cat.length)] ;
      
if (message.content === prefix + 'cat') {
    let catembed = new Discord.RichEmbed ()
        .setColor('#B9121B')
        .setTitle ("Chat")
        .setImage (cating)
    message.channel.send (catembed)
	}
    if (message.content ==="Team Wolf") {
        message.channel.send(":online-1: :wolf:**__TEAM WOLF EN FORCE__**:wolf:");
    }
	if (message.content.startsWith(prefix + "lock")){
       if (!client.lockit) client.lockit = [];
  const time = message.content.split(" ").slice(1).join(" ");
  const validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('Vous devez définir une durée pour le lockdown. En heures, minutes ou secondes');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Channel libéré ! ');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`Channel lock pendant ${ms(ms(time), { long:true })}`).then(msg => {msg.delete(ms(time))}).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('Channel libéré ! ')).then(msg => {msg.delete(10000)});
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};
	
	if (message.content === prefix +  "roll") {
	 let result = Math.floor((Math.random() * 1000) + 1);
  message.channel.send(":white_check_mark: | **Tu as obtenu le nombre** " + result);
}
       if (message.content === prefix +  "distrub") {
	     if(message.author.id == "236627494764150784"){
    	message.channel.bulkDelete (1)
    bot.user.setStatus( 'Online ' );
    bot.user.setActivity(prefix + `help | ${bot.guilds.size} serveurs  | ${bot.users.size} utilisateurs`,{type: "WATCHING"});
      message.channel.send ("En cours de modification \n `en ligne`")
} else {
      message.channel.send("**Erreur** ! Tu n'es pas l'owner")
    }
  }
function rand(low, high) {
    return Math.random() * (high + 1 - low) + low | 0;
}
if (message.content.startsWith(prefix + "rps")){
	const args8 = message.content.split(" ").slice(1).join(" ");
	
    if (args8[0]) {
      // get user choice && user choice
      let computer_choice = rand(0,3);
      let user_choice = args8[0] == "rock" ? 1 : args8[0] == "paper" ? 2 : 0;

      // if their choices are same its a draw :D
      if (computer_choice == user_choice) {
        message.channel.send("Egalité!");
      }
      else if (computer_choice < user_choice || computer_choice == 0 && user_choice == 2) {
        message.channel.send ( computer_choice + " J'ai gagné!");
      } else {
        message.channel.send ("Tu as gagné!");
      }
    } 
  }
	usage : () => {
    return "<prefix>rps rock/paper/scissors";
  },
	
	
	
	

  
if (message.content === prefix + "onmain") {
 if(message.author.id == "236627494764150784"){
    	message.channel.bulkDelete (1)
    bot.user.setStatus( 'idle' );
    bot.user.setActivity('EN MAINTENANCE');
        message.channel.send ("En cours de modification \n`en absence` et `EN MAINTENANCE`")
} else {
      message.channel.send("**Erreur** ! Tu n'es pas l'owner")
    }
  }
  if (message.content === prefix + "stopmain") {
	  if(message.author.id == "236627494764150784"){
  	message.channel.bulkDelete (1)
    bot.user.setStatus( 'dnd' );
 bot.user.setActivity(`++help | ${bot.guilds.size} serveurs | ${bot.users.size} utilisateurs`);
 message.channel.send ("En cours de modification \n`en ne pas dérange`")
} else {
      message.channel.send("**Erreur** ! Tu n'es pas l'owner")
    }
  }
    if (message.content === owner + "die") {
    	message.channel.bulkDelete (1)
    	message.channel.send ("@everyone \nCantus lupus\n Satura luna\n Corpus nudus domina\n Agnus totus\n Animus mortus\n Ave deus sinistra\n Cultus lupus\n Opus damnatus\n Metus mortis nocturna\n Terra sanguis\n Padre occultus\n Sanctus pupus anima")
    	 	}
    	if (message.content === "@everyone \nCantus lupus\n Satura luna\n Corpus nudus domina\n Agnus totus\n Animus mortus\n Ave deus sinistra\n Cultus lupus\n Opus damnatus\n Metus mortis nocturna\n Terra sanguis\n Padre occultus\n Sanctus pupus anima") {
    	message.channel.send ('@everyone \n Hac nocte solus es equitantes\n Altera super\n Eique fortitudo vestra exspectatione\n Puer eris extremum lumen\n Mater pugnavit daemonia\n Lucem vidit fratrem\n Et nunc orate ut summa lćtítia spiritáliter\n Te vivere, et non possum manere\n Lupus Filius Dei\n Cum vocant pugna est,\n Lupus Filius Dei\n Venit autem nox\n Lupus Filius Dei\n Tu exaudi me vocant?\n Alleluja: salus,\n Alius te mendax\n Et aliquando indicium\n Cum assumuntur\n Vides puero nocte socia\n Perpetuum fortes\n Duri fera temporum\n Novi vos Messiam\n Lupus natus est homo\n Lupus Filius Dei\n Cum vocant pugna est,\n Lupus Filius Dei\n Venit autem nox\n Lupus Filius Dei\n Tu exaudi me vocant?\n Alleluja: salus,\n Lupus Filius Dei\n Potes videre moreretur?\n Lupus Filius Dei\n Tacet nox atra\n Lupus Filius Dei\n Potestis audire vocantem sen\n Alleluja: salus,\n Agnus Dei in procellarum\n Ignarus et animi\n Sanctus Jesum in tormentis\n Romuli apud misera\n Agnus Dei in procellarum\n Ignarus et animi\n Credo in tormentis iesu\n Romuli apud misera\n Lupus Filius Dei\n Cum vocant pugna est,\n Lupus Filius Dei\n Tacet nox atra\n Lupus Filius Dei\n Tu exaudi me vocant?\n Alleluja: salus,\n Lupus Filius Dei\n Potes videre moreretur?\n Lupus Filius Dei\n Tacet nox atra\n Lupus Filius Dei\n Potestis audire vocantem se? Lii ah ah\n Lupus Filius Dei')
    	}

   if (message.content === "@everyone \n Hac nocte solus es equitantes\n Altera super\n Eique fortitudo vestra exspectatione\n Puer eris extremum lumen\n Mater pugnavit daemonia\n Lucem vidit fratrem\n Et nunc orate ut summa lćtítia spiritáliter\n Te vivere, et non possum manere\n Lupus Filius Dei\n Cum vocant pugna est,\n Lupus Filius Dei\n Venit autem nox\n Lupus Filius Dei\n Tu exaudi me vocant?\n Alleluja: salus,\n Alius te mendax\n Et aliquando indicium\n Cum assumuntur\n Vides puero nocte socia\n Perpetuum fortes\n Duri fera temporum\n Novi vos Messiam\n Lupus natus est homo\n Lupus Filius Dei\n Cum vocant pugna est,\n Lupus Filius Dei\n Venit autem nox\n Lupus Filius Dei\n Tu exaudi me vocant?\n Alleluja: salus,\n Lupus Filius Dei\n Potes videre moreretur?\n Lupus Filius Dei\n Tacet nox atra\n Lupus Filius Dei\n Potestis audire vocantem sen\n Alleluja: salus,\n Agnus Dei in procellarum\n Ignarus et animi\n Sanctus Jesum in tormentis\n Romuli apud misera\n Agnus Dei in procellarum\n Ignarus et animi\n Credo in tormentis iesu\n Romuli apud misera\n Lupus Filius Dei\n Cum vocant pugna est,\n Lupus Filius Dei\n Tacet nox atra\n Lupus Filius Dei\n Tu exaudi me vocant?\n Alleluja: salus,\n Lupus Filius Dei\n Potes videre moreretur?\n Lupus Filius Dei\n Tacet nox atra\n Lupus Filius Dei\n Potestis audire vocantem se? Lii ah ah\n Lupus Filius Dei"){
      message.channel.send ("@everyone \nCantus lupus\n Satura luna\n Corpus nudus domina\n Agnus totus\n Animus mortus\n Ave deus sinistra\n Cultus lupus\n Opus damnatus\n Metus mortis nocturna\n Terra sanguis\n Padre occultus\n Sanctus pupus anima")
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
    if (message.content === prefix + "botlist") {
    let bot= new Discord.RichEmbed ()
         .setColor('#B9121B')
         .setTitle ("Bot")
         .addField ("Bot générale", "[KOYA](https://discordapp.com/oauth2/authorize?permissions=2146958463&scope=bot&client_id=276060004262477825) , [RYTHM](https://discordapp.com/oauth2/authorize?client_id=235088799074484224&permissions=8&scope=bot&response_type=code&redirect_uri=https://rythmbot.co/thanks)", true)
         .addField ("Bot Modération","[Vexera](https://discordapp.com/oauth2/authorize?client_id=228537642583588864&scope=bot&permissions=8),[Logger](https://discordapp.com/oauth2/authorize?client_id=298822483060981760&scope=bot&permissions=380065)",true)
         .addField ("Bot xp", "[tatsumaki](https://discordapp.com/oauth2/authorize?&client_id=172002255350792192&scope=bot&permissions=12659727), [Mee6](https://discordapp.com/oauth2/authorize?client_id=159985415099514880&scope=bot&permissions=66321471&response_type=code&redirect_uri=https://mee6.xyz/guild-oauth&guild_id=375215244047286272)", true)
         .addField ("Bot jeu", "[Enderbot](https://discordapp.com/oauth2/authorize?client_id=280726849842053120&scope=bot&permissions=-1), [Discord Rpg](https://discordapp.com/oauth2/authorize?&client_id=170915256833540097&scope=bot&permissions=24640), [Pokecord](https://discordapp.com/oauth2/authorize?client_id=365975655608745985&scope=bot&permissions=67234880)", true)
         .setFooter(` Bot`);
      message.channel.send(bot) ;
      console.log (`${message.author.username} |ping `)
    }
	  if (message.content.startsWith (prefix +"youtube")) {
	const args7 = message.content.split(" ").slice(1).join(" ");
	
	
   		message.channel.send ("Voici le résultat de votre recherche: https://www.youtube.com/results?search_query=" +args7.join('+'))
         console.log(`${message.author.username} | youtube `)
}
    //NEWS
    if (message.content === prefix + "news"){
        message.channel.send ("__Mise à jour:__```\n Ajout de la commande ++weather ```");
        console.log("Commande news" );
    }
    let cont = message.content.slice(prefix.length).split(" ");
 let args1 = cont.slice(1)


       if (message.content.startsWith (prefix + 'weather')) {

        weather.find({search: args1.join(" "), degreeType: 'C'}, function(err, result) {
            if (err) message.channel.send(err);

            var current = result[0].current;
            var location = result[0].location;
            message.channel.startTyping()
            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Temps pour ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor("#333333")
                .addField('Plage horaire ',`UTC${location.timezone}`, true)
                .addField('Messure ',location.degreetype, true)
                .addField('Température ',`${current.temperature} °C`, true)
                .addField('Ressenti ', `${current.feelslike} °C`, true)
                .addField('Vents ',current.winddisplay, true)
                .addField('Humidité', `${current.humidity}%`, true)

                 message.channel.send({embed});
                message.channel.stopTyping()
            
        });
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
    
   //Embed help membre
   if (message.content === prefix + "help membre") {
     let help_embed1 = new Discord.RichEmbed ()
    	      .setColor('#15f153')
    	      .setTitle ("Commandes des membre ")
            .addField("__Setup__:","Envoi un message pour le bon fonctionnement du bot",false)
    	      .addField ("__Help__:","Affiche le help 🙇‍♂️", false)
    	      .addField ("__Ping__:", "Ping le bot 🏓", false)
            .addField ("__Xp__:", "Donne votre xp", false)
            .addField ("__Levels__:", "Donne votre niveau", false)
            .addField ("__Progress__:", "Donne votre progression sur le niveau actuel", false)
    	      .addField ("__Avatar__:", "Affiche votre avatar 🎎", false)
    	      .addField ("__Invite__:", "Envoi l'invitation du bot 📨", false)
    	      .addField ("__Check__:", "Vérifie si le bot et opérationnel et fait un ping 📢", false)
    	      .addField ("__Google__ :", "Fait une requête sur Google ", false)
            .addField ("__H__:", "Affiche le help d'une commande ", false)
            .setTimestamp()
            .setFooter(`${message.author.username} | Help membre`);
    	      message.channel.send(help_embed1);
   }
   //embed fun
   if (message.content === prefix + "help fun") {
   	let help_embedfun = new Discord.RichEmbed ()
    	      .setColor ("#01B0F0")
    	      .setTitle ("Commandes fun")
    	     .addField ("__Roll__", "Choisi un chiffre entre 1 et 1000",false) 
	.addField ("__Verlan__:"," Inverse un message 🔄 ", false)
    	      .addField ("__Pièce__:", "Choisi entre pile ou face (et pas tranche) 🎲", false)
    	      .addField ("__8ball__:", "Choisi un réponse à votre place 📠", false)
    	      .addField ("__Dice__:", "Lance un dé et prend un chiffre entre 1 et 6 🎲",false)
    	      .addField ("__Astrologia__:", "Dit ton signe astrologique ⛎", false)
    	      .addField ("__Say__", "Dit une phrase au bot 🤖💬", false)
            .addField ("__Cat__","Envoi une image de chat",true)
          .addField ("__Rps__", " Fait un pierre, feuilles, ciseaux avec le bot", false) 
	.addField ("__Kiss__", "Fait un bisou a une personne 💋 (++kiss [mention])", false)
           .addField ("__Hug__", "Fait un calin a une personne 👐 (++hug [mention])", false)
           .addField ("__Cry__", "Vous pleurez de tristesse 😢", false)
           .addField ("__Pat__", "Vous carressez une personne 👋 (++pat [mention] ) ", false)
           .addField ("__Punch__", "Vous donnez un coup de poing a une personne 👊 (++punch [mention]) ", false)
           .addField ("__Pout__", "Vous boudez une personne 😶 (++pout [mention]) ", false)
           .addField ("__Handholding__", "Vous tenez la main a une personne 🤝 (++handholding [mention]) ", false)
           .addField ("__Fuck__", "Fait un doigt d'honneur à quelqu'un 🖕(++fuck [mention])" , false )
           .addField ("__Res__", "Ressuscite quelqu'un 😇 (++res [mention])" , false )
           .addField ("__Pollc__", "Crée un sondage", false)
           .addField ("__Everyone__", "Envoi une image ***__EVERYONE__*** 😡 " , false)
           .addField ("__Troll__", "Vous troller quelqu'un " , false)
           .addField ("__Slap__", "Claque une personne 🤚 (++slap [mention]) " , false)
           .addField ("__Stare__", "Vous fixé quelqu'un ", false )
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
    	      .addField ("__Serverinfo__:","Donne les statistiques du serveur 💹", false)
    	      .addField ("__Botinfo__:","Donne les statistiques du bot 📝",false)
    	      .addField ("__Weather__", "Indique la météo d'une ville", true)
    	      .addField ("__Userinfo__:","Donne les informations de l'utilisateur 👤", false)
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
            .addField("__Warn__","Warn un utilisateur (Commun à touts les serveur)",false)
            .setTimestamp()
            .setFooter(`${message.author.username} | Help info`);
    	      message.channel.send (help_embedadmin1);
    }
    if (message.content === prefix + "help") {
     let help2= new Discord.RichEmbed ()
         .setColor('#B9121B')
         .setTitle ("Toutes les commandes ")
         .setDescription("Pour le bon fonctionnement du bot merci de faire la commande`" + prefix + "setup`. En cas de probleme merci de vous rendre sur le serveur en faisant `" + prefix +"botinfo` dans l'onglet 'Invitation du bot'",false)
         .addField ("**__Membres__**", "`setup`, `help`, `ping`,`avatar`,`invite`, `check`,`google`,`h`", false)
         .addField ("**__XP__**:**(bug)**", "`levels`,`xp`,`progress`")
         .addField ("**__Economie__**:**(bug)**","`coins`",false)
         .addField ("**__Info__**" ," `userinfo`,`serverinfo`,`botinfo`,`diserver`,`weather`,`invitation`," , false)
         .addField ("**__Fun__**" ,"`rps`,`roll`,`cat`,`astrologia`,`triggered`,`dice`,`verlan`,`piece`,`say`" ,false)
         .addField ("**__Interaction__**" , "`kiss`,`hug`,`cry`,`pat`,`pout`,`punch`,`handholding`,`shoot`,`stare`,`slap`,`fuck`,`res`,`everyone`,`troll`,`highfive`,`pollc`" ,false)
         .addField ("**__Admin__**" , "`mute`,`unmute  `,`kick`,`ban`,`purge`,`report`,`warn`,`reminder`",false)
         .setTimestamp()
         .setFooter(`Help`);
      message.channel.send(help2) ;
      console.log (`${message.author.username} |help  `)
    }
   //Embed ping
   if (message.content === prefix + "ping") {
   let ping_embed = new Discord.RichEmbed ()
       .setColor('#333333')
       .setTitle ("Ping")
       .addField ('Pong! Mon ping est de', '***' + `${Date.now() - message.createdTimestamp}` + ' ms***🏓', true )
       //).addField(" Ping local", '***' + Math.round(altair.ping) + " ms***", false )
       .setTimestamp()
       .setFooter(` Ping |`);
    message.channel.send(ping_embed) ;
    console.log (`${message.author.username} |ping `)
}
    //Embed invitation
    if (message.content === prefix + "invite") {
    	   let invite_embed = new Discord.RichEmbed ()
    	      .setColor('#333333')
    	      .setTitle ("Invitation ")
    	      .addField ("Invitation du bot et invitation serveur ", "Voici le lien du [Bot](https://discordbots.org/bot/435585785295667200) pour rejoindre le serveur et m'inviter sur ton serveur ", true)
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
    	if (message.content.startsWith (prefix + "google")) {
   		let args2 = message.content.split(' ')
   		args2.shift ()
   		message.channel.send ("Voici le résultat de votre recherche: https://www.google.fr/#q=" +args2.join(' '))
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
     	.addField("Date de venue", message.member.joinedAt,false)
     	.addField("Membres Totaux", message.guild.memberCount,false)
      .addField ("Propriétaire du serveur", message.guild.owner.id,false)
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
  	  	 .addField ("Le github du bot", "Voici le lien du [github ](https://github.com/zechaos031/Nitral-) du bot ()", true)
  	  	 .addField ("Invitation du bot et invitation serveur ", "Voici le lien du [Bot](https://bots.discord.pw/bots/435585785295667200) pour rejoindre le serveur et m'inviter sur ton serveur ", true)
  	  	 .addField ("Hebergeur", "Hébergement local avec un Asus zenfone 4 en full 4G")
  	  	 .addField ("Langage de programmation", "Crée en JavaScript", false)
         .setTimestamp()
         .setFooter(`${message.author.username} | Bot Info`);
  	  	 return message.channel.send(botembed);
  	  	 console.log(`${message.author.username} | Bot Info`)
   }
   //Embed userinfo
     if (message.content.startsWith === prefix +`userinfo`){
  	  	 let user = message.mentions.users.first();
    if (!user) {
        return message.reply("Tu doit mentionné quelqu'un");
    }
    let mentioneduser = message.mentions.users.first();
    let joineddiscord = (mentioneduser.createdAt.getDate() + 1) + '-' + (mentioneduser.createdAt.getMonth() + 1) + '-' + mentioneduser.createdAt.getFullYear() + ' | ' + mentioneduser.createdAt.getHours() + ':' + mentioneduser.createdAt.getMinutes() + ':' + mentioneduser.createdAt.getSeconds();
    message.delete();
    let game;
    if (user.presence.game === null) {
        game = 'Ne joue pas';
    } else {
        game = user.presence.game.name;
    }
    let status;
    if (user.presence.status === 'en ligne') {
        status = ':green_heart:';
    } else if (user.presence.status === 'ne pas derangé') {
        status = ':heart:';
    } else if (user.presence.status === 'absent') {
        status = ':yellow_heart:';
    } else if (user.presence.status === 'deconnecté') {
        status = ':black_heart:';
    }
  // Let afk;
  // if (user.presence.data.afk === true) {
  //   afk = "✅"
  // } else {
  //   afk = "❌"
  // }
    let stat;
    if (user.presence.status === 'deconnecté') {
        stat = 0x000000;
    } else if (user.presence.status === 'en ligne') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'ne pas derangé') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'absent') {
        stat = 0xF7C035;
    }
    let userembed = new Discord.RichEmbed()

  	  	 .setTitle("Information sur l'utilisateur ")
  	  	 .setColor("#15f153")
  	  	 .setThumbnail(messag.author.avatarURL)
  	  	 .addField ("Pseudo",`${user.username}#${user.discriminator}`, false)
  	  	 .addField ("Jeu",`${game}`, false)
         .addField ("Etat de connection",`${status}`, false)
  	     .addField ("Bot",`${user.bot}`,false)
  	  	 .addField ("Date de création du compte", `${joineddiscord}`, false)
  	  	 .addField("Date de venue", message.member.joinedAt,false)
         .addField(`Roles:`, '``' + message.mentions.members.first().roles.map(r => r.name).join(', ') + '``')
  	   	 .addField ("ID de l'utilisateur", message.author.id,false )
         .setTimestamp()
         .setFooter(`User Info`);
  	  	 console.log(`${message.author.username} |UserInfo`)
    message.channel.send(userembed)
};
if (message.content.startsWith === prefix +`userinfot`){
let user = message.mentions.users.first();
    if (!user) {
        return message.reply('You must mention someone!');
    }
    const mentioneduser = message.mentions.users.first();
    const joineddiscord = (mentioneduser.createdAt.getDate() + 1) + '-' + (mentioneduser.createdAt.getMonth() + 1) + '-' + mentioneduser.createdAt.getFullYear() + ' | ' + mentioneduser.createdAt.getHours() + ':' + mentioneduser.createdAt.getMinutes() + ':' + mentioneduser.createdAt.getSeconds();
    message.delete();
    let game;
    if (user.presence.game === null) {
        game = 'Not currently Playing.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'He didnt sent a message.';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = ':green_heart:';
    } else if (user.presence.status === 'dnd') {
        status = ':heart:';
    } else if (user.presence.status === 'idle') {
        status = ':yellow_heart:';
    } else if (user.presence.status === 'offline') {
        status = ':black_heart:';
    }
  // Let afk;
  // if (user.presence.data.afk === true) {
  //   afk = "✅"
  // } else {
  //   afk = "❌"
  // }
    let stat;
    if (user.presence.status === 'offline') {
        stat = 0x000000;
    } else if (user.presence.status === 'online') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        stat = 0xF7C035;
    }
    const embed = new Discord.RichEmbed()
  .addField('**UserInfo:**', `**name:** ${user.username}#${user.discriminator}\n**JoinedDiscord:** ${joineddiscord}\n**LastMessage:** ${messag}\n**Playing:** ${game}\n**Status:** ${status}\n**Bot?** ${user.bot}`, true)
  .setThumbnail(user.displayAvatarURL)
  .addField(`Roles:`, '``' + message.mentions.members.first().roles.map(r => r.name).join(', ') + '``')
  .addField('DiscordInfo:', `**Discriminator:** ${user.discriminator}\n**ID:** ${user.id}\n**Username:** ${user.username}`)
  .setAuthor(`Info for ${user.username} Below`, user.displayAvatarURL)
  .setColor(stat);
    message.channel.send(embed)
  .catch(e => logger.error(e));
};      //Kick
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

        var text = message.content.substring(8);

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
 	var text = message.content.substring(7);
var rand = ['Oui ','Assurément','Pas du tout ',"Demande à quelqu'un d'autre. " , "C'est sûre", 'Non', 'Je ne peux pas le dire maintenant ', ' Probablement que non ', ' Probablement que oui ' , 'Peut-être ', ' Jamais ', "Je n'est pas la réponse à " + text, "Je crois", "Sûrement \n\n\n \n \n pas" ];

      return rand[Math.floor(Math.random()*rand.length)];
    }

   if(message.content.startsWith( prefix +"8ball")) {

    message.channel.send ( doMagic8BallVoodoo() )
    console.log (`${message.author.username} | 8ball`)
    }

  //Dé
  var dévar = [":one: ", ":two: ",":three: ",":four: ",":five: ",":six: "]
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
      var cry = ["https://cdn.weeb.sh/images/rknUmIXD-.gif", "https://cdn.weeb.sh/images/B1Jg1eqJM.gif", "https://cdn.weeb.sh/images/BkoBX8mwW.gif", "https://cdn.weeb.sh/images/HJIpry35M.gif", "https://cdn.weeb.sh/images/SJ08mUXwZ.gif","https://cdn.weeb.sh/images/Syzw78XPZ.gif" ,"https://cdn.weeb.sh/images/HymMXUQPW.gif" , "https://cdn.weeb.sh/images/ryap_aEC-.gif" ,"https://cdn.weeb.sh/images/SJ-11x5kz.gif" ,"https://cdn.weeb.sh/images/Bk_fmL7wZ.gif" ,"https://cdn.weeb.sh/images/rJ5IX8XPZ.gif" ]
      var kiss = ["https://cdn.weeb.sh/images/rkv_mRKF-.gif","https://cdn.weeb.sh/images/ByVQha_w-.gif", "https://cdn.weeb.sh/images/HJkxXNtjZ.gif","https://cdn.weeb.sh/images/H1a42auvb.gif", "https://cdn.weeb.sh/images/rJeB2aOP-.gif", "https://cdn.weeb.sh/images/rJ6PWohA-.gif", "https://cdn.weeb.sh/images/Bkk_hpdv-.gif" ," https://cdn.weeb.sh/images/BJv0o6uDZ.gif","https://cdn.weeb.sh/images/SJINn6OPW.gif", "https://cdn.weeb.sh/images/SJ--2auDZ.gif", "https://cdn.weeb.sh/images/BkLQnT_PZ.gif","https://cdn.weeb.sh/images/BkUJNec1M.gif", "https://cdn.weeb.sh/images/S1VEna_v-.gif","https://cdn.weeb.sh/images/H1e7nadP-.gif", "https://cdn.weeb.sh/images/SJ3dXCKtW.gif", "https://cdn.weeb.sh/images/H1Gx2aOvb.gif", "https://cdn.weeb.sh/images/B1yv36_PZ.gif", "https://cdn.weeb.sh/images/Bkuk26uvb.gif",
 "https://cdn.weeb.sh/images/SJ8I2Tuv-.gif", "https://cdn.weeb.sh/images/ryoW3T_vW.gif", "https://cdn.weeb.sh/images/r1mcJlFVz.gif","https://cdn.weeb.sh/images/ryceu6V0W.gif","https://cdn.weeb.sh/images/B12LhT_Pb.gif","https://cdn.weeb.sh/images/rymvn6_wW.gif"]
      var pat = ["https://78.media.tumblr.com/1a207f8a51036ed1c8f788cda15c9d29/tumblr_nb0gnw9qgh1tbewqgo1_500.gif" ,"https://68.media.tumblr.com/584a3894e3483eed23d1afaf1f6f9347/tumblr_ok1oplyzSF1r0tp5lo1_500.gif", "http://78.media.tumblr.com/229ec0458891c4dcd847545c81e760a5/tumblr_mpfy232F4j1rxrpjzo1_r2_500.gif" ,"http://gifimage.net/wp-content/uploads/2017/07/head-pat-gif-10.gif" ,"http://www.cvltnation.com/wp-content/uploads/2014/03/1-12-13-hilarious-caturday-funny-cat-photos9.gif", "https://media1.tenor.com/images/68d981347bf6ee8c7d6b78f8a7fe3ccb/tenor.gif?itemid=5155410" ,]
      var punch = ["https://cdn.weeb.sh/images/BJg7wTbbM.gif", "https://cdn.weeb.sh/images/rJHLDT-Wz.gif","https://cdn.weeb.sh/images/HJfGPTWbf.gif", "https://78.media.tumblr.com/f0032ce15e4ded204b83b00c764a52ad/tumblr_olcckgOtiA1qzxv73o1_r4_500.gif","http://media.giphy.com/media/11zD6xIdX4UOfS/giphy.gif","https://media.tenor.co/images/7a582f32ef2ed527c0f113f81a696ae3/tenor.gif","https://media.tenor.co/images/7a582f32ef2ed527c0f113f81a696ae3/tenor.gif","http://www.videovortex.evan-roth.com/gifs2/Punch-Anime.gif","http://gph.is/15zjo9x"]
      var hug = ["https://cdn.weeb.sh/images/rJaog0FtZ.gif", "https://cdn.weeb.sh/images/S18oOuQw-.gif","https://cdn.weeb.sh/images/BkFnJsnA-.gif", "https://cdn.weeb.sh/images/ByuHsvu8z.gif", "https://cdn.weeb.sh/images/BJCCd_7Pb.gif", "https://cdn.weeb.sh/images/SJZ-Qy35f.gif", "https://cdn.weeb.sh/images/r1bAksn0W.gif", "https://cdn.weeb.sh/images/Hyv6uOQPZ.gif", "https://cdn.weeb.sh/images/SyQ0_umD-.gif", "https://cdn.weeb.sh/images/SyQ0_umD-.gif", "https://cdn.discordapp.com/attachments/368563696617652225/422316938983899146/9137021.gif", "https://cdn.discordapp.com/attachments/368563696617652225/419295112430878730/photofunky_1.gif","https://cdn.weeb.sh/images/HyNJIaVCb.gif","https://cdn.weeb.sh/images/SJfEks3Rb.gif","https://cdn.weeb.sh/images/Bk5T2_1Ob.gif","https://cdn.weeb.sh/images/HkQs_dXPZ.gif","https://cdn.weeb.sh/images/BJx2l0ttW.gif","https://cdn.weeb.sh/images/BJF5_uXvZ.gif","https://cdn.weeb.sh/images/B1wRd_XP-.gif"];
      var bang = ["https://cdn.weeb.sh/images/HyZiWLmvb.gif", "https://cdn.weeb.sh/images/r1Fa7EFsW.gif", "https://cdn.weeb.sh/images/Hy7KZUmDb.gif", "https://cdn.weeb.sh/images/S1-RQVFjZ.gif", "https://cdn.weeb.sh/images/BkzSQVFoZ.gif", "https://cdn.weeb.sh/images/BkvjZI7PW.gif", "https://cdn.weeb.sh/images/rJmPWI7wW.gif", "https://cdn.weeb.sh/images/SJeGENYoW.gif", "https://cdn.weeb.sh/images/BkzSQVFoZ.gif", "https://cdn.weeb.sh/images/rkccQNFib.gif", " https://cdn.weeb.sh/images/SkFub87DW.gif", "https://cdn.weeb.sh/images/BJADXEtoZ.gif" ]
      var hand =  ["https://cdn.weeb.sh/images/SJbTxT9Wz.gif", "https://cdn.weeb.sh/images/rJx5xa9bf.gif", "https://cdn.weeb.sh/images/H1urgT5-f.gif", "https://68.media.tumblr.com/316b2837d1d4f027142f8162951b8db3/tumblr_mz2up4FAOQ1qbvovho1_500.gif" ,"http://media.tumblr.com/a384c66a6debfacc82459715f9d5985e/tumblr_inline_mte8heJG8W1rg1ld5.gif" ,"http://media.tumblr.com/e0cc7b7e054669220d9034618751fb05/tumblr_inline_mte8loMS1o1rg1ld5.gif" ,"https://78.media.tumblr.com/22889ee665317daea4a69bc3c24ee250/tumblr_n1mt3301tx1rr1hwfo1_500.gif" , "http://78.media.tumblr.com/97ff60aa0f57511633e4b0bdd78c1f21/tumblr_mrwcg7T6KT1rkam12o1_500.gif","https://78.media.tumblr.com/84aab8e7f877b3c4fa2ab9b9201fec6b/tumblr_no2qmvDrrM1uury7mo3_500.gif"]
      var pout = [" https://cdn.weeb.sh/images/S1x9l1KPZ.gif", "https://cdn.weeb.sh/images/BynnlkYP-.gif", "https://cdn.weeb.sh/images/HJggqe1FP-.gif","http://pa1.narvii.com/5880/de25826d12fce634d694291a00af43122a23af2b_hq.gif","https://uploads.disquscdn.com/images/483afd92544bee20e84f830b6da7ce862a752e040590f894d66de0562cd17227.gif","https://68.media.tumblr.com/92f87109d279c9e20c9ce523f191dabb/tumblr_o4pc6iBTl61tydz8to1_500.gif","https://68.media.tumblr.com/68b702ab1f085727e3cfcc5509d1d16c/tumblr_og9nynBygL1vuhwqdo1_1280.gif","https://pa1.narvii.com/5939/2251a3e1feeabac7a1c1b254e75b4bd73ad7e544_hq.gif"]
      var high = ["https://cdn.weeb.sh/images/B1-7KkQsZ.gif", "https://cdn.weeb.sh/images/rJYQt1mjZ.gif", "https://cdn.weeb.sh/images/Hy_U1QBT-.gif","https://78.media.tumblr.com/4bf533322777242924727977936e6c28/tumblr_n04birgZxv1rl376ro1_500.gif", "http://gifimage.net/wp-content/uploads/2017/09/anime-high-five-gif-14.gif", "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/epic-high-five-pokemon-ash-dawn.gif", "https://m.popkey.co/c95783/5x7Xl_f-maxage-0_s-200x150.gif", "https://78.media.tumblr.com/398ca8b1c1a0de03078f7dacd4d522b9/tumblr_o7leikmO391tkf3aao1_500.gif", "https://media.tenor.com/images/fbbf9713d5202abed4ad4f4c3306cbe9/tenor.gif", "http://78.media.tumblr.com/f958003a5b13cd0470afc736373ab519/tumblr_n0os0yvKQw1tnvwmho1_500.gif", "https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/hunterxhuntermangareturning.gif" ]
      var res = ["https://i.pinimg.com/originals/68/3e/a2/683ea223d344dcf03b8258e1a4030343.gif","https://i.makeagif.com/media/12-04-2015/QL4eHR.gif"]
      var troll = ["https://babylon.naurunappula.com/org/60/68/60685a3f47cb9ef4/0/666869.gif", "https://media1.tenor.com/images/3aad9119d3eba20f572cce7f431442ae/tenor.gif?itemid=4494681", "http://gif-finder.com/wp-content/uploads/2015/05/LOL-Trol-Face.gif", "http://78.media.tumblr.com/e590b1e38ac2614a5a12ffd6831eed80/tumblr_n5n7n3zts01qbahrjo1_400.gif" ]
      var cud = ["https://cdn.weeb.sh/images/rJ6zAkc1f.gif", "https://cdn.weeb.sh/images/H1SfI8XwW.gif", "https://cdn.weeb.sh/images/BkZCSI7Pb.gif", "https://cdn.weeb.sh/images/rkBl8LmDZ.gif","https://cdn.weeb.sh/images/SJLkLImPb.gif", "https://cdn.weeb.sh/images/Hy5y88mPb.gif","https://cdn.weeb.sh/images/SJceIU7wZ.gif", "https://cdn.weeb.sh/images/r1A77CZbz.gif", "https://cdn.weeb.sh/images/SJYxIUmD-.gif", "https://cdn.weeb.sh/images/BkZCSI7Pb.gif", "https://cdn.weeb.sh/images/rkBl8LmDZ.gif", "https://cdn.weeb.sh/images/B1_e1gTXG.gif", "https://cdn.weeb.sh/images/BkkgL8mDW.gif", "https://cdn.weeb.sh/images/Hy5y88mPb.gif" ]
      var fuck = ["http://images5.fanpop.com/image/photos/30800000/Fuck-you-anime-30843105-270-256.gif","http://i.imgur.com/ItdrZKi.gif","https://i.pinimg.com/originals/f5/bb/f1/f5bbf1445b067c26d88cbe589d846fd9.gif", "https://i.pinimg.com/originals/05/65/45/0565450075fbb023fa061f4af4916ee6.gif", "https://cloud.lovinmalta.com/images/Queen-Elizabeth-II-Fuck-you-Reaction-gif.gif?mtime=20160825115716",
"http://www.gifimili.com/gif/2018/02/homer-simpson-doigt-d-honneur.gif","http://chantouvivelavie.c.h.pic.centerblog.net/42a0eb5c.gif", "https://www.tuxboard.com/photos/2016/03/fuck-femme-doigt-dhonneur-1.gif", "http://legeekcestchic.eu/wp-content/uploads/2014/06/le-tumblr-du-jour-dites-le-avec-un-doigt3.gif", "http://static.hitek.fr/img/actualite/25rnq80.gif", "https://dailygeekshow.com/wp-content/uploads/2013/08/22-images-qui-ruineront-vos-souvenirs-denfance-a-tout-jamais22.gif", "https://media.melty.fr/article-3549942-raw/media.gif" ]
      var ev = ["https://cdn.discordapp.com/attachments/395762896329768960/432476514513321984/d9d.gif", "http://i0.kym-cdn.com/photos/images/facebook/001/291/661/4cf.jpg", "http://i0.kym-cdn.com/photos/images/original/001/243/406/73c.jpg", "http://i0.kym-cdn.com/photos/images/original/001/242/548/f0f.jpg", "https://pics.me.me/everyone-discord-memes-buy-or-sell-19502778.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2gL44pt4ZC4w9VOq9bekbeH4NVwG-9wJ8QkcNWI7alt5zavu9", "https://i.imgur.com/FTB2stB.gif", "https://i.imgur.com/7cQtGb1.png"]
      var stare = ["https://cdn.weeb.sh/images/BkkqI1YPZ.jpeg", "https://cdn.weeb.sh/images/HJxqIyFvZ.gif", "https://cdn.weeb.sh/images/BJ88vLvd-.gif", "https://cdn.weeb.sh/images/rk23UyYP-.gif", "https://cdn.weeb.sh/images/rk0v81YwW.gif", "https://cdn.weeb.sh/images/SkH3Uytwb.gif", "https://cdn.weeb.sh/images/B1tO8JYD-.gif", "https://cdn.weeb.sh/images/HyWnLyKPZ.gif", "https://cdn.weeb.sh/images/SJ9_8kFwb.gif", "https://cdn.weeb.sh/images/H1e83lytw-.gif"]
      var slap = ["https://cdn.weeb.sh/images/rkpAXa5bG.gif", "https://cdn.weeb.sh/images/SJL3Q1Fvb.gif", "https://cdn.weeb.sh/images/B1oCmkFw-.gif", "https://cdn.weeb.sh/images/rJYqQyKv-.gif", "https://cdn.weeb.sh/images/SkdyfWCSf.gif", "https://cdn.weeb.sh/images/Sk0RmyYvb.gif", "https://cdn.weeb.sh/images/BJ8o71tD-.gif", "https://cdn.weeb.sh/images/SJlkNkFwb.gif", "https://cdn.weeb.sh/images/SkSCyl5yz.gif", "https://cdn.weeb.sh/images/B1oCmkFw-.gif", "https://cdn.weeb.sh/images/rknn7Jtv-.gif", "https://cdn.weeb.sh/images/HkJ6-e91z.gif", "https://cdn.weeb.sh/images/ByHUMRNR-.gif"]


          //ALEA
      var staring = stare[Math.floor(Math.random() * stare.length)] ;
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
              .setDescription(`${message.author.username}` + " a fait un highfive a "+ defineduser.username )
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
              .setDescription(`${message.author.username }` + " a troller"+ defineduser.username )
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
              .setDescription(`${message.author.username}` + " a tiré sur "+ defineduser.username )
              .setImage(banging)
              .setTimestamp()
              .setFooter(`Shoot`)
              message.channel.send (bangEmbed)
              console.log(`${message.author.username} | Bang`)
    }
    if (message.content.startsWith (prefix +"stare")) {
          var text = message.content.substring(7)
          var stareEmbed = new Discord.RichEmbed()
              .setColor ('#00FAD9')
              .setDescription(`${message.author.username}` + " fixe "+ defineduser.username )
              .setImage(staring)
              .setTimestamp()
              .setFooter(`Stare`)
              message.channel.send (stareEmbed)
              console.log(`${message.author.username} | stare `)
    }
     if (message.content.startsWith (prefix +"fuck")) {
     	    var text = message.content.substring(6)
          var fuckEmbed = new Discord.RichEmbed()
              .setColor ('#00FAD9')
              .setDescription(`${message.author.username}` + " fait un doigt d'honneur à "+ defineduser.username )
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
              .setDescription(`${message.author.username}` + " donne une claque à "+ defineduser.username )
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
              .setDescription(`${message.author.username}` + " réconforte "+ defineduser.username )
              .setImage( cuddle)
              .setTimestamp()
              .setFooter(`Cuddle`)
              message.channel.send(cudEmbed)
              console.log(`${message.author.username} |Cuddle`)
    }
    if (message.content.startsWith (prefix +"everyone")) {
     	      var eveEmbed = new Discord.RichEmbed()
              .setColor ('#00FAD9')
              .setDescription(`${message.author.username}` + " a fait un everyone ")
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
              .setDescription(`${message.author.username}` + " ressuscite "+ defineduser.username )
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
              .setDescription(`${message.author.username}` + " fait un bisou a "  + defineduser.username)
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
              .setDescription(`${message.author.username}` + " donne un coup de poing à "+ defineduser.username )
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
              .setDescription(`${message.author.username}` + " donne la main à " + defineduser.username )
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
              .setDescription(`${message.author.username}` + " boude "+ defineduser.username )
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
              .setDescription(`${message.author.username}` + " carresse "+ defineduser.username )
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
              .setDescription(`${message.author.username}` + " fait un calîn a "  + defineduser.username)
              .setImage(huging)
              .setTimestamp()
              .setFooter(`Hug`);
              message.channel.send(HugEmbed)
              console.log(`${message.author.username} | Hug`)
      }
      //triggered

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
        let args3 = message.content.split(" ").slice(1);
        if (!args[0]){
          message.delete();
          message.channel.send("Données incorrecte")
          return;
        }
        if (args3[0] > 100){
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
        message.channel.bulkDelete(args3[0]);
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
         .addField("Utilisateur Report", `${defineduser.username}`, false)
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
    if (message.content === "ed"){
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

        let args4 = message.content.split(' ');
        let time = args4[1];
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
        /*if(message.content.startsWith(prefix + 'lock')){
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

          if (!bot.lockit) bot.lockit = [];
          const time = message.content.split(' ');
          const validUnlocks = ['release', 'unlock'];
          if (!time) return message.reply('Tu dois donner un temp precis pour le lockdown');

          if (validUnlocks.includes(time)) {
            message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: null
            }).then(() => {
              message.channel.send('Lockdown lifted.');
              clearTimeout(bot.lockit[message.channel.id]);
              delete bot.lockit[message.channel.id];
            }).catch(error => {
              console.log(error);
            });
          } else {
            message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
            }).then(() => {
              message.channel.send(`Channel bloqué pendant `).then(() => {

                let unmuteEmbed = new Discord.RichEmbed()
                    .setDescription("~Lockchan~")
                    .setColor("#e56b00")
                    .addField("Moderateur", `${message.author.username}`)
                    .addField("Channel lock ", message.channel)
                    .addField("Le", message.createdAt)
                    .setTimestamp()
                    .setFooter(`lockchan`);
                    let incidentchannel = message.guild.channels.find(`name`, "logs-nitral");
                    if(!incidentchannel) return message.channel.send("Impossible de trouver le channel ```logs-nitral```.");
                      incidentchannel.send(unmuteEmbed)
                      bot.lockit[message.channel.id] = setTimeout(() => {
                        message.channel.overwritePermissions(message.guild.id, {
                          SEND_MESSAGES: null
                        }).then(message.channel.send('Channel débloqué')).catch(console.error);
                        delete bot.lockit[message.channel.id];
                      }, ms(time));

                    }).catch(error => {
                      console.log(error);
                    });
                  });
                }
              };*/
              if(message.content.startsWith(prefix + "h say")){
                message.channel.send("__Usage__ `"+ prefix + "say [Un mot ou une phrase]`");
              }
              if(message.content.startsWith(prefix + "h warn")){
                message.channel.send("Commun à touts les serveur \n12 warns = Kick \n24 warn = Ban \n\n__Usage__ `"+ prefix + "warns [Un utilisateur ]` \n\n__Pré-requis__: Channel `log-nitral`");
              }
              if(message.content.startsWith(prefix + "h lockchan")){
                message.channel.send("__Usage__ `"+ prefix + "lockchan [temps en seconde]`");
              }
              if(message.content.startsWith(prefix + "h 8ball")){
                message.channel.send("__Usage__ `"+ prefix + "8ball [Un mot ou une phrase]`");
              }
              if(message.content.startsWith(prefix + "h verlan")){
                message.channel.send("__Usage__ `"+ prefix + "verlan <un mot ou une phrase>`");
              }
              if(message.content.startsWith(prefix + "h reminder")){
                message.channel.send("Un reminder par channel \n \n __Usage__ `"+ prefix + "reminder <temps en seconde> <un mot ou une phrase>` \n             `" + prefix + "reminder end`");
              }
              if(message.content.startsWith(prefix + "h report")){
                message.channel.send("__Usage__ `"+ prefix + "report <Une mention><La raison>`");
              }
              if(message.content.startsWith(prefix + "h purge")){
                message.channel.send("`__Usage__ `"+ prefix + "purge <Un nombre entre 1 et 100>`");
              }
              if(message.content.startsWith(prefix + "h help")){
                message.channel.send("__Usage__ `"+ prefix + "help <gen, admin, fun, membre ou info>`");
              }
              if(message.content.startsWith(prefix + "h ban")){
                    message.channel.send("__Usage__ `"+ prefix + "ban <la mention de lutilisateur>`");
              }
              if(message.content.startsWith(prefix + "h kick")){
                    message.channel.send("__Usage__ `"+ prefix + "kick <la mention de lutilisateur>`");
              }
              if(message.content.startsWith(prefix + "h mute")){
                    message.channel.send("Mute un utilisateur sur __un channel__ \n \n__Usage__ `"+ prefix + "mute <la mention de lutilisateur>`");
              }
              if(message.content.startsWith(prefix + "h unmute")){
                    message.channel.send("__Usage__ `"+ prefix + "unmute <la mention de lutilisateur>`");
              }

              if(message.content.startsWith(prefix + "warn")){

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
                let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
                if(!wUser) return message.reply("Utilisateur inconnue");

                  if(!warns[wUser.id]) warns[wUser.id] = {
                    warns: 0
                  };

                  warns[wUser.id].warns++;
                  fs.writeFile("warnings.json", JSON.stringify(warns), (err) => {
                    if (err) console.log(err)
                  });
                  message.channel.send(`<@${wUser.id}> a etait warn`);
                  let warnEmbed = new Discord.RichEmbed()
                  .setDescription("Warns")
                  .setAuthor(message.author.username)
                  .setColor("#fc6400")
                  .addField("Utilisateur Warn", `<@${wUser.id}>`)
                  .addField("Warn dans ", message.channel)
                  .addField("Nombre de warn", warns[wUser.id].warns)

                  let incidentchannel = message.guild.channels.find(`name`, "logs-nitral");
                  if(!incidentchannel) return message.channel.send("Impossible de trouver le channel ```logs-nitral```.");

                  incidentchannel.send(warnEmbed)

                  if(warns[wUser.id].warns == 12){
                    message.guild.member(wUser).kick();
                    message.reply(`<@${wUser.id}> a etait ^^kick. Car il a atteint 12 warns. `)
                  }
                  if(warns[wUser.id].warns == 24){
                    message.guild.member(wUser).ban();
                    message.reply(`<@${wUser.id}> a etait ^^ban. Car il a atteint 24 warns. `)
                  }
                }
function getpollinfo() {
	message.channel.bulkDelete (1)

	if(message.channel.type != "text") return message.reply("No.");

	//if(message.guild.roles.find("name", "startPollPerm")) { //Check if role is in the guild
	//if(!message.member.roles.exists("name", "startPollPerm")) return message.channel.send("You do not have permission to start a poll!") //Check if the author has the role
	//}

	//console.log(message.member.roles.get("name", "Creator"));
	var timeasd;

	var pollstuff;

	var timeresultkek;

	var isTimed = true;

	requestStop = false;


	message.channel.send("Quel est le sujet de votre sondage ? ");

	const filter = m => m.author.id === message.author.id;

	message.channel.awaitMessages(filter, { max: 1, time: 5000000, errors: ['time'] })
	 .then(collected => {
	 pollstuff = collected.map(u => u.content).toString()})


	message.channel.awaitMessages(filter, { max: 1, time: 5000000, errors: ['time'] }).then(collected => {

    message.channel.bulkDelete (2)
    message.channel.send("Combien de temps va t'il durée ? ")}).then(collected => {


	message.channel.awaitMessages(filter, { max: 1, time: 5000000, errors: ['time'] }).then(collected => {

    timeresultkek = collected.map(u => u.content).toString()}).then(collected => { //Content of time

	var str = timeresultkek;
    var m = str.search(/m/i)
	var h = str.search(/h/i)
	var s = str.search(/s/i)
	var d = str.search(/d/i)

message.channel.bulkDelete (2)
	//variablessss
	var fixedvaluesec;
    var fixedvalueh;
    var fixedvaluem;
	var fixedvalued;
    var reelfixedvaluekeksec;
    var reelfixedvaluekekh;
    var reelfixedvaluekekm;
	var reelfixedvaluekekd;

	if(timeresultkek == "0") {
		isTimed = false;
	}

	if(d != "-1" && isTimed == true) { //edited kek
		console.log("got days");

		fixedvalued = timeresultkek.replace("d", "");

        reelfixedvaluekekd = fixedvalued * 86400000; //1 day

		console.log("Created a poll with a time of " + reelfixedvaluekekd + " day(s)!");


	message.channel.send(pollstuff).then(messageToReact => {

 	var idk = messageToReact.react("👍").catch(err => message.channel.send((err))).then(msg => { //todo: custom emojis?!



		const collector = messageToReact.createReactionCollector(
 			(reaction) => reaction.emoji.name === '👍',
 			{ time: reelfixedvaluekekd } //todo: make custom time? already did o3o
 		);
 		collector.on('collect', r => console.log("thumbs up in " + messageToReact.guild.name));
 		collector.on('end', collected => {

 			var realnumberrr = messageToReact.reactions.find(r=>r.emoji.name==="👍").count - 1; //get the right number

 			console.log("Collected " + realnumberrr + " votes for thumbs up");

 			if(realnumberrr >= "10000000") { //thumbs up
 				message.channel.send("Succès ! Les vote son ouvert 🗳 !");

 				message.channel.send("Résultat :");
 				message.channel.send("Pour : " + realnumberrr);

 			}
 			message.channel.send("Résultat :");
 			message.channel.send("Pour : " + realnumberrr);

 		})
 	}).then(collected => {

 	var idk2 = messageToReact.react("👎").then(msg => { //todo: custom emojis?!

		fixedvalued = timeresultkek.replace("d", "");

		reelfixedvaluekekd = fixedvalued * 86400000; //1 day

		const collector = messageToReact.createReactionCollector(
 			(reaction) => reaction.emoji.name === '👎',
 			{ time: reelfixedvaluekekd } //todo: make custom time? already did o3o
 		);

 		collector.on('collect', r => console.log("thumbs down in " + messageToReact.guild.name));




 		collector.on('end', collected => {

 			var realnumberrrr = messageToReact.reactions.find(r=>r.emoji.name==="👎").count - 1; //get the right number

 			console.log("Collected " + realnumberrrr + " votes for thumbs down");


 			message.channel.send("Contre : " + realnumberrrr);

		 })
	 })
	})
	 }).catch(err => console.log((err)));
	}

	if(m != "-1" && isTimed == true) { //edited kek
		console.log("got minutes");

		fixedvaluem = timeresultkek.replace("m", "");

        reelfixedvaluekekm = fixedvaluem * 60000;

		console.log("Sondages crée, il a pour durée de " + reelfixedvaluekekm + " minutes!");


	message.channel.send(pollstuff).then(messageToReact => {

 	var idk = messageToReact.react("👍").catch(err => message.channel.send((err))).then(msg => { //todo: custom emojis?!



		const collector = messageToReact.createReactionCollector(
 			(reaction) => reaction.emoji.name === '👍',
 			{ time: reelfixedvaluekekm } //todo: make custom time? already did o3o
 		);
 		collector.on('collect', r => console.log("thumbs up in " + messageToReact.guild.name));
 		collector.on('end', collected => {

 			var realnumberrr = messageToReact.reactions.find(r=>r.emoji.name==="👍").count - 1; //get the right number

 			console.log("Collected " + realnumberrr + " votes for thumbs up");

 			if(realnumberrr >= rvotes) { //thumbs up
 				message.channel.send("Succès ! Les vote son ouvert 🗳!");

 				message.channel.send("Résultat :");
 				message.channel.send("Pour : " + realnumberrr);

 			}
 			message.channel.send("Résultat :");
 			message.channel.send("Pour : " + realnumberrr);

 		})
 	}).then(collected => {

 	var idk2 = messageToReact.react("👎").then(msg => { //todo: custom emojis?!

		fixedvaluem = timeresultkek.replace("m", "");

		reelfixedvaluekekm = fixedvaluem * 60000;

		const collector = messageToReact.createReactionCollector(
 			(reaction) => reaction.emoji.name === '👎',
 			{ time: reelfixedvaluekekm } //todo: make custom time? already did o3o
 		);

 		collector.on('collect', r => console.log("thumbs down in " + messageToReact.guild.name));




 		collector.on('end', collected => {

 			var realnumberrrr = messageToReact.reactions.find(r=>r.emoji.name==="👎").count - 1; //get the right number

 			console.log("Collected " + realnumberrrr + " votes for thumbs down");


 			message.channel.send("Contre : " + realnumberrrr);

		 })
	 })
	})
	 }).catch(err => console.log((err)));
	}
	else if(h != "-1" && isTimed == true) {

		//console.log("got hours");

		fixedvalueh = timeresultkek.replace("h", "");

        reelfixedvaluekekh = fixedvalueh * 3600000;

		console.log("Created a poll with a time of " + reelfixedvaluekekh + " minutes!");


	message.channel.send(pollstuff).then(messageToReact => {

 	var idk = messageToReact.react("👍").then(msg => { //todo: custom emojis?!



		const collector = messageToReact.createReactionCollector(
 			(reaction) => reaction.emoji.name === '👍',
 			{ time: reelfixedvaluekekh } //todo: make custom time? already did o3o
 		);
 		collector.on('collect', r => console.log("thumbs up in " + messageToReact.guild.name));
 		collector.on('end', collected => {

 			var realnumberrr = messageToReact.reactions.find(r=>r.emoji.name==="👍").count - 1; //get the right number

 			console.log("Collected " + realnumberrr + " votes for thumbs up");

 			//if(realnumberrr >= config.rvotes) { //thumbs up
 				message.channel.send("Success! Got required votes!");

 				message.channel.send("Résultat :");
 				message.channel.send("Pour : " + realnumberrr);

 			//}
 			message.channel.send("Résultat :");
 			message.channel.send("Pour : " + realnumberrr);

 		})
 	}).then(collected => {

 	var idk2 = messageToReact.react("👎").then(msg => { //todo: custom emojis?!

		fixedvalueh = timeresultkek.replace("h", "");

		reelfixedvaluekekh = fixedvalueh * 3600000;

		const collector = messageToReact.createReactionCollector(
 			(reaction) => reaction.emoji.name === '👎',
 			{ time: reelfixedvaluekekh } //todo: make custom time? already did o3o
 		);

 		collector.on('collect', r => console.log("thumbs down in " + messageToReact.guild.name));




 		collector.on('end', collected => {

 			var realnumberrrr = messageToReact.reactions.find(r=>r.emoji.name==="👎").count - 1; //get the right number

 			console.log("Collected " + realnumberrrr + " votes for thumbs down");


 			message.channel.send("Contre : " + realnumberrrr);

		 })
	 })
	})
	 }).catch(err => console.log((err)));
	}








	else if(s != "-1" && isTimed == true) { //original lOLE

		//console.log("got seconds");

		fixedvaluesec = timeresultkek.replace("s", "");

		reelfixedvaluekeksec = fixedvaluesec * 1000;

		console.log("Created a poll with a time of " + reelfixedvaluekeksec + " minutes!");

	message.channel.send(pollstuff).then(messageToReact => {

 	var idk = messageToReact.react("👍").then(msg => { //todo: custom emojis?!



		const collector = messageToReact.createReactionCollector(
 			(reaction) => reaction.emoji.name === '👍',
 			{ time: reelfixedvaluekeksec } //todo: make custom time? already did o3o
 		);
 		collector.on('collect', r => console.log("thumbs up in " + messageToReact.guild.name));
 		collector.on('end', collected => {

 			var realnumberrr = messageToReact.reactions.find(r=>r.emoji.name==="👍").count - 1; //get the right number

 			console.log("Collected " + realnumberrr + " votes for thumbs up");

 			if(realnumberrr >= rvotes) { //thumbs up
 				message.channel.send("Success! Got required votes!");

 				message.channel.send("Résultat :");
 				message.channel.send("Pour : " + realnumberrr);

 			}
 			message.channel.send("Résultat :");
 			message.channel.send("Pour : " + realnumberrr);

 		})
 	}).then(collected => {

 	var idk2 = messageToReact.react("👎").then(msg => { //todo: custom emojis?!

		fixedvaluesec = timeresultkek.replace("s", "");

		reelfixedvaluekeksec = fixedvaluesec * 1000;

		const collector = messageToReact.createReactionCollector(
 			(reaction) => reaction.emoji.name === '👎',
 			{ time: reelfixedvaluekeksec } //todo: make custom time? already did o3o
 		);

 		collector.on('collect', r => console.log("thumbs down in " + messageToReact.guild.name));




 		collector.on('end', collected => {

 			var realnumberrrr = messageToReact.reactions.find(r=>r.emoji.name==="👎").count - 1; //get the right number

 			console.log("Collected " + realnumberrrr + " votes for thumbs down");


 			message.channel.send("Contre : " + realnumberrrr);

		 })
	 })
	})
	 }).catch(err => console.log((err)));
	}



	//untimed stuff kek

	if(isTimed == false) { //original lOLE

	console.log("Poll created WITHOUT any time!");

	message.channel.send(pollstuff).then(messageToReact => {

 	var idk = messageToReact.react("👍").then(msg => { //todo: custom emojis?!



		const collector = messageToReact.createReactionCollector(
 			(reaction) => reaction.emoji.name === '👍',
 			{ } //todo: make custom time? already did o3o
 		);
 		collector.on('collect', r => console.log("thumbs up in " + messageToReact.guild.name));

		 //checkIfrequestStop();


		 //check if stop is called lol
		 function checkIfrequestStoplol(callback) {
			if(requestStop == true) {
				collector.stop();
				//console.log("Collector stopped!");
				clearInterval(intervalID);
			} else {
				//console.log("Still running :U");
			}
		}

		 if(requestStop == false) {
		 var intervalID = setInterval(checkIfrequestStoplol, 1000);
		 //console.log("ok");
		 }


 		collector.on('end', collected => {

 			var realnumberrr = messageToReact.reactions.find(r=>r.emoji.name==="👍").count - 1; //get the right number

 			console.log("Collected " + realnumberrr + " votes for thumbs up");

 			message.channel.send("Résultat :");
 				message.channel.send("Pour : " + realnumberrr);

 		})
 	}).then(collected => {

 	var idk2 = messageToReact.react("👎").then(msg => { //todo: custom emojis?!

		const collector = messageToReact.createReactionCollector(
 			(reaction) => reaction.emoji.name === '👎',
 			{ } //todo: make custom time? already did o3o
 		);

 		collector.on('collect', r => console.log("thumbs down in " + messageToReact.guild.name));


		 function checkIfrequestStoplol2(callback) {
			if(requestStop == true) {
				collector.stop();
				//console.log("Collector stopped!");
				clearInterval(intervalID2);
			} else {
				//console.log("Still running");
			}
		}

		 if(requestStop == false) {
		 var intervalID2 = setInterval(checkIfrequestStoplol2, 3000);
		 //console.log("ok");
		 }


 		collector.on('end', collected => {

 			var realnumberrrr = messageToReact.reactions.find(r=>r.emoji.name==="👎").count - 1; //get the right number

 			console.log("Collected " + realnumberrrr + " votes for thumbs down");


 			message.channel.send("Contre : " + realnumberrrr);

		 })
	 })
	})
	 }).catch(err => console.log((err)));
	}



	else if (m == "-1" && d == "-1" && s == "-1" && h == "-1") {

		message.reply("Format invalide ! \n __Utilisation correcte__`s`, `m`, `h` or `d`!")
	}



//ignore these vv

}).catch(err => console.log((err)));
}).catch(err => console.log((err)));
}


function startVote() {

	message.channel.send(pollstuff).then(messageToReact => {

	var idk = messageToReact.react("👍").then(msg => { //todo: custom emojis?!

		const collector = messageToReact.createReactionCollector(
			(reaction) => reaction.emoji.name === '👍',
			{ time: 5000 } //todo: make custom time?
		);
		collector.on('collect', r => console.log("thumbs up in " + messageToReact.guild.name));
		collector.on('end', collected => {

      var realnumberrr = messageToReact.reactions.find(r=>r.emoji.name==="👍").count - 1; //get the right number

			console.log("Collected " + realnumberrr + " votes for thumbs up");

			if(realnumberrr >= rvotes) { //thumbs up
				message.channel.send("Success! Got required votes!");

				message.channel.send("Résultat :");
 				message.channel.send("Pour : " + realnumberrr);

 			}
 			message.channel.send("Résultat :");
 			message.channel.send("Pour : " + realnumberrr);

		})
	})

	var idk2 = messageToReact.react("👎").then(msg => { //todo: custom emojis?!

		const collector = messageToReact.createReactionCollector(
			(reaction) => reaction.emoji.name === '👎',
			{ time: 5000 } //todo: make custom time?
		);
		collector.on('collect', r => console.log("thumbs down in " + messageToReact.guild.name));
		collector.on('end', collected => {

			var realnumberrrr = messageToReact.reactions.find(r=>r.emoji.name==="👎").count - 1; //get the right number

			console.log("Collected " + realnumberrrr + " votes for thumbs down");

			if(realnumberrrr >= rvotes) { //thumbs up
				//message.channel.send("Success! Got required votes!");
				message.channel.send("Contre : " + realnumberrrr);
			}

			message.channel.send("Contre : " + realnumberrrr);

			message.channel.fetchMessages({limit: 5}) .then(messages => {
			messages.filter(author => {

			console.log("got messages!");
			message.channel.send("got msgs");
			//console.log(messages);
		})
	})
			//message.channel.send("Results:\nPour: " + realnumberrr + "\nContre: " + realnumberrrr);

		})
	})



	//message.channel.send("Results:\nPour : " + realnumberrr + "\nContre : " + realnumberrrr);
	});
}




if (message.content.startsWith (prefix + "pollc") ) {

	getpollinfo();
	//startVote();


} //finish command
          if(message.content.startsWith(prefix + "triggered")) {
         var image;
         var args2 = message.content.split(" ").slice(1).join(" ");
          if(args2){
               var image = args2;
          }else{
   var image = message.author.avatarURL;
          }
cuteapi.generate("triggered", image).then(r => { message.channel.send({ file: { attachment: r
      }}) ;
      })
    }
  })

          //Token
          bot.login (process.env.TOKEN)
