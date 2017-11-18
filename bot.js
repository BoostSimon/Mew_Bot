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
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
