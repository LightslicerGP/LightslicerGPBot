module.exports = [
  {
    //disable this its probs useless
    name: "bot restart",
    code: `
      $clientTyping
      $reply[$messageID;true]
  
  
  
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
      `,
  },
];
