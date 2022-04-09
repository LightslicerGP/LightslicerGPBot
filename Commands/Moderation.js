module.exports = [{
    name: "ban",
    code: `
    $botTyping
    $reply[$messageID;yes]



    



    $onlyIf[$mentionedUsersCount==1;{"embeds": " 
    {newEmbed:
      {title:Mention 1 person!}
      {color:#ffffff}}",
    "reply": {"messageReference": "$messageID"}
    }]
    $onlyIf[$isNumber[$message[2]]==1;{"embeds": " 
    {newEmbed:
      {title:Please put a valid amount of days!}
      {color:#ffffff}}",
    "reply": {"messageReference": "$messageID"}
    }]
    `//$ban[$mentioned;$guildID;$message[2];$messageSlice[2]] 
},{
    name: "unban",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $unban[$mentioned;$messageSlice[1]]



    $onlyIf[$mentionedUsersCount==1;{"embeds": " 
    {newEmbed:
      {title:Mention 1 person!}
      {color:#ffffff}}",
    "reply": {"messageReference": "$messageID"}
    }]
    `
},{
    name: "banned",
    aliases: [`banlist`],
    code: `
    $botTyping
    $reply[$messageID;yes]



    $createFile[$textSplitMap[bannedpeople];banned.txt]
    $textSplit[$usersBanned[$guildID;yes;id;\n];\n]
    `
},{//make wiki when you can
    name: "bannedpeople",
    type: "awaited",
    code: `
    $userTag[$message[1]]
    `
},{
    name: "user",
    code:`
    $botTyping
    $reply[$messageID;yes]



    $color[1;#80bfff]
    $title[1;
        This user is $userTag[$noMentionMessage]!
    ]



    $onlyIf[$isNumber[$message]==true;{"embeds": "
        {newEmbed: 
          {title:Please put a valid ID of a user!}
          {color:#80bfff}}",
        "reply": {"messageReference": "$messageID"}
    }]
    `
    },{
        name: "userid",
        code:`
        $botTyping
        $reply[$messageID;yes]



        $color[1;#80bfff]
        $title[1;
            This user's ID is $findUser[$noMentionMessage;no]!
        ]
        `
    }]