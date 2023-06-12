---
description: Calculate a math expression
---

# #calc

## Usage

{% hint style="success" %}
\#calc {expression}

* {expression} - required
{% endhint %}

## Code

```oz
  {
    name: "calc",
    code: `
      $clientTyping
      $reply[$messageID;yes]
  
  
  
      $color[1;#80bfff]
      $title[1;
          Here is your result:
      ]
      $description[1;
          $math[$replaceText[$noMentionMessage;x;*]]
      ]
  
  
  
      $onlyIf[$message!=;{"embeds":"
          {newEmbed:
          {title:Please include some expression to calculate!}
          {color:#80bfff}}",
          "reply": {"messageReference": "$messageID"}
      }]
      `,
  }
```
