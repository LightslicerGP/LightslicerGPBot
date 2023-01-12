const aoijs = require("aoi.js")
const { token } = require(`./config.json`)

const bot = new aoijs.AoiClient({
    token: token,
    prefix: "#",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    cache: false,
    respondOnEdit: {
        command: false,
        alwaysExecute: false,
        nonPrefixed: false,
        timeLimit: 60000
    },
    suppressAllErrors: false,
    autoUpdate: true,
    mobilePlatform: false,
    database: {
        db: require("dbdjs.db"),
        type: "dbdjs.db",
        path: "./database/",
        tables: ["main", "Bank", "People"],
        promisify: true
    }
})

new aoijs.LoadCommands(bot).load(bot.cmd, './Commands/', false)

bot.onMessage({
    guildOnly: false
})

bot.onInteractionCreate() // Allows to create slash commands
//bot.onJoined() // Allows to log users joining servers
//bot.onLeave() // Allows to log users leaving servers
//bot.onBanAdd() // Allows to log user bans from servers
//bot.onBanRemove() // Allows to log users being unbanned from servers

/* bot.deletedCommand({
    channel: "$channelID[$message]",
    code: `
    $botTyping


    $description[$username's message was deleted that said $message]
    `
})// this pings if you delete a message with @everyone or a person on it  */

bot.onMessageDelete()

bot.command({
    name: "test",
    description: "test command",
    usage: ["#test", "#test {text probably}"],
    category: "Developer Command",
    code: `
    $botTyping
    $reply[$messageID;yes]
    
    Here:
    $getGlobalUserVar[Profile;$authorID;People]
    `//https://discord.com/channels/773352845738115102/1002206443979673731/1013860375348924476
    // $writeFile[temp.txt;this is inside the file inside the host] $createFile[this is inside the file in the message;temp.txt]
}, {// 
    name: "json",
    code: `
    $botTyping
    $reply[$messageID;yes]



    \`\`\`json
$getObject\`\`\`
        $createObject[$getGlobalUserVar[Profile]]
    `
})

bot.variables({
    Bio: `(insert bio here)`,
    Interests: `(insert interests here)`,
    Birthday: `(insert birthday here)`,
    Youtube: `https://example.com/`,
    Site: `https://example.com/`,
    TempJson: `
        {
            "name": "insertnamehere",
            "friends": [
                "jack",
                "tom"
            ],
            "isalive": true,
            "color": "gold",
            "health": 100,
            "itemcount": {
                "pear": 1,
                "car": 1
            }
        }
    `,
    ItemCount: `
        {
            "phone": 2,
            "car": 100
        }
    `
}, 'main'
)

bot.variables({
    Profile: `
       {
           "Bio": "(insert bio here)",
           "Birthday": {
               "Day": 1,
               "Month": "January"
           },
           "Interests": "(insert interests here)",
           "Youtube": "https://example.com/",
           "Site": "https://example.com/"
       }
   `
}, 'People'
)

bot.variables({
    Money: 0,
}, 'Bank'
)

bot.readyCommand({
    channel: "",
    code: `
    $log[Ready on $userTag[$clientID] - $parseDate[$math[$dateStamp-18000000];date]]
    `
})//18000000 = winter, 1400000 = summer

bot.status({
    status: "online", // options: online, idle, dnd, invisible
    type: "COMPETING", // options: WATCHING, PLAYING, LISTENING, COMPETING, STREAMING (if you choose streaming, you can also add the url: '' property)
    text: "On $serverCount servers, and made by LightslicerGP#2125, prefix is #", //Whatever text you want, you can use $serverCount and $allMembersCount too.
    time: 10 //If you want multiple statuses add the time property for how long each status will be until it switches.
})