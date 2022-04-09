module.exports = [{
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
        General commands that give information or edit settings, some command might not be on here due to them being used only temporarily and will either be changed or deleted
    ]
    $addField[2;#test;Testing command, code will change so function and usage will not always be the same;yes]
    $addField[2;*#bot restart;Restart the bot;yes]
    $addField[2;*#eval {code};Run code manually;yes]
    $addField[2;(mention the bot);Gives the bot prefix, which is #;yes]
    $addField[2;#temp;All index based string functions for an embed;yes]
    $addField[2;#date;Get today's exact date and time;yes]
    $addField[2;#calc {expression};solve a simple math problem;yes]
    $addField[2;#ping;Check the ping of the bot;yes]
    $addField[2;#version;See if im using the Aoijs version or Bdfd version;yes]
    $addField[2;#invite;An invite link to invite the bot to your server;yes]
    $addField[2;#bot info;See all the information of the bot;yes]



    $color[3;#80ff80]
    $title[3;Money Commands]
    $description[3;
        All money related commands
    ]
    $addField[3;#daily;Get your daily $1k;yes]
    $addField[3;#work;Do some work and make some money;yes]
    $addField[3;*#bal reset [user];Reset a person's money to $0;yes]
    $addField[3;*#bal set [user] {amount};Set a person's money to any amount;yes]
    $addField[3;#bal give {user} {amount};Give a person some money;yes]
    $addField[3;#bal gamble {amount};Gamble some money to win 3x the amount (coming soon!);yes]
    $addField[3;#bal top;Check the top balance in the universe;yes]
    $addField[3;#bal [user];Get a user's balance amount;yes]



    $color[4;#ff8080]
    $title[4;Profile Commands]
    $description[4;
        All personal profiles with their information
    ]
    $addField[4;#profile search {subcommand} {value};Check the amount of ppl with a certain Field (coming soon!);yes]
    $addField[4;#profile set {subcommand} {value};Edit your personal profile;yes]
    $addField[4;#profile [user];Check a persons personal profile;yes]



    $color[5;#ffff80]
    $title[5;Fun Commands]
    $description[5;
        All fun and random commands that some of which use some-random-api.ml!
    ]
    $addField[5;#image {animal};Get a random picture of an animal you choose!;yes]
    $addField[5;#tweet {text};Make a fake tweet image;yes]
    $addField[5;#chat {text};Talk to the bot personally;yes]
    `
},{
    name: "ping",
    code: `
    $botTyping
    $reply[$messageID;yes]


    
    $color[1;#80bfff]
    $title[1;
        Pong! $pingms
    ]
    `
},{
    name: "version",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[1;#80bfff]
    $title[1;
        This version of the bot uses the AOI api to write code easier. My cousin reccomended this to me 2/7/22, so lets see if its easier than normal node.js!
    ]
    `
},{
    name: "invite",
    code: `
    $botTyping    
    $reply[$messageID;yes]



    $color[1;#80bfff]
    $title[1;Want to invite me to your own server? Click below!]
    $description[1;
[Invite me!](https://discord.com/api/oauth2/authorize?client_id=698733140939898957&permissions=8&scope=bot%20applications.commands)
[Support Server](https://discord.gg/3TGX6RA)
    ]
    `
},{
    name: "eval",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[1;#80bfff]
    $title[1;
        $eval[$message]
    ]



    $onlyIf[$authorID==586225258269245538||$authorID==883931596758081556;{"embeds": "
        {newEmbed: 
          {title:Insufficient permission}
          {description:You're not LightslicerGP (nor an admin), and I (the bot) can't make you him sooo..... sorry I guess}
          {color:#80bfff}}",
        "reply": {"messageReference": "$messageID"}
      }]
    `
},{
    name:"bot info",
    aliases: ['info'],
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[1;#80bfff]
    $title[1;Bot Info]
    $description[1;
        Here is all the inormation you could possibly get from this, enjoy!
    ]



    $image[1;$userAvatar[$clientID]]
    $addField[1;Bot Avatar; :arrow_down: Here you go!;yes]
    $addField[1;Node version:;$nodeVersion;yes]
    $addField[1;Full RAM Usage;$ram[rss];yes]
    $addField[1;Full CPU Usage;$cpu[os];yes]
    $addField[1;Bot RAM Usage;$ram[heapUsed];yes]
    $addField[1;Bot CPU Usage;$cpu[process];yes]
    $addField[1;Bot Name;$username[$clientID];yes]
    $addField[1;Bot Message Received Ping;$messagePing;yes]
    $addField[1;Bot Database Ping;$dbPingms;yes]
    $addField[1;Bot Ping;$pingms;yes]
    $addField[1;Bot Uptime;$uptime;yes]
    $addField[1;Commands Count;$commandsCount;yes]
    $addField[1;Server Count;$serverCount;yes]
    $addField[1;User Count;$allMembersCount;yes]
    $addField[1;Bot Creation Date/Time;$creationDate[698733140939898957;date] (yea I know, 3 am lmao);yes]
    $addField[1;Bot Owner;[$username[$botOwnerID]](https://youtube.com/c/LightslicerGP/);yes]
    `
},{
    name:"bot restart", 
    code:`
    $botTyping
    $reply[$messageID;yes]



    $reboot
    $wait[1s]
    $color[1;#80bfff]
    $title[1;
    Alrighty, restarting!
    ]



    $onlyIf[$authorID==586225258269245538||$authorID==883931596758081556;{"embeds": "
        {newEmbed: 
          {title:Insufficient permission}
          {description:You're not LightslicerGP (nor an admin), and I (the bot) can't make you him sooo..... sorry I guess}
          {color:#80bfff}}",
        "reply": {"messageReference": "$messageID"}
      }]
    `
},{
    name: "temp",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[1;#80bfff]
    $title[1;TitleTextGoesHere]
    $description[1;DescriptionTextGoesHere]
    $footer[1;FooterTextGoesHere;https://lightslicergp.netlify.app]
    $addTimestamp[1;$dateStamp]
    $addField[1;AddFieldTextGoesHere;AddFieldValueGoesHere;yes]
    $addField[1;AddFieldTextGoesHere;AddFieldValueGoesHere;yes]
    $addField[1;AddFieldTextGoesHere;AddFieldValueGoesHere;yes]
    $author[1;AuthorTextGoesHere;https://my.mcpedl.com/storage/texturepacks/3327/images/kellys-minecraft-vanilla-rtx-conversion-pack-caves-and-cliffs-supprt-as-well-as-discord_5.png;https://api.mcpedl.com/storage/submissions/99076/images/kellys-minecraft-vanilla-rtx-conversion-pack-massive-update_4.jpeg]
    $thumbnail[1;https://my.mcpedl.com/storage/texturepacks/3327/images/kellys-minecraft-vanilla-rtx-conversion-pack-clear-water-and-another-addon_8.png]
    $image[1;https://images.nvidia.com/geforce/news/minecraft-rtx-february-2021-player-worlds-roundup/Kelly-3.jpg;ImageNameGoesHere]
    `//bottom one is $image, top right one is $thumbnail, top left is $author
},{
    name: "$alwaysExecute",
    code: `
    $addMessageReactions[$channelID;$messageID;<:ping:940942433968070678>;<:tomWtf:940943821884231740>]
    $onlyIf[$isMentioned[$botOwnerID]==true||$isMentioned[698733140939898957]==true;]
    `
},{
    name: "$alwaysExecute",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[1;#80bfff]
    $title[1;
        My prefix is # :D
    ]
    $description[1;
        Do #help for the list of commands!
    ]



    $onlyIf[$isMentioned[698733140939898957]==true;]
    $onlyIf[$stringStartsWith[$message;#]!=true;]
    `
},{
    name: "date",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[1;#80bfff]
    $title[1;
        Here is the date and time in Eastern Daylight Time (EDT)
    ]
    $description[1;
        $parseDate[$math[$dateStamp-14400000];date]
    ]
    `
},{
    name: "calc",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[1;#80bfff]
    $title[1;
        Here is your result:
    ]
    $description[1;
        $math[$replaceText[$noMentionMessage;x;*]]
    ]



    $onlyIf[$message!=;{"embeds":"
        {newEmbed:
        {title:Please include some expression to calculate!}
        {color:#80bfff}}",
        "reply": {"messageReference": "$messageID"}
    }]
    `
},{
    name: "select",
    code:
    `
    $botTyping
    $reply[$messageID;yes]



    $color[1;#80bfff]
    $title[1;test]
    $addSelectMenu[1;HelpMenu;Select Catagory;min;max;false;General Commands:General commands that give information or edit settings:General:true:⚙️;option2:option 2 description:option_2_value:true:😂]
    `
},{
    name: "HelpMenu",
    type: "interaction",
    prototype: "selectMenu",
    code:
    `$interactionReply[
        $editMessage[$messageID;
            {newEmbed:
                {color:#80bfff}
                {title:General Commands}
                {description:General commands that give information or edit settings, some command might not be on here due to them being used only temporarily and will either be changed or deleted}
                {field:#bot info:See all the information of the bot:yes}
                {field:#invite:An invite link to invite the bot to your server:yes}
                {field:#version:See if im using the Aoijs version or Bdfd version:yes}
                {field:#ping:Check the ping of the bot:yes}
                {field:#calc #RIGHT_BRACKET#expression#LEFT_BRACKET#:solve a simple math problem:yes}
                {field:#date:Get today's exact date and time:yes}
                {field:#temp:All index based string functions for an embed:yes}
                {field:(mention the bot):Gives the bot prefix, which is #:yes}
                {field:*#eval #RIGHT_BRACKET#code#LEFT_BRACKET#:Run code manually:yes}
                {field:*#bot restart:Restart the bot:yes}
                {field:#test:Testing command, code will change so function and usage will not always be the same:yes}
            }
        ;$channelID]
    ]
    $onlyIf[$interactionData[values[0]]==General;]
    `
},{
    name: "HelpMenu",
    type: "interaction",
    prototype: "selectMenu",
    code:
    `
    $interactionReply[
        $editMessage[$messageID;{newEmbed:{title:second optoin}{color:#80bfff}};$channelID]
    ]
    $onlyIf[$interactionData[values[0]]==option_2_value;]
`
}]