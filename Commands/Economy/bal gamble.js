module.exports = [{//broken
    name: "bal gamble",
    aliases: ['gamble'],
    code: `
    $botTyping
    $reply[$messageID;yes]
    
    
    
    $color[#80ff80]
    $title[
      Gambleing...
    ]
    $description[
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
}]
/*

;{"embeds": " 
  {newEmbed:
    {title:ganbgalbsblkgklbsbakgbakls}
    {description:$if[$round[$random[1;$math[$noMentionMessage**(1/3)];yes]]==1;you would win;you wouldnt win]}
    {color:#80ff80}}",
  "reply": {"messageReference": "$messageID"}
  }]

$if[$round[$random[1;$math[$noMentionMessage**(1/3)];yes]]==1;you would win;you wouldnt win]
*/