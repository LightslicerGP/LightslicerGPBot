---
description: Evaluate an AOIJS expression
---

# #eval

## Usage

{% hint style="success" %}
\#eval {AOIJS expression}

* {AOIJS expression} - required
{% endhint %}

## Code

```oz
  {
    name: "eval",
    code: `
      $clientTyping
      $reply[$messageID;yes]
  
  
  
      $color[#80bfff]
      $description[
          $eval[$message]
      ]
  
  
  
      $onlyIf[$authorID==586225258269245538||$authorID==883931596758081556;{"embeds": "
          {newEmbed: 
            {title:Insufficient permission}
            {description:You're not LightslicerGP (nor an admin), and I (the bot) can't make you him sooo..... sorry I guess}
            {color:#80bfff}}",
          "reply": {"messageReference": "$messageID"}
        }]
      `,
  }
```
