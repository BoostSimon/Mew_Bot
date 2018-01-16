const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
var prefix = "m"
var number;
client.on('message', message => {
    if (message.content === prefix + '.Hello') {
    	message.reply('Hi');
  	}
    if (message.content === prefix + '.Commands') {
        message.channel.sendMessage("Commands list");
        message.channel.sendMessage("m.Hello - say hello to the bot");
        message.channel.sendMessage("m.TellMeAJoke - telling you a joke");
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
     message.channel.sendMessgae(message.content.substring(3));   
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
