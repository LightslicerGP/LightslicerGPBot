---
description: Gives a list of banned people on the server
---

# #banned

## Usage

{% hint style="success" %}
\#banned
{% endhint %}

## Code

```oz
  {
    //Banned reason doesnt work
    name: "banned",
    aliases: [`banlist`],
    code: `
      $clientTyping
      $reply[$messageID;yes]
  
  
  
      $usersBanned[$guildID;yes;id;\n]
      $getBanReason[$guildID;$usersBanned[$guildID;yes;id];\n]
  
      `,
  },
  {
    //make wiki when you can $createFile[$textSplitMap[bannedpeople];banned_usernames.txt]    $createFile[$usersBanned[$guildID;yes;id;\n];banned_ids.txt] $textSplit[$usersBanned[$guildID;yes;id;\n], for $getBanReason[$guildID;$usersBanned[$guildID;yes;id]];\n]
    name: "bannedpeople",
    type: "awaited",
    code: `
    $userTag[$message[1]]
    `,
  }
```
