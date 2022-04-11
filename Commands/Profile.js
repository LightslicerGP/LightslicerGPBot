module.exports = [{
  name: "profile",
  code: `
  $botTyping
  $reply[$messageID;yes]



  $color[1;#ff8080]
  $description[1;
    Bio: $getGlobalUserVar[Bio;$mentioned[1]] or $getObjectProperty[Bio]
    Birthday: $getGlobalUserVar[Birthday;$mentioned[1]] or $getObjectProperty[Birithday.Month] $getObjectProperty[Birthday.Day]
    Interests: $getGlobalUserVar[Interests;$mentioned[1]] or $getObjectProperty[Interests]
    [YouTube]($getGlobalUserVar[Youtube;$mentioned[1]])
    [Site]($getGlobalUserVar[Site;$mentioned[1]])
  ]
  $createObject[$getGlobalUserVar[Profile]]
  `
},{
  name: "profile set",
  code: `
  $botTyping
  $reply[$messageID;yes]
  $color[1;#ff8080]
  $author[1;$username[$authorID];$authorAvatar]
  $description[1;
    You can set your
    -bio using \`#profile set bio {insert your bio here}\`
    -birthday \`#profile set birthday {insert your birtday here}\`
    -interests \`#profile set interests {insert your interests here}\`
    -youtube link \`#profile set youtube {insert your youtube link here}\`
    -site link \`#profile set site {insert your site link here}\`
  ]
  $footer[1;
    After doing one, do #profile to see it!
  ]
  $setGlobalUserVar[Bio;$noMentionMessage;$authorID]
  `
},{
  name: "profile set bio",
  code: `
  $botTyping
  $reply[$messageID;yes]
  $color[1;#ff8080]
  $author[1;$username[$authorID];$authorAvatar]
  $description[1;
    Your profile bio is now: $noMentionMessage
  ]
  $footer[1;
    Now do #profile to see if you like it or not!
  ]
  $setGlobalUserVar[Bio;$noMentionMessage;$authorID]
  `
},{
  name: "profile set birthday",
  code: `
  $botTyping
  $reply[$messageID;yes]
  $color[1;#ff8080]
  $author[1;$username[$authorID];$authorAvatar]
  $description[1;
    Your profile birthday is now: $noMentionMessage
  ]
  $footer[1;
    Now do #profile to see if its correct!
  ]
  $setGlobalUserVar[Birthday;$noMentionMessage;$authorID]
  `
},{
  name: "profile set interests",
  code: `
  $botTyping
  $reply[$messageID;yes]
  $color[1;#ff8080]
  $author[1;$username[$authorID];$authorAvatar]
  $description[1;
    Your profile interests is now: $noMentionMessage
  ]
  $footer[1;
    Now do #profile to see if its correct!
  ]
  $setGlobalUserVar[Interests;$noMentionMessage;$authorID]
  `
},{
  name: "profile set youtube",
  code: `
  $botTyping
  $reply[$messageID;yes]
  $color[1;#ff8080]
  $author[1;$username[$authorID];$authorAvatar]
  $description[1;
    $if[$isValidLink[$noMentionMessage]==true;
      Your profile youtube link is now: $noMentionMessage
      $setGlobalUserVar[Youtube;$noMentionMessage;$authorID];
      That is not a valid link! please try again
    ]
  ]
  `
/* update when $if v5 works with $description
  
$reply[$messageID;yes]
$if[$isValidLink[$noMentionMessage]==true;
  $color[1;#00ff00]
  $author[1;$username[$authorID];$authorAvatar]
  $description[1;
      Your profile youtube link is now: $noMentionMessage
  ]
  $footer[1;
      Now do #profile to see if its correct!
  ]
  $setGlobalUserVar[Youtube;$noMentionMessage;$authorID];
  $color[1;#00ff00]
  $author[1;$username[$authorID];$authorAvatar]
  $description[1;
      That is not a valid link! please try again
  ]
]

  {"embeds": "EMBEDSTUF",
    "reply": {"messageReference": "$messageID"}
  }
  
*/
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