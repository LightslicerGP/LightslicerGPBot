// my id is 586225258269245538 :D

module.exports = [{
  name: "bal",
  code: `
  $botTyping
  $reply[$messageID;yes]



  $color[1;#80ff80]
  $title[1;
    $username[$mentioned[1]] has $$numberSeparator[$getGlobalUserVar[Money;$mentioned[1];Bank]]
  ]



  $globalCooldown[5s;{"embeds":"
    {newEmbed:
      {title:Slow down!}
      {description:You have to wait %time% before doing this command again!}
      {color:#80ff80}}",
    "reply": {"messageReference": "$messageID"}
  }]
  `
},{
  name: "bal top",
  aliases: ['baltop'],
  code: `
  $botTyping
  $reply[$messageID;yes]



  $color[1;#80ff80]
  $title[1;
  Global Leaderboard
  ]
  $description[1;$textSplitMap[MoneyLeaderboard]]



  $textSplit[$globalUserLeaderboard[Money;asc;{top}§{tag}§{value};15;1;Bank];\n]
  `
},{
  name: "MoneyLeaderboard",
  type: "awaited",
  code: `
  $splitText[1]: $splitText[2] - $$numberSeparator[$splitText[3]]
  $textSplit[$message[1];§]
  `
},{
  name: "bal gamble",
  aliases: ['gamble'],
  code: `
  $botTyping
  $reply[$messageID;yes]
  
  
  
  $color[1;#80ff80]
  $title[1;
    Gambleing...
  ]
  $description[1;
    You gambled $$numberSeparator[$truncate[$noMentionMessage]] with a $round[$math[(1/($truncate[$noMentionMessage]**(1/3)))*100]]% chance of tripleing! Lets see if you won in 5...
    $setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID;Bank];$truncate[$noMentionMessage]];$authorID;Bank]
  ]



  $editIn[1s;
  {newEmbed:
    {title:Gambleing...}
    {description:You gambled $$numberSeparator[$truncate[$noMentionMessage]] with a $round[$math[(1/($truncate[$noMentionMessage]**(1/3)))*100]]% chance of tripleing! Lets see if you won in 4...}
    {color:#80ff80}
  };
  {newEmbed:
    {title:Gambleing...}
    {description:You gambled $$numberSeparator[$truncate[$noMentionMessage]] with a $round[$math[(1/($truncate[$noMentionMessage]**(1/3)))*100]]% chance of tripleing! Lets see if you won in 3...}
    {color:#80ff80}
  };
  {newEmbed:
    {title:Gambleing...}
    {description:You gambled $$numberSeparator[$truncate[$noMentionMessage]] with a $round[$math[(1/($truncate[$noMentionMessage]**(1/3)))*100]]% chance of tripleing! Lets see if you won in 2...}
    {color:#80ff80}
  };
  {newEmbed:
    {title:Gambleing...}
    {description:You gambled $$numberSeparator[$truncate[$noMentionMessage]] with a $round[$math[(1/($truncate[$noMentionMessage]**(1/3)))*100]]% chance of tripleing! Lets see if you won in 1...}
    {color:#80ff80}
  };
  {newEmbed:
    {title:Gamble complete!}
    {description:

      You won $$math[$truncate[$noMentionMessage]*3] and now have $$getGlobalUserVar[Money;$authorID;Bank]
      $setGlobalUserVar[Money;$math[($truncate[$noMentionMessage]*3)+$getGlobalUserVar[Money;$authorID;Bank]];$authorID;Bank]

      $onlyIf[$round[$random[1;$math[$truncate[$noMentionMessage]**(1/3)];yes]]==1;
      You did not win, sad. Now you have $$getGlobalUserVar[Money;$authorID;Bank]];
    ]}
    {color:#80ff80}
  }]


  
$onlyIf[$noMentionMessage!=0;{"embeds": " 
  {newEmbed:
    {title:Cannot gamble $0!}
    {color:#80ff80}}",
  "reply": {"messageReference": "$messageID"}
  }]
  $onlyIf[$checkContains[$noMentionMessage;-]==false;{"embeds":"
  {newEmbed:
    {title:Cannot gamble negetive amounts!}
    {color:#80ff80}}",
    "reply": {"messageReference": "$messageID"}
  }]
    $onlyIf[$noMentionMessage<=$getGlobalUserVar[Money;$authorID;Bank];{"embeds": " 
    {newEmbed:
      {title:You do not have that much to gamble!}
      {color:#80ff80}}",
    "reply": {"messageReference": "$messageID"}
  }]
  $onlyIf[$isNumber[$noMentionMessage]==true;{"embeds": "
    {newEmbed:
      {title:Input a valid number!}
      {color:#80ff80}}",
    "reply": {"messageReference": "$messageID"}
  }]



  $globalCooldown[1s;{"embeds": "
      {newEmbed: 
        {title:Slow down!}
        {description:You have to wait %time% before doing gambleing again!!}
        {color:#80ff80}}",
      "reply": {"messageReference": "$messageID"}
  }]
  `
},{ /*

;{"embeds": " 
  {newEmbed:
    {title:ganbgalbsblkgklbsbakgbakls}
    {description:$if[$round[$random[1;$math[$noMentionMessage**(1/3)];yes]]==1;you would win;you wouldnt win]}
    {color:#80ff80}}",
  "reply": {"messageReference": "$messageID"}
  }]

$if[$round[$random[1;$math[$noMentionMessage**(1/3)];yes]]==1;you would win;you wouldnt win]
*/
  name: "bal give",
  aliases: ['give'],
  code: `
  $botTyping
  $reply[$messageID;yes]



  $color[1;#80ff80]
  $title[1;
    Are you sure you want to send $$truncate[$numberSeparator[$noMentionMessage]] to $username[$mentioned[1]]? Yes/No
  ]
  
  $awaitMessages[$channelID;$authorID;
    10s;yes,y,no,n;yes,yes,no,no;{"embeds": "
      {newEmbed:
        {title:No reply, aborted transaction}
        {color:#80ff80}}",
      "reply": {"messageReference": "$messageID"}
    };
    {
      "amount": "$truncate[$noMentionMessage]",
      "user": "$mentioned[1]"
    }
  ]



  $onlyIf[$noMentionMessage!=0;{"embeds": " 
      {newEmbed:
        {title:Cannot give $0!}
        {color:#80ff80}}",
      "reply": {"messageReference": "$messageID"}
    }]
  $onlyIf[$checkContains[$noMentionMessage;-]==false;{"embeds":"
  {newEmbed:
    {title:Cannot give negetive amounts!}
    {color:#80ff80}}",
    "reply": {"messageReference": "$messageID"}
  }]
  $onlyIf[$noMentionMessage<=$getGlobalUserVar[Money;$authorID;Bank];{"embeds": " 
    {newEmbed:
      {title:You do not have that much to give!}
      {color:#80ff80}}",
    "reply": {"messageReference": "$messageID"}
  }]
  $onlyIf[$isNumber[$noMentionMessage]==true;{"embeds": "
    {newEmbed:
      {title:Input a valid number!}
      {color:#80ff80}}",
    "reply": {"messageReference": "$messageID"}
  }]
  $onlyIf[$mentioned[1]!=$authorID;{"embeds": "
    {newEmbed:
      {title:You cant give youself money! (this is pointless anyway)}
      {color:#80ff80}}",
    "reply": {"messageReference": "$messageID"}
  }]
  ` /*
  {"embeds": "EMBEDSTUF",
    "reply": {"messageReference": "$messageID"}
  }*/
},{
  name: "yes",
  type: "awaited",
  code: `
  $botTyping
  $reply[$messageID;yes]



  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$awaitData[user];Bank];$awaitData[amount]];$awaitData[user];Bank]
  $setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID;Bank];$awaitData[amount];];$authorID;Bank]



  $color[1;#80ff80]
  $title[1;
    Alrighty, you gave $$awaitData[amount] to $userTag[$awaitData[user]]!
  ]
  `
},{
  name: "no",
  type: "awaited",
  code: `
  $botTyping
  $reply[$messageID;yes]



  $color[1;#80ff80]
  $title[1;
    Alrighty, I aborted the transaction for ya :D
  ]
  `
},{
  name: "bal set",
  aliases: ['setbal'],
  code: `
  $botTyping
  $reply[$messageID;yes]
  $setGlobalUserVar[Money;$truncate[$noMentionMessage];$mentioned[1];Bank]



  $color[1;#80ff80]
  $title[1;
    You have set a user's balance!
  ]
  $description[1;
    The user $username[$mentioned[1]] now has $$numberSeparator[$truncate[$noMentionMessage]]
  ]



  $onlyForIDs[586225258269245538;883931596758081556;{"embeds": "
    {newEmbed:
      {title:You're not LightslicerGP (nor an admin), and I (the bot) can't make you him sooo..... sorry I guess}
      {color:#80ff80}}",
    "reply": {"messageReference": "$messageID"}
  }]
  $onlyIf[$isNumber[$noMentionMessage]==true;{"embeds": "
    {newEmbed:
      {title:Input a valid number!}
      {color:#80ff80}}",
    "reply": {"messageReference": "$messageID"}
  }]
  `
},{
  name: "bal reset",
  aliases: ['reset'],
  code: `
  $botTyping
  $reply[$messageID;yes]
  $resetGlobalUserVar[Money;Bank]



  $color[1;#80ff80]
  $title[1;
    You have reset $username[$mentioned[1]]'s money
  ]
  $description[1;
    $username[$mentioned[1]] orignally had $$numberSeparator[$getGlobalUserVar[Money;$mentioned[1];Bank]] 
  ]



  $onlyForIDs[586225258269245538;883931596758081556;{"embeds": "
    {newEmbed:
      {title:You're not LightslicerGP (nor an admin), and I (the bot) can't make you him sooo..... sorry I guess}
      {color:#80ff80}}",
    "reply": {"messageReference": "$messageID"}
  }]
  `
},{ 
  name: "daily",
  code: `
  $botTyping
  $reply[$messageID;yes]



  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$authorID;Bank];1000];$authorID;Bank]



  $color[1;#80ff80]
  $title[1;You have done the daily command!]
  $description[1;
    Now you have been paid $1,000 and have a total of $$numberSeparator[$sum[$getGlobalUserVar[Money;$authorID;Bank];1000]] in your balance
  ]



  $globalCooldown[24h;{"embeds": "
      {newEmbed:
        {title:Slow down!}
        {description:You have to wait %time% before doing the daily command again!}
        {color:#80ff80}}",
      "reply": {"messageReference": "$messageID"}
  }]
  `
},{
  name: "work",
  code: `
  $botTyping
  $reply[$messageID;yes]



  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$authorID;Bank];$random[7;121;no]];$authorID;Bank]



  $color[1;#80ff80]
  $title[1;
    You have done some work!
  ]
  $description[1;
    Now you have been paid $$numberSeparator[$random[7;121;no]]. Now you have a total of $$numberSeparator[$sum[$getGlobalUserVar[Money;$authorID;Bank];$random[7;121;no]]] in your balance
  ]



  $globalCooldown[30s;{"embeds": "
      {newEmbed:
        {title:Slow down!}
        {description:You have to wait %time% before doing the work command again!}
        {color:#80ff80}}",
      "reply": {"messageReference": "$messageID"}
  }]
  `
}]