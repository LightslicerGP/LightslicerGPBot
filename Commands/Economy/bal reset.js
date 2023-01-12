module.exports = [{
    name: "bal reset",
    aliases: ['balreset'],
    code: `
    $botTyping
    $reply[$messageID;yes]
  
  
  
    $setGlobalUserVar[Money;;$mentioned[1];Bank]
  
  
  
    $color[#80ff80]
    $title[
      You have reset $username[$mentioned[1]]'s money
    ]
    $description[
      $username[$mentioned[1]] orignally had $$numberSeparator[$getGlobalUserVar[Money;$mentioned[1];Bank]] 
    ]
  
  
  
    $onlyForIDs[586225258269245538;883931596758081556;{"embeds": "
      {newEmbed:
        {title:You're not LightslicerGP (nor an admin), and I (the bot) can't make you him sooo..... sorry I guess}
        {color:#80ff80}}",
      "reply": {"messageReference": "$messageID"}
    }]
    $onlyIf[$mentionedUsersCount<=1;{"embeds": "
      {newEmbed:
        {title:Only mention one person!}
        {color:#80ff80}}",
      "reply": {"messageReference": "$messageID"}
    }]
    `
}]