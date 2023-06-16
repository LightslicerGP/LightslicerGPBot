---
description: Gives all the commands and their usages
---

# #help

## Usage

{% hint style="success" %}
\#help
{% endhint %}

## Code

```oz
  {
    name: "help",
    code: `
        $clientTyping
        $reply[$messageID;true]



        $color[#80bfff]
        $title[Select a catagory to get help and commands!]
        $addSelectMenu[1;HelpMenu;Select Catagory;1;1;false;General Commands:General commands that give information or edit settings:General:false:⚙️;Money Commands:All money and economy related commands:Money:false:💵;Profile Commands:All personal profiles with their information:Profile:false:👤;Fun Commands:All fun and random commands that some of which use some-random-api.ml!:Fun:false:🎮]
        `,
  },
  {
    name: "HelpMenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `
        $interactionUpdate[;
            {newEmbed:
                {color:#80bfff}
                {title:General Commands}
                {description:General commands that give information or edit settings, some command might not be on here due to them being used only temporarily and will either be changed or deleted}

                {field:#banned:List of banned people (and #bannedpeople ?):true}
                {field:#bot info:See all the information of the bot:true}
                {field:*#bot restart:Restart the bot:true}
                {field:#calc [expression]:Solve a simple math problem:true}
                {field:#date:Get today's exact date and time:true}
                {field:*#eval [code]:Run code manually:true}
                {field:#help:Get this help menu:true}
                {field:#invite:An invite link to invite the bot to your server:true}
                {field:#person [id or username]:Convert the id into a username, or username to id (coming soon!):true}
                {field:(mention the bot):Gives the bot prefix, which is #:true}
                {field:#ping:Check the ping of the bot:true}
                {field:#temp:All index based string functions for an embed:true}
                {field:#test:Testing command, code will change so function and usage will not always be the same:true}
                {field:#user [username]:Convert a username into an id:true}
                {field:#id [user id]:Convert a username into an id:true}
                {field:#version:See if im using the Aoijs version or Bdfd version:true}

                {footer:[REQUIRED] #RIGHT_BRACKET#OPTIONAL#LEFT_BRACKET# *ADMIN ONLY}
            };
            {actionRow:
                {selectMenu:
                    HelpMenu:
                    Select Catagory:
                    1:
                    1:
                    false:
                    {selectMenuOptions:
                        General Commands:
                        General:
                        General commands that give information or edit settings:
                        true:
                        ⚙️
                    }
                    {selectMenuOptions:
                        Money Commands:
                        Money:
                        All money and economy related commands:
                        false:
                        💵
                    }
                    {selectMenuOptions:
                        Profile Commands:
                        Profile:
                        All personal profiles with their information:
                        false:
                        👤
                    }
                    {selectMenuOptions:
                        Fun Commands:
                        Fun:
                        All fun and random commands that some of which use some-random-api.ml!:
                        false:
                        🎮
                    }
                }
            }
        ]
        $onlyIf[$interactionData[values[0]]==General;]
        `,
  },
  {
    name: "HelpMenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `
        $interactionUpdate[;
            {newEmbed:
                {color:#80ff80}
                {title:Money Commands}
                {description:All money and economy related commands}

                {field:#bal gamble [amount]:Gamble some money to win up to 3x the amount (coming soon!):true}
                {field:#bal give [user] [amount]:Give a person some money:true}
                {field:*#bal reset #RIGHT_BRACKET#user#LEFT_BRACKET#:Reset a person's money to $0:true}
                {field:*#bal set #RIGHT_BRACKET#user#LEFT_BRACKET# [amount]:Set a person's money to any amount:true}
                {field:#bal top:Check the top balance in the universe:true}
                {field:#bal #RIGHT_BRACKET#user#LEFT_BRACKET#:Get a user's balance amount:true}
                {field:#daily:Get your daily $1k:true}
                {field:#work:Do some work and make some money:true}

                {footer:[REQUIRED] #RIGHT_BRACKET#OPTIONAL#LEFT_BRACKET# *ADMIN ONLY}
            };
            {actionRow:
                {selectMenu:
                    HelpMenu:
                    Select Catagory:
                    1:
                    1:
                    false:
                    {selectMenuOptions:
                        General Commands:
                        General:
                        General commands that give information or edit settings:
                        false:
                        ⚙️
                    }
                    {selectMenuOptions:
                        Money Commands:
                        Money:
                        All money and economy related commands:
                        true:
                        💵
                    }
                    {selectMenuOptions:
                        Profile Commands:
                        Profile:
                        All personal profiles with their information:
                        false:
                        👤
                    }
                    {selectMenuOptions:
                        Fun Commands:
                        Fun:
                        All fun and random commands that some of which use some-random-api.ml!:
                        false:
                        🎮
                    }
                }
            }
        ]
        $onlyIf[$interactionData[values[0]]==Money;]
        `,
  },
  {
    name: "HelpMenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `
        $interactionUpdate[;
            {newEmbed:
                {color:#ff8080}
                {title:Profile Commands}
                {description:All personal profiles with their information}

                {field:#profile #RIGHT_BRACKET#user#LEFT_BRACKET#:Check a persons personal profile:true}
                {field:#profile search [subcommand] [value]:Check the amount of ppl with a certain Field (coming soon!):true}
                {field:#profile set [subcommand] [value]:Edit your personal profile:true}

                {footer:[REQUIRED] #RIGHT_BRACKET#OPTIONAL#LEFT_BRACKET# *ADMIN ONLY}
            };
            {actionRow:
                {selectMenu:
                    HelpMenu:
                    Select Catagory:
                    1:
                    1:
                    false:
                    {selectMenuOptions:
                        General Commands:
                        General:
                        General commands that give information or edit settings:
                        false:
                        ⚙️
                    }
                    {selectMenuOptions:
                        Money Commands:
                        Money:
                        All money and economy related commands:
                        false:
                        💵
                    }
                    {selectMenuOptions:
                        Profile Commands:
                        Profile:
                        All personal profiles with their information:
                        true:
                        👤
                    }
                    {selectMenuOptions:
                        Fun Commands:
                        Fun:
                        All fun and random commands that some of which use some-random-api.ml!:
                        false:
                        🎮
                    }
                }
            }
        ]
        $onlyIf[$interactionData[values[0]]==Profile;]
        `,
  },
  {
    name: "HelpMenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `
        $interactionUpdate[;
            {newEmbed:
                {color:#ffff80}
                {title:Fun Commands}
                {description:All fun and random commands that some of which use some-random-api.ml!}

                {field:#animal [animal]:Get an image and fact of an animal of your choosing:true}
                {field:#chat [text]:Talk to the bot personally:true}
                {field:#coinflip:Flip a coin:true}
                {field:#image [animal]:Get a random picture of an animal you choose!:true}
                {field:#tweet [text]:Make a fake tweet image:true}

                {footer:[REQUIRED] #RIGHT_BRACKET#OPTIONAL#LEFT_BRACKET# *ADMIN ONLY}
            };
            {actionRow:
                {selectMenu:
                    HelpMenu:
                    Select Catagory:
                    1:
                    1:
                    false:
                    {selectMenuOptions:
                        General Commands:
                        General:
                        General commands that give information or edit settings:
                        false:
                        ⚙️
                    }
                    {selectMenuOptions:
                        Money Commands:
                        Money:
                        All money and economy related commands:
                        false:
                        💵
                    }
                    {selectMenuOptions:
                        Profile Commands:
                        Profile:
                        All personal profiles with their information:
                        false:
                        👤
                    }
                    {selectMenuOptions:
                        Fun Commands:
                        Fun:
                        All fun and random commands that some of which use some-random-api.ml!:
                        true:
                        🎮
                    }
                }
            }
        ]
        $onlyIf[$interactionData[values[0]]==Fun;]
        `,
  }
```
