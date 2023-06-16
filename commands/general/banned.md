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
    name: "banned",
    aliases: [`banlist`],
    code: `
      $clientTyping
      $reply[$messageID;true]
  
  
  
      $color[#80bfff]
      $title[Banned Users]
      $description[
        $textSplitMap[bannedpeople]
      ]

      $createFile[$usersBanned[$guildID;true;id;\n];banned_ids.txt]
      $textSplit[$usersBanned[$guildID;true;id;§];§]
      `,
  },
  {
    name: "bannedpeople",
    type: "awaited",
    code: `
    $userTag[$message[1]] \`($message[1])\` - $getBanReason[$guildID;$message[1]]
    `,
  }
```
