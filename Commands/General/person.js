module.exports = [
  {
    name: "person",
    code: `
      $clientTyping
      $reply[$messageID;true]



      $color[1;#80bfff]
      $title[1;
        This ID's Username is $userTag[$message]
      ]
    
    
    
      $onlyIf[$isNumber[$message]==true;{"embeds": "  
          {newEmbed: 
            {title:This Username's ID is $findUser[$message;false]}
            {color:#80bfff}}",
          "reply": {"messageReference": "$messageID"}
      }]
      `,
  },
];
