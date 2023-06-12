---
description: Returns the current date
---

# #date

## Usage

{% hint style="success" %}
\#date
{% endhint %}

## Code

```oz
  {
    name: "date",
    code: `
      $clientTyping
      $reply[$messageID;yes]
  
  
  
      $color[#80bfff]
      $title[
          Here is the date and time in Eastern Daylight Time (EDT)
      ]
      $description[
          $parseDate[$math[$dateStamp-14400000];date]
      ]
      `,
  }
```
