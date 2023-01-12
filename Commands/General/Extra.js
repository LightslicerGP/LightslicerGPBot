module.exports = [{
    name: "ping",
    code: `
    $botTyping
    $reply[$messageID;yes]


    
    $color[#80bfff]
    $title[
        Pong! $pingms
    ]
    `
}, {
    name: "version",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[#80bfff]
    $title[
        This version of the bot uses the AOI api to write code easier. My cousin reccomended this to me 2/7/22, so lets see if its easier than normal node.js!
    ]
    `
}, {
    name: "invite",
    code: `
    $botTyping    
    $reply[$messageID;yes]



    $color[#80bfff]
    $title[Want to invite me to your own server? Click below!]
    $description[
[Invite me!](https://discord.com/api/oauth2/authorize?client_id=698733140939898957&permissions=8&scope=bot%20applications.commands)
[Support Server](https://discord.gg/3TGX6RA)
    ]
    `
}, {
    name: "eval",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[#80bfff]
    $description[
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
}, {
    name: "bot info",
    aliases: ['info'],
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[#80bfff]
    $title[Bot Info]
    $description[
        Here is all the inormation you could possibly get from this, enjoy!
    ]



    $image[$userAvatar[$clientID]]
    $addField[Bot Avatar; :arrow_down: Here you go!;yes]
    $addField[Node version:;$nodeVersion;yes]
    $addField[Full RAM Usage;$ram[rss];yes]
    $addField[Full CPU Usage;$cpu[os];yes]
    $addField[Bot RAM Usage;$ram[heapUsed];yes]
    $addField[Bot CPU Usage;$cpu[process];yes]
    $addField[Bot Name;$username[$clientID];yes]
    $addField[Bot Message Received Ping;$messagePing;yes]
    $addField[Bot Database Ping;$dbPingms;yes]
    $addField[Bot Ping;$pingms;yes]
    $addField[Bot Uptime;$uptime;yes]
    $addField[Commands Count;$commandsCount;yes]
    $addField[Server Count;$serverCount;yes]
    $addField[User Count;$allMembersCount;yes]
    $addField[Bot Creation Date/Time;$creationDate[698733140939898957;date] (yea I know, 3 am lmao);yes]
    $addField[Bot Owner;[$username[$botOwnerID]](https://youtube.com/c/LightslicerGP/);yes]
    `
}, {//disable this its probs useless
    name: "bot restart",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $reboot
    $wait[1s]
    $color[#80bfff]
    $title[
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
}, {
    name: "temp",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[#80bfff]
    $title[TitleTextGoesHere]
    $description[DescriptionTextGoesHere]
    $footer[FooterTextGoesHere;https://lightslicergp.netlify.app]
    $addTimestamp[$dateStamp]
    $addField[AddFieldTextGoesHere;AddFieldValueGoesHere;yes]
    $addField[AddFieldTextGoesHere;AddFieldValueGoesHere;yes]
    $addField[AddFieldTextGoesHere;AddFieldValueGoesHere;yes]
    $author[AuthorTextGoesHere;https://my.mcpedl.com/storage/texturepacks/3327/images/kellys-minecraft-vanilla-rtx-conversion-pack-caves-and-cliffs-supprt-as-well-as-discord_5.png;https://api.mcpedl.com/storage/submissions/99076/images/kellys-minecraft-vanilla-rtx-conversion-pack-massive-update_4.jpeg]
    $thumbnail[https://my.mcpedl.com/storage/texturepacks/3327/images/kellys-minecraft-vanilla-rtx-conversion-pack-clear-water-and-another-addon_8.png]
    $image[https://images.nvidia.com/geforce/news/minecraft-rtx-february-2021-player-worlds-roundup/Kelly-3.jpg;ImageNameGoesHere]

    $addButton[1;label;1;1;no;]
    $addButton[1;label;2;2;no;]
    $addButton[1;label;3;3;no;]
    $addButton[1;label;4;4;no;]
    $addButton[1;label;5;https://www.example.com;no;]
    $addButton[2;label;1;6;yes;]
    $addButton[2;label;2;7;yes;]
    $addButton[2;label;3;8;yes;]
    $addButton[2;label;4;9;yes;]
    $addButton[2;label;5;https://www.example.com;yes;]
    `//bottom one is $image, top right one is $thumbnail, top left is $author
}/*, {
    name: "$alwaysExecute",
    code: `
    $addMessageReactions[$channelID;$messageID;<:ping:940942433968070678>;<:tomWtf:940943821884231740>]
    $onlyIf[$isMentioned[$botOwnerID]==true||$isMentioned[698733140939898957]==true;]
    `
}, {
    name: "$alwaysExecute",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[#80bfff]
    $title[
        My prefix is # :D
    ]
    $description[
        Do #help for the list of commands!
    ]



    $onlyIf[$isMentioned[698733140939898957]==true;]
    $onlyIf[$stringStartsWith[$message;#]!=true;]
    `
}*/, {
    name: "date",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[#80bfff]
    $title[
        Here is the date and time in Eastern Daylight Time (EDT)
    ]
    $description[
        $parseDate[$math[$dateStamp-14400000];date]
    ]
    `
}, {//DONT GET RID OF INDEX!!!!!
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
}, {//Banned reason doesnt work
    name: "banned",
    aliases: [`banlist`],
    code: `
    $botTyping
    $reply[$messageID;yes]



    $usersBanned[$guildID;yes;id;\n]
    $getBanReason[$guildID;$usersBanned[$guildID;yes;id];\n]

    `
}, {//make wiki when you can $createFile[$textSplitMap[bannedpeople];banned_usernames.txt]    $createFile[$usersBanned[$guildID;yes;id;\n];banned_ids.txt] $textSplit[$usersBanned[$guildID;yes;id;\n], for $getBanReason[$guildID;$usersBanned[$guildID;yes;id]];\n]
    name: "bannedpeople",
    type: "awaited",
    code: `
    $userTag[$message[1]]
    `
}, {//combine this with the next one
    name: "user",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[#80bfff]
    $title[
        This user is $userTag[$noMentionMessage]!
    ]



    $onlyIf[$isNumber[$message]==true;{"embeds": "
        {newEmbed: 
          {title:Please put a valid ID of a user!}
          {color:#80bfff}}",
        "reply": {"messageReference": "$messageID"}
    }]
    `
}, {
    name: "id",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[#80bfff]
    $title[
        This user's ID is $findUser[$noMentionMessage;no]!
    ]
    `
}, {//doesnt work, the "if" statement goes from the inside out so it fails when you do the second option so use "onlyif"?
    name: "person",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[1;#80bfff]
    $title[1;
        This user is $userTag[$noMentionMessage]!
    ]

    $onlyIf[$isNumber[$noMentionMessage]==true;
        $title[1;
            This user's ID is $findUser[$noMentionMessage;no]!
        ]
    ]
    `
}, {
    name: "help",
    code:
        `
    $botTyping
    $reply[$messageID;yes]



    $color[#80bfff]
    $title[Select a catagory to get help and commands!]
    $addSelectMenu[1;HelpMenu;Select Catagory;1;1;false;General Commands:General commands that give information or edit settings:General:false:⚙️;Money Commands:All money and economy related commands:Money:false:💵;Profile Commands:All personal profiles with their information:Profile:false:👤;Fun Commands:All fun and random commands that some of which use some-random-api.ml!:Fun:false:🎮]
    `
}, {
    name: "HelpMenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `
    $interactionUpdate[;
        {newEmbed:
            {color:#80bfff}
            {title:General Commands}
            {description:General commands that give information or edit settings, some command might not be on here due to them being used only temporarily and will either be changed or deleted}

            {field:#bot info:See all the information of the bot:yes}
            {field:*#bot restart:Restart the bot:yes}
            {field:#banned:List of banned people (and #bannedpeople ?):yes}
            {field:#calc [expression]:Solve a simple math problem:yes}
            {field:#date:Get today's exact date and time:yes}
            {field:*#eval [code]:Run code manually:yes}
            {field:#id [user id]:Convert a username into an id:yes}
            {field:#invite:An invite link to invite the bot to your server:yes}
            {field:(mention the bot):Gives the bot prefix, which is #:yes}
            {field:#person:Convert a user's username to an id, or id to username:yes}
            {field:#ping:Check the ping of the bot:yes}
            {field:#temp:All index based string functions for an embed:yes}
            {field:#test:Testing command, code will change so function and usage will not always be the same:yes}
            {field:#user [username]:Convert a username into an id:yes}
            {field:#version:See if im using the Aoijs version or Bdfd version:yes}

            {footer:[REQUIRED] #RIGHT_BRACKET#OPTIONAL#LEFT_BRACKET# *ADMIN ONLY}
        };
        {actionRow:
            {selectMenu:
                HelpMenu:
                Select Catagory:
                1:
                1:
                no:
                {selectMenuOptions:
                    General Commands:
                    General:
                    General commands that give information or edit settings:
                    no:
                    ⚙️
                }
                {selectMenuOptions:
                    Money Commands:
                    Money:
                    All money and economy related commands:
                    no:
                    💵
                }
                {selectMenuOptions:
                    Profile Commands:
                    Profile:
                    All personal profiles with their information:
                    no:
                    👤
                }
                {selectMenuOptions:
                    Fun Commands:
                    Fun:
                    All fun and random commands that some of which use some-random-api.ml!:
                    no:
                    🎮
                }
            }
        }
    ]
    $onlyIf[$interactionData[values[0]]==General;]
    `
}, {
    name: "HelpMenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `
    $interactionUpdate[;
        {newEmbed:
            {color:#80ff80}
            {title:Money Commands}
            {description:All money and economy related commands}

            {field:#bal #RIGHT_BRACKET#user#LEFT_BRACKET#:Get a user's balance amount:yes}
            {field:#bal gamble [amount]:Gamble some money to win up to 3x the amount (coming soon!):yes}
            {field:#bal give [user] [amount]:Give a person some money:yes}
            {field:*#bal reset #RIGHT_BRACKET#user#LEFT_BRACKET#:Reset a person's money to $0:yes}
            {field:*#bal set #RIGHT_BRACKET#user#LEFT_BRACKET# [amount]:Set a person's money to any amount:yes}
            {field:#bal top:Check the top balance in the universe:yes}
            {field:#daily:Get your daily $1k:yes}
            {field:#work:Do some work and make some money:yes}

            {footer:[REQUIRED] #RIGHT_BRACKET#OPTIONAL#LEFT_BRACKET# *ADMIN ONLY}
        };
        {actionRow:
            {selectMenu:
                HelpMenu:
                Select Catagory:
                1:
                1:
                no:
                {selectMenuOptions:
                    General Commands:
                    General:
                    General commands that give information or edit settings:
                    no:
                    ⚙️
                }
                {selectMenuOptions:
                    Money Commands:
                    Money:
                    All money and economy related commands:
                    no:
                    💵
                }
                {selectMenuOptions:
                    Profile Commands:
                    Profile:
                    All personal profiles with their information:
                    no:
                    👤
                }
                {selectMenuOptions:
                    Fun Commands:
                    Fun:
                    All fun and random commands that some of which use some-random-api.ml!:
                    no:
                    🎮
                }
            }
        }
    ]
    $onlyIf[$interactionData[values[0]]==Money;]
    `
}, {
    name: "HelpMenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `
    $interactionReply[
        $editMessage[$messageID;
            {newEmbed:
                {color:#ff8080}
                {title:Profile Commands}
                {description:All personal profiles with their information}

                {field:#profile #RIGHT_BRACKET#user#LEFT_BRACKET#:Check a persons personal profile:yes}
                {field:#profile search [subcommand] [value]:Check the amount of ppl with a certain Field (coming soon!):yes}
                {field:#profile set [subcommand] [value]:Edit your personal profile:yes}

                {footer:[REQUIRED] #RIGHT_BRACKET#OPTIONAL#LEFT_BRACKET# *ADMIN ONLY}
            }
        ;$channelID]
    ]
    $onlyIf[$interactionData[values[0]]==Profile;]
    `
}, {
    name: "HelpMenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `
    $interactionReply[
        $editMessage[$messageID;
            {newEmbed:
                {color:#ffff80}
                {title:Fun Commands}
                {description:All fun and random commands that some of which use some-random-api.ml!}

                {field:#animal [animal]:Get an image and fact of an animal of your choosing:yes}
                {field:#chat [text]:Talk to the bot personally:yes}
                {field:#coinflip:Flip a coin:yes}
                {field:#image [animal]:Get a random picture of an animal you choose!:yes}
                {field:#tweet [text]:Make a fake tweet image:yes}

                {footer:[REQUIRED] #RIGHT_BRACKET#OPTIONAL#LEFT_BRACKET# *ADMIN ONLY}
            }
        ;$channelID]
    ]
    $onlyIf[$interactionData[values[0]]==Fun;]
    `
}]