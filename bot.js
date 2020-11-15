const Discord = require('discord.js')
const auth = require('./auth.json');
const bot = new Discord.Client()
const { Client, MessageAttachment, MessageEmbed } = require('discord.js');

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login(auth.token)

const prefix = "!";

bot.on("message", function(message) {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    const channelName = message.channel.name;

    if(channelName == "adhésion"){
        switch(command){
            case "adhésion" :
                const bulletin = new MessageAttachment("public/docs/Bulletin_adhesion.docx");
                message.channel.send(`Voila comment adhérer à l'association Well's Records`);
                message.channel.send(bulletin);
                message.channel.send(`Ou en ligne en visitant ce liens : https://cutt.ly/0g27ZZc`);
                break;
            case "help":
                message.reply(`Si vous avez besoin d'aide diriger vous vers les admin ou la direction ou consulter le channel bienvenue et règles`);
                break;
            default :
                message.reply(`Désolé je ne vous ai pas compris pour tout aide taper !help`)
        }
    }
    if(channelName == "bienvenue-et-règles"){
        switch(command){
            case "règles" :
                message.reply(`Voila comment adhérer à l'association Well's Records`);
                break;
            case "help":
                message.reply(`Si vous avez besoin d'aide diriger vous vers les admin ou la direction ou consulter le channel bienvenue-et-règles`);
                break;
            default :
                message.reply(`Désolé je ne vous ai pas compris pour tout aide taper !help`)
        }
    }
    if(channelName == "annonces"){
        switch(command){
            case "règles" :
                message.reply(`Voila comment adhérer à l'association Well's Records`);
                break;
            case "help":
                message.reply(`Si vous avez besoin d'aide diriger vous vers les admin ou la direction ou consulter le channel bienvenue-et-règles`);
                break;
            default :
                message.reply(`Désolé je ne vous ai pas compris pour tout aide taper !help`)
        }
    }
    if(channelName == "son"){
        switch(command){
            case "list" :
                const list = new MessageEmbed().setColor('#3fc1c9')
                .setTitle("Les artistes de Well's Records :")
                .addFields(
                    { name: 'N.I.C.', value: 'https://soundcloud.com/user-270575735' },
                    { name: "Jus d'Flow", value: 'Some value here' },
                    { name: 'Regular field title', value: 'Some value here' },
                    { name: 'Regular field title', value: 'Some value here' },
                )
                message.channel.send(list);
                break;
            case "spiderwxb" :
                const attachement = new MessageEmbed().setColor('#FF4500')
                .setTitle('https://soundcloud.com/spiderwxb')
                .setURL('https://soundcloud.com/spiderwxb')
                .setAuthor('Spiderwxb', 'https://i1.sndcdn.com/avatars-uDfR24FBcvO6R9Dh-gXt4Pg-t500x500.jpg', 'https://soundcloud.com/spiderwxb')
                .setDescription('35cm au repos')
                .setThumbnail('https://i1.sndcdn.com/avatars-uDfR24FBcvO6R9Dh-gXt4Pg-t500x500.jpg')
                message.channel.send(attachement);
                break;
            case "help":
                message.reply(`Si vous avez besoin d'aide diriger vous vers les admin ou la direction ou consulter le channel bienvenue-et-règles`);
                break;
            default :
                message.reply(`Désolé je ne vous ai pas compris pour tout aide taper !help`)
        }
    }
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue sur mon serveur ' + member.displayName)
    }).catch(console.error)
    // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
});