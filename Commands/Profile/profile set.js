module.exports = [
  {
    name: "profile set",
    code: `
  $clientTyping
  $reply[$messageID;yes]



  $color[#ff8080]
  $description[
    You can set your
    -bio using \`#profile set bio {bio}\`
    -birthday \`#profile set birthday {month} {day}\`
    -interests \`#profile set interests {interests}\`
    -youtube link \`#profile set youtube {Youtube link}\`
    -site link \`#profile set site {site link}\`
  ]
  `,
  },
  {
    name: "profile set bio",
    code: `
  $clientTyping
  $reply[$messageID;yes]



  $createObject[$getGlobalUserVar[Profile;$authorID;People]]



  $color[#ff8080]
  $description[
    Your profile bio is now: $message
  ]
  $footer[
    Before it was: $getObjectProperty[Bio]
  ]



  $addObjectProperty[Bio;$message]
  $setGlobalUserVar[Profile;$getObject;$authorID;People]
  `,
  },
  {
    name: "profile set birthday",
    code: `
  $clientTyping
  $reply[$messageID;yes]



  $addObjectProperty[Birthday;
    {
      "Day" : $message[2],
      "Month" : "$toLocaleUppercase[$message[1]]"
    }]
    $setGlobalUserVar[Profile;$getObject;$authorID;People]



  $color[#ff8080]
  $description[
    Your profile birthday is now: $toLocaleUppercase[$message[1]] $ordinal[$message[2]]
  ]
  $footer[
    Before it was: $getObjectProperty[Birthday.Month] $ordinal[$getObjectProperty[Birthday.Day]]
  ]


  
  $createObject[$getGlobalUserVar[Profile;$authorID;People]]



  $onlyIf[$checkContains[$toLocaleUppercase[$message[1]];January;February;March;April;May;June;July;August;September;October;November;December]==true;{"embeds": "
    {newEmbed: 
      {title:Please put a valid month!}
      {color:#ff8080}}",
    "reply": {"messageReference": "$messageID"}
  }]
  $onlyIf[$isNumber[$message[2]]==true;{"embeds": "
    {newEmbed: 
      {title:Please put a valid day}
      {color:#ff8080}}",
    "reply": {"messageReference": "$messageID"}
  }]
  `,
  },
  {
    name: "profile set interests",
    code: `
  $clientTyping
  $reply[$messageID;yes]



  $setGlobalUserVar[Profile;$getObject;$authorID;People]
  $addObjectProperty[Interests;$message]



  $color[#ff8080]
  $description[
    Your profile interests is now: $message
  ]
  $footer[
    Before it was: $getObjectProperty[Interests]
  ]



  $createObject[$getGlobalUserVar[Profile;$authorID;People]]



  $onlyIf[$isValidLink[$message]==false;{"embeds": "
    {newEmbed: 
      {title:link moment}
      {color:#ff8080}}",
    "reply": {"messageReference": "$messageID"}
  }]
  `,
  },
  {
    name: "profile set youtube",
    code: `
  $clientTyping
  $reply[$messageID;yes]



  $setGlobalUserVar[Profile;$getObject;$authorID]
  $addObjectProperty[Bio;$message]



  $color[#ff8080]
  $description[
    Your profile bio is now: $message
  ]
  $footer[
    Before it was: $getObjectProperty[Bio]
  ]



  $createObject[$getGlobalUserVar[Profile;$authorID;People]]
  `,
  },
  {
    name: "profile set site",
    code: `
  $clientTyping
  $reply[$messageID;yes]
  $color[#ff8080]
  $if[$isValidLink[$noMentionMessage]==true;
    Your profile site link is now: $noMentionMessage
    $setGlobalUserVar[Site;$noMentionMessage;$authorID];
    That is not a valid link! please try again
  ]
  `,
  },
];
