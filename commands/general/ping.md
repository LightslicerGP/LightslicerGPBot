---
description: Get the ping of the bot
---

# #ping

## Usage

{% hint style="success" %}
\#ping
{% endhint %}

## Code

```oz
  {
    name: "ping",
    code: `
    $clientTyping
    $reply[$messageID;true]


    
    $color[#80bfff]
    $title[
        Pong! $pingms
    ]
    `,
  }
```
