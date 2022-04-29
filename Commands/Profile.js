module.exports = [{
  name: "profile",
  code: `
  $botTyping
  $reply[$messageID;yes]



  $color[1;#ff8080]
  $description[1;
**Bio:** $getObjectProperty[Bio]
**Birthday:** $getObjectProperty[Birthday.Month] $ordinal[$getObjectProperty[Birthday.Day]]
**Interests:** $getObjectProperty[Interests]
[YouTube]($getGlobalUserVar[Youtube;$mentioned[1]]) or [YouTubeJson]($getObjectProperty[Youtube])
[Site]($getGlobalUserVar[Site;$mentioned[1]]) or [SiteJson]($getObjectProperty[Site])
  ]



  $createObject[$getGlobalUserVar[Profile;$mentioned[1];People]
  `
},{
  name: "profile set",
  code: `
  $botTyping
  $reply[$messageID;yes]



  $color[1;#ff8080]
  $description[1;
    You can set your
    -bio using \`#profile set bio {bio}\`
    -birthday \`#profile set birthday {month} {day}\`
    -interests \`#profile set interests {interests}\`
    -youtube link \`#profile set youtube {Youtube link}\`
    -site link \`#profile set site {site link}\`
  ]
  `
},{
  name: "profile set bio",
  code: `
  $botTyping
  $reply[$messageID;yes]



  $setGlobalUserVar[Profile;$getObject;$authorID]
  $addObjectProperty[Bio;$message]



  $color[1;#ff8080]
  $description[1;
    Your profile bio is now: $message
  ]
  $footer[1;
    Before it was: $getObjectProperty[Bio]
  ]



  $createObject[$getGlobalUserVar[Profile;$authorID;People]]
  `
},{
  name: "profile set birthday",
  code: `
  $botTyping
  $reply[$messageID;yes]



  $setGlobalUserVar[Profile;$getObject;$authorID;People]
  $addObjectProperty[Birthday;
    {
      "Day" : $message[2],
      "Month" : "$toLocaleUppercase[$message[1]]"
    }]



  $color[1;#ff8080]
  $description[1;
    Your profile birthday is now: $toLocaleUppercase[$message[1]] $ordinal[$message[2]]
  ]
  $footer[1;
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
  `
},{
  name: "profile set interests",
  code: `
  $botTyping
  $reply[$messageID;yes]



  $setGlobalUserVar[Profile;$getObject;$authorID;People]
  $addObjectProperty[Interests;$message]



  $color[1;#ff8080]
  $description[1;
    Your profile interests is now: $message
  ]
  $footer[1;
    Before it was: $getObjectProperty[Interests]
  ]



  $createObject[$getGlobalUserVar[Profile;$authorID;People]]



  $onlyIf[$isValidLink[$message]==false;{"embeds": "
    {newEmbed: 
      {title:link moment}
      {color:#ff8080}}",
    "reply": {"messageReference": "$messageID"}
  }]
  `
},{
  name: "profile set youtube",
  code: `
  $botTyping
  $reply[$messageID;yes]



  $setGlobalUserVar[Profile;$getObject;$authorID]
  $addObjectProperty[Bio;$message]



  $color[1;#ff8080]
  $description[1;
    Your profile bio is now: $message
  ]
  $footer[1;
    Before it was: $getObjectProperty[Bio]
  ]



  $createObject[$getGlobalUserVar[Profile;$authorID;People]]
  `
},{
  name: "profile set site",
  code: `
  $botTyping
  $reply[$messageID;yes]
  $color[1;#ff8080]
  $if[$isValidLink[$noMentionMessage]==true;
    Your profile site link is now: $noMentionMessage
    $setGlobalUserVar[Site;$noMentionMessage;$authorID];
    That is not a valid link! please try again
  ]
  `
}]