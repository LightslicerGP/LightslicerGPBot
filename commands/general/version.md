---
description: Gives which version of the bot you are using
---

# #version

## Usage

{% hint style="success" %}
\#version
{% endhint %}

## Code

```oz
  {
    name: "version",
    code: `
      $clientTyping
      $reply[$messageID;true]
  
  
  
      $color[#80bfff]
      $title[
          This version of the bot uses the AOI api to write code easier. My cousin reccomended this to me 2/7/22, so lets see if its easier than normal node.js!
      ]
      `,
  }
```
