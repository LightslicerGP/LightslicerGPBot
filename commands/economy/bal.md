---
description: View a user's balance
---

# #bal

## Usage

{% hint style="success" %}
\#bal {user}

* {user} - optional, default is user executing command
{% endhint %}

## Code

```oz
  {
    name: "bal",
    code: `
    $clientTyping
    $reply[$messageID;true]
  
  
  
    $color[#80ff80]
    $title[
      $username[$mentioned[1]] has $$numberSeparator[$getGlobalUserVar[Money;$mentioned[1];Bank]]
    ]
  
  
  
    $globalCooldown[5s;{"embeds":"
      {newEmbed:
        {title:Slow down!}
        {description:You have to wait %time% before doing this command again!}
        {color:#80ff80}}",
      "reply": {"messageReference": "$messageID"}
    }]
    `,
  }
```
