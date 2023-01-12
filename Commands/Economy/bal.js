module.exports = [{//when doing the cooldown it shows {"embeds":"                               my id is 586225258269245538 :D
    name: "bal",
    code: `
    $botTyping
    $reply[$messageID;yes]
  
  
  
    $color[#80ff80]
    $title[
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
}]