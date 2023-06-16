module.exports = [
  {
    name: "bal give",
    aliases: ["give"],
    code: `
    $clientTyping
    $reply[$messageID;true]
  
  
  
    $color[#80ff80]
    $title[
      Are you sure you want to send $$numberSeparator[$truncate[$noMentionMessage]] to $username[$mentioned[1]]? Yes/No
    ]
    
    $awaitMessages[$channelID;$authorID;10s;yes,y,no,n;yes,yes,no,no;{"embeds": "
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
    `,
  },
  {
    name: "yes",
    type: "awaited",
    code: `
    $clientTyping
    $reply[$messageID;true]
  
  
  
    $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$awaitData[user];Bank];$awaitData[amount]];$awaitData[user];Bank]
    $setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID;Bank];$awaitData[amount];];$authorID;Bank]
  
  
  
    $color[#80ff80]
    $title[
      Alrighty, you gave $$awaitData[amount] to $userTag[$awaitData[user]]!
    ]
    `,
  },
  {
    name: "no",
    type: "awaited",
    code: `
    $clientTyping
    $reply[$messageID;true]
  
  
  
    $color[#80ff80]
    $title[
      Alrighty, I aborted the transaction for ya :D
    ]
    `,
  },
];
