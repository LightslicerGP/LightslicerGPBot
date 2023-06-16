---
description: Get the raw json format of certain variables
---

# #rawjson

## Usage

{% hint style="success" %}
\#rawjson
{% endhint %}

## Code

```oz
  {
    name: "rawjson",
    code: `
    $clientTyping
    $reply[$messageID;true]



    \`\`\`json
$get[profilejson]\`\`\`
    $let[profilejson;$getObject$createObject[$getGlobalUserVar[Profile;$mentioned[1;true];People]]]
    `,
  }
```
