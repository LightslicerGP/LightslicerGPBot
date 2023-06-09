module.exports = [
  {
    name: "help",
    code: `
    $clientTyping
    $reply[$messageID;yes]



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

            {field:#bot info:See all the information of the bot:yes}
            {field:*#bot restart:Restart the bot:yes}
            {field:#banned:List of banned people (and #bannedpeople ?):yes}
            {field:#calc [expression]:Solve a simple math problem:yes}
            {field:#date:Get today's exact date and time:yes}
            {field:*#eval [code]:Run code manually:yes}
            {field:#id [user id]:Convert a username into an id:yes}
            {field:#invite:An invite link to invite the bot to your server:yes}
            {field:(mention the bot):Gives the bot prefix, which is #:yes}
            {field:#person:Convert a user's username to an id, or id to username:yes}
            {field:#ping:Check the ping of the bot:yes}
            {field:#temp:All index based string functions for an embed:yes}
            {field:#test:Testing command, code will change so function and usage will not always be the same:yes}
            {field:#user [username]:Convert a username into an id:yes}
            {field:#version:See if im using the Aoijs version or Bdfd version:yes}

            {footer:[REQUIRED] #RIGHT_BRACKET#OPTIONAL#LEFT_BRACKET# *ADMIN ONLY}
        };
        {actionRow:
            {selectMenu:
                HelpMenu:
                Select Catagory:
                1:
                1:
                no:
                {selectMenuOptions:
                    General Commands:
                    General:
                    General commands that give information or edit settings:
                    no:
                    ⚙️
                }
                {selectMenuOptions:
                    Money Commands:
                    Money:
                    All money and economy related commands:
                    no:
                    💵
                }
                {selectMenuOptions:
                    Profile Commands:
                    Profile:
                    All personal profiles with their information:
                    no:
                    👤
                }
                {selectMenuOptions:
                    Fun Commands:
                    Fun:
                    All fun and random commands that some of which use some-random-api.ml!:
                    no:
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

            {field:#bal #RIGHT_BRACKET#user#LEFT_BRACKET#:Get a user's balance amount:yes}
            {field:#bal gamble [amount]:Gamble some money to win up to 3x the amount (coming soon!):yes}
            {field:#bal give [user] [amount]:Give a person some money:yes}
            {field:*#bal reset #RIGHT_BRACKET#user#LEFT_BRACKET#:Reset a person's money to $0:yes}
            {field:*#bal set #RIGHT_BRACKET#user#LEFT_BRACKET# [amount]:Set a person's money to any amount:yes}
            {field:#bal top:Check the top balance in the universe:yes}
            {field:#daily:Get your daily $1k:yes}
            {field:#work:Do some work and make some money:yes}

            {footer:[REQUIRED] #RIGHT_BRACKET#OPTIONAL#LEFT_BRACKET# *ADMIN ONLY}
        };
        {actionRow:
            {selectMenu:
                HelpMenu:
                Select Catagory:
                1:
                1:
                no:
                {selectMenuOptions:
                    General Commands:
                    General:
                    General commands that give information or edit settings:
                    no:
                    ⚙️
                }
                {selectMenuOptions:
                    Money Commands:
                    Money:
                    All money and economy related commands:
                    no:
                    💵
                }
                {selectMenuOptions:
                    Profile Commands:
                    Profile:
                    All personal profiles with their information:
                    no:
                    👤
                }
                {selectMenuOptions:
                    Fun Commands:
                    Fun:
                    All fun and random commands that some of which use some-random-api.ml!:
                    no:
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
    $interactionReply[
        $editMessage[$messageID;
            {newEmbed:
                {color:#ff8080}
                {title:Profile Commands}
                {description:All personal profiles with their information}

                {field:#profile #RIGHT_BRACKET#user#LEFT_BRACKET#:Check a persons personal profile:yes}
                {field:#profile search [subcommand] [value]:Check the amount of ppl with a certain Field (coming soon!):yes}
                {field:#profile set [subcommand] [value]:Edit your personal profile:yes}

                {footer:[REQUIRED] #RIGHT_BRACKET#OPTIONAL#LEFT_BRACKET# *ADMIN ONLY}
            }
        ;$channelID]
    ]
    $onlyIf[$interactionData[values[0]]==Profile;]
    `,
  },
  {
    name: "HelpMenu",
    type: "interaction",
    prototype: "selectMenu",
    code: `
    $interactionReply[
        $editMessage[$messageID;
            {newEmbed:
                {color:#ffff80}
                {title:Fun Commands}
                {description:All fun and random commands that some of which use some-random-api.ml!}

                {field:#animal [animal]:Get an image and fact of an animal of your choosing:yes}
                {field:#chat [text]:Talk to the bot personally:yes}
                {field:#coinflip:Flip a coin:yes}
                {field:#image [animal]:Get a random picture of an animal you choose!:yes}
                {field:#tweet [text]:Make a fake tweet image:yes}

                {footer:[REQUIRED] #RIGHT_BRACKET#OPTIONAL#LEFT_BRACKET# *ADMIN ONLY}
            }
        ;$channelID]
    ]
    $onlyIf[$interactionData[values[0]]==Fun;]
    `,
  },
];
