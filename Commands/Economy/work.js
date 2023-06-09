module.exports = [
  //found it was fixed on my birthday 2023! what a nice present :D
  {
    name: "work",
    code: `
  $clientTyping
  $reply[$messageID;yes]



  $color[#80ff80]
  $title[
    You have done some work!
  ]
  $description[Now you have been paid $$numberSeparator[$random[7;121;no]]. Now you have a total of $$numberSeparator[$getGlobalUserVar[Money;$authorID;Bank]] in your balance]



  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$authorID;Bank];$random[7;121;no]];$authorID;Bank]



  $globalCooldown[2s;{"embeds": "
      {newEmbed:
        {title:Slow down!}
        {description:You have to wait %time% before doing the work command again!}
        {color:#80ff80}}",
      "reply": {"messageReference": "$messageID"}
  }]
  `,
  },
];

/*
$clientTyping
$reply[$messageID;yes]



$color[#80ff80]
$title[
  You have done some work!
]
$description[
  Now you have been paid $$numberSeparator[$random[7;121;no]]. Now you have a total of $$numberSeparator[$getGlobalUserVar[Money;$authorID;Bank]] in your balance.
]



$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$authorID;Bank];$random[7;121;no]];$authorID;Bank]



$globalCooldown[30s;{"embeds": "
    {newEmbed:
      {title:Slow down!}
      {description:You have to wait %time% before doing the work command again!}
      {color:#80ff80}}",
    "reply": {"messageReference": "$messageID"}
}]
*/
