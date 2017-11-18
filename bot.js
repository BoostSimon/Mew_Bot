const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
var prefix = "m"
client.on('message', message => {
    if (message.content === prefix + '.ping') {
    	message.reply('pong');
  	}
    if (message.content === prefix + '.Hello') {
    	message.reply('Hi');
  	}
    if (message.content === prefix + '.Commands') {
        message.reply("Commands list");
        message.send("m.Hello - say hello to the bot");
        message.send("m.TellMeAJoke - telling you a joke");
    }
    if (message.content === prefix + ".TellMeAJoke") {
       message.reply("Robox is a good game");   
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
