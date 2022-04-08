/* const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const prefix = '#';
client.once('ready', () => {
    console.log('Yo the bot is online')
});
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'ping'){
        message.channel.send('pong!');
    } else if(command === 'test'){
        message.channel.send('yo wassup lol');
    }
});

client.on('messageReactionRemove', (reaction, user) => {
    console.log(`${user.username} unreacted ${reaction.emoji.name} on this message: ${reaction.message.content}`)
});

client.login(token);*/