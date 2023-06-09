module.exports = [
  {
    //doesnt work, the "if" statement goes from the inside out so it fails when you do the second option so use "onlyif"?
    name: "person",
    code: `
      $clientTyping
      $reply[$messageID;yes]
  
  
  
      $color[1;#80bfff]
      $title[1;
          This user is $userTag[$noMentionMessage]!
      ]
  
      $onlyIf[$isNumber[$noMentionMessage]==true;
          $title[1;
              This user's ID is $findUser[$noMentionMessage;no]!
          ]
      ]
      `,
  },
];
