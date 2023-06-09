module.exports = [
  {
    //combine this with the next one
    name: "user",
    code: `
      $clientTyping
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
      `,
  },
  {
    name: "id",
    code: `
      $clientTyping
      $reply[$messageID;yes]
  
  
  
      $color[#80bfff]
      $title[
          This user's ID is $findUser[$noMentionMessage;no]!
      ]
      `,
  },
];
