---
description: Get information about the bot
---

# ⚙ #bot info

Usage:

```
#bot info
```

## Code

for future me, these are the best types of syntax. choose one lol

* brainf-ck
* wolfram
* haskell
* haxe
* j
* log file
* oz
* smarty
* verilog

```brainfuck
{
    name:"bot info",
    aliases: ['info'],
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[1;#80bfff]
    $title[1;Bot Info]
    $description[1;
        Here is all the information you could possibly get from this, enjoy!
    ]



    $image[1;$userAvatar[$clientID]]
    $addField[1;Bot Avatar; :arrow_down: Here you go!;yes]
    $addField[1;Node version:;$nodeVersion;yes]
    $addField[1;Full RAM Usage;$ram[rss];yes]
    $addField[1;Full CPU Usage;$cpu[os];yes]
    $addField[1;Bot RAM Usage;$ram[heapUsed];yes]
    $addField[1;Bot CPU Usage;$cpu[process];yes]
    $addField[1;Bot Name;$username[$clientID];yes]
    $addField[1;Bot Message Received Ping;$messagePing;yes]
    $addField[1;Bot Database Ping;$dbPingms;yes]
    $addField[1;Bot Ping;$pingms;yes]
    $addField[1;Bot Uptime;$uptime;yes]
    $addField[1;Commands Count;$commandsCount;yes]
    $addField[1;Server Count;$serverCount;yes]
    $addField[1;User Count;$allMembersCount;yes]
    $addField[1;Bot Creation Date/Time;$creationDate[698733140939898957;date] (yea I know, 3 am lmao);yes]
    $addField[1;Bot Owner;[$username[$botOwnerID]](https://youtube.com/c/LightslicerGP/);yes]
    `
}
```
