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










/* ARCHIVED COMMAND MODULES
{
    name: "help",
    code: `
    $botTyping
    $reply[$messageID;yes]

    $color[1;#2f3136]
    $title[1;[this ***ISNT*** necessary] {this ***IS*** necessary}]
    $description[1;
        *Starred commands are reserved only for LightslicerGP/Admins, I'm sorry if you are not one of them :joy:
    ]



    $color[2;#80bfff]
    $title[2;General Commands]
    $description[2;
        General commands that give information or edit settings, some commands might not be on here due to them being used only temporarily and will either be changed or deleted
    ]
    $addField[2;#version;See if im using the Aoijs version or Bdfd version;yes]
    $addField[2;#test;Testing command, code will change so function and usage will not always be the same;yes]
    $addField[2;#temp;All index based string functions for an embed;yes]
    $addField[2;#ping;Check the ping of the bot;yes]
    $addField[2;(mention the bot);Gives the bot prefix, which is #;yes]
    $addField[2;#invite;An invite link to invite the bot to your server;yes]
    $addField[2;*#eval {code};Run code manually;yes]
    $addField[2;#date;Get today's exact date and time;yes]
    $addField[2;#calc [expression];solve a simple math problem;yes]
    $addField[2;*#bot restart;Restart the bot;yes]
    $addField[2;#bot info;See all the information of the bot;yes]



    $color[3;#80ff80]
    $title[3;Money Commands]
    $description[3;
        All money and economy related commands
    ]
    $addField[3;#work;Do some work and make some money;yes]
    $addField[3;#daily;Get your daily $1k;yes]
    $addField[3;#bal top;Check the top balance in the universe;yes]
    $addField[3;*#bal set [user] {amount};Set a person's money to any amount;yes]
    $addField[3;*#bal reset [user];Reset a person's money to $0;yes]
    $addField[3;#bal give {user} {amount};Give a person some money;yes]
    $addField[3;#bal gamble {amount};Gamble some money to win 3x the amount (coming soon!);yes]
    $addField[3;#bal [user];Get a user's balance amount;yes]



    $color[4;#ff8080]
    $title[4;Profile Commands]
    $description[4;
        All personal profiles with their information
    ]
    $addField[4;#profile set {subcommand} {value};Edit your personal profile;yes]
    $addField[4;#profile search {subcommand} {value};Check the amount of ppl with a certain Field (coming soon!);yes]
    $addField[4;#profile [user];Check a persons personal profile;yes]



    $color[5;#ffff80]
    $title[5;Fun Commands]
    $description[5;
        All fun and random commands that some of which use some-random-api.ml!
    ]
    $addField[5;#tweet [text];Make a fake tweet image;yes]
    $addField[5;#image [animal];Get a random picture of an animal you choose!;yes]
    $addField[5;#chat [text];Talk to the bot personally;yes]
    `
}, 
*/