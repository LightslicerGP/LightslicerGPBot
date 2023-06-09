module.exports = [
  {
    name: "profile",
    code: `
    $clientTyping
    $reply[$messageID;yes]
  
  
  
    $color[#ff8080]
    $description[
  **Bio:** $getObjectProperty[Bio]
  **Birthday:** $getObjectProperty[Birthday.Month] $ordinal[$getObjectProperty[Birthday.Day]]
  **Interests:** $getObjectProperty[Interests]
  [YouTube]($getGlobalUserVar[Youtube;$mentioned[1]]) or [YouTubeJson]($getObjectProperty[Youtube])
  [Site]($getGlobalUserVar[Site;$mentioned[1]]) or [SiteJson]($getObjectProperty[Site])
    ]
  
  
  
    $createObject[$getGlobalUserVar[Profile;$mentioned[1];People]
    `,
  },
];
