---
description: Get the global money leaderboard
---

# #bal top

## Usage

{% hint style="success" %}
\#bal top
{% endhint %}

## Code

```oz
  {
    name: "bal top",
    aliases: ["baltop"],
    code: `
    $clientTyping
    $reply[$messageID;true]
  
  
  
    $color[#80ff80]
    $title[
    Global Leaderboard
    ]
    $description[$textSplitMap[MoneyLeaderboard]]
  
  
  
    $textSplit[$globalUserLeaderboard[Money;asc;{top}§{tag}§{value};15;1;Bank];\n]
    `,
  },
  {
    name: "MoneyLeaderboard",
    type: "awaited",
    code: `
    $splitText[1]: $splitText[2] - $$numberSeparator[$splitText[3]]
    $textSplit[$message[1];§]
    `,
  }
```
