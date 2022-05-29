const token = process.env['TOKEN']
global.AbortController = require("node-abort-controller").AbortController;

const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client({
  intents:0
});

/*const prefix = '-m';

const fs = require('fs');*/

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

/*const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

});*/

//client.login(process.env.Token);
client.login(token)