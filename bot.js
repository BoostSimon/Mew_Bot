const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
var prefix = "m"
var number;
var Version = "1.3.2";
client.on('message', message => {
    if (message.content === prefix + '.Hello') {
    	message.reply('Hi');
  	}
    if (message.content === prefix + '.Commands') {
        const embed = new Discord.RichEmbed()
        .setColor(0x954D23)
        .setTitle("Commands")
        .addField("m.Memes", "Make the bot give you a meme")
        .addField("m.TellMeAJoke", "Make the bot to tell you a joke")
        message.channel.send({embed})
    }
    if (message.content === prefix + ".TellMeAJoke") {
       message.reply("Robox is a good game");   
    }
    if (message.content === prefix + ".Memes") {
     message.channel.sendMessage("Here is a meme for you"); 
     number = math.floor(math.random() * 4);
        if (number === 0) {
         number = 1;   
        }
        if (number === 1) {
         message.channel.sendMessage("https://imgur.com/a/IPG0r"); 
        }
        if (number === 2) {
          message.channel.sendMessage("https://media.discordapp.net/attachments/265381707312660480/366217251424174080/unknown.png");
        }
        if (number === 3) {

         message.channel.sendMessage("https://cdn.discordapp.com/attachments/374255440055500800/374255583647236099/marin_tho.jpg");
        }
    }
    if (message.content == prefix + ".Say") {
     var words = args.slice(1).join(" ");
message.delete();
message.channel.send(words)
    }
    if (message.content == prefix + ".version") {
     message.channel.sendMessage("Current Version: " + Version);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
