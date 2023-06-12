---
description: Future me, use this as a template for all the commands
---

# Template

## Usage

{% hint style="success" %}
\#template {paramater 1} \[paramater 2]

* {paramater 1} - required
* \[paramater 2] - optional
{% endhint %}

## Code

```oz
{
    name: "template",
    code: `
    $clientTyping
    $reply[$messageID;yes]



    $color[1;#80bfff]
    $title[1;
        Hey, insert the code here! 6/11/23
    ]
    `
}
```
