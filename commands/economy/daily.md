---
description: Collect your daily $1,000
---

# #daily

## Usage

{% hint style="success" %}
\#daily
{% endhint %}

## Code

```oz
  {
    name: "daily",
    code: `
  $clientTyping
  $reply[$messageID;true]



  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$authorID;Bank];1000];$authorID;Bank]



  $color[#80ff80]
  $title[You have done the daily command!]
  $description[
    Now you have been paid $1,000 and have a total of $$numberSeparator[$sum[$getGlobalUserVar[Money;$authorID;Bank];1000]] in your balance
  ]



  $globalCooldown[24h;{"embeds": "
      {newEmbed:
        {title:Slow down!}
        {description:You have to wait %time% before doing the daily command again!}
        {color:#80ff80}}",
      "reply": {"messageReference": "$messageID"}
  }]
  `,
  }
```
