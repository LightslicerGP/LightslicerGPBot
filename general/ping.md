---
description: Get the ping of the bot
---

# #ping

## Usage

{% hint style="success" %}
\#ping
{% endhint %}

## Code

```j
{
    name: "ping",
    code: `
    $botTyping
    $reply[$messageID;yes]


    
    $color[1;#80bfff]
    $title[1;
        Pong! $pingms
    ]
    `
}
```
