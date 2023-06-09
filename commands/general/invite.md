---
description: Invite the bot to your own server
---

# #invite

## Usage

{% hint style="success" %}
\#invite
{% endhint %}

## Code

```oz
{
    name: "invite",
    code: `
    $clientTyping    
    $reply[$messageID;yes]



    $color[1;#80bfff]
    $title[1;Want to invite me to your own server? Click below!]
    $description[1;
[Invite me!](https://discord.com/api/oauth2/authorize?client_id=698733140939898957&permissions=8&scope=bot%20applications.commands)
[Support Server](https://discord.gg/3TGX6RA)
    ]
    `
}
```
