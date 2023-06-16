---
description: Get information about the bot
---

# #bot info

## Usage:

{% hint style="success" %}
\#bot info
{% endhint %}

## Code

```oz
  {
    name: "bot info",
    aliases: ["info"],
    code: `
      $clientTyping
      $reply[$messageID;true]
  
  
  
      $color[#80bfff]
      $title[Bot Info]
      $description[
          Here is all the inormation you could possibly get from this, enjoy!
      ]
  
  
  
      $image[$userAvatar[$clientID]]
      $addField[Bot Avatar; :arrow_down: Here you go!;true]
      $addField[Node version:;$nodeVersion;true]
      $addField[Full RAM Usage;$ram[rss];true]
      $addField[Full CPU Usage;$cpu[os];true]
      $addField[Bot RAM Usage;$ram[heapUsed];true]
      $addField[Bot CPU Usage;$cpu[process];true]
      $addField[Bot Name;$username[$clientID];true]
      $addField[Bot Message Received Ping;$messagePing;true]
      $addField[Bot Database Ping;$dbPingms;true]
      $addField[Bot Ping;$pingms;true]
      $addField[Bot Uptime;$uptime;true]
      $addField[Commands Count;$commandsCount;true]
      $addField[Server Count;$serverCount;true]
      $addField[User Count;$allMembersCount;true]
      $addField[Bot Creation Date/Time;$creationDate[698733140939898957;date] (yea I know, 3 am lmao);true]
      $addField[Bot Owner;[$username[$botOwnerID]](https://youtube.com/c/LightslicerGP/);true]
      `,
  }
```
