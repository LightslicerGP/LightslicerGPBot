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
      $reply[$messageID;true]
  
  
  
      $color[#80bfff]
      $title[Want to invite me to your own server? Click below!]
      $description[
  [Invite me!](https://discord.com/api/oauth2/authorize?client_id=698733140939898957&permissions=8&scope=bot%20applications.commands)
  [Support Server](https://discord.gg/3TGX6RA)
      ]
      `,
  }
```
