module.exports = [{
    name: "bal set",
        aliases: ['setbal'],
            code: `
    $botTyping
    $reply[$messageID;yes]
    $setGlobalUserVar[Money;$truncate[$noMentionMessage];$mentioned[1];Bank]
  
  
  
    $color[#80ff80]
    $title[
      You have set a user's balance!
    ]
    $description[
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
}]