---
description: Convert a user's ID to Username, or Username to ID
---

# #person

## Usage

{% hint style="success" %}
\#person \[Username or user ID]

* \[Username or user ID] - required
{% endhint %}

## Code

```oz
  {
    name: "person",
    code: `
      $clientTyping
      $reply[$messageID;true]



      $color[1;#80bfff]
      $title[1;
        This ID's Username is $userTag[$message]
      ]
    
    
    
      $onlyIf[$isNumber[$message]==true;{"embeds": "  
          {newEmbed: 
            {title:This Username's ID is $findUser[$message;false]}
            {color:#80bfff}}",
          "reply": {"messageReference": "$messageID"}
      }]
      `,
  }
```
