const aoijs = require("aoi.js")
const { token } = require(`./config.json`)

const bot = new aoijs.Bot({
    token: token,
    prefix: "#",
    intents: "all",
    autoUpdate: true,
    fetchInvites: true,
    database: {
        type: "default",
        tables: ["main","Bank"],
        path: "./database/",
        promisify: true
    }
})

new aoijs.LoadCommands(bot).load(bot.cmd,'./Commands/',false)

bot.onMessage({
    guildOnly: false
})

bot.onInteractionCreate()

/*bot.deletedCommand({
    channel: "$channelID[$message]",
    code: `
    $botTyping
$description[1;$username deleted the message that said "$noMentionMessage"]

    `
})// this pings if you delete a message with @everyone or a person on it 

bot.onMessageDelete()
*/

bot.command({
    name: "test",
    //description: "test DECSCRIPOPOIGN",
    //usage: ["#test", "#test {text i guess}"],
    //category: "Developer Command",
    code: `
    $botTyping
    $reply[$messageID;yes]

    
    `//$setGlobalUserVar[testing;$noMentionMessage;$authorID;Bank]  $createFile[$usersBanned[$guildID;username;, ];banned.txt]
},{//$lerefAvatar
    name: "json",
    code:`
    $getObjectProperty[car]
    $createObject[$getVar[ItemCount]]
    
    $getObject
    $addObjectProperty[true/false;false]
    $addObjectProperty[true/false;true]
    $addObjectProperty[onlynumber;19209012]
    $addObjectProperty[fact;Lightslicergp is better]
    $addObjectProperty[myth;Kuba is cool]
    $createObject[{}]
    `
})

bot.command({
    name: "create",
    code: `
    $createApplicationCommand[$guildID;aoijs;
        a cool slash command for aoi.js;true]
        created, i think
    `
    /*
        Code Breakdown:
    This will make a slashcommand named "aoijs" (meaning you'd do /aoijs),
    the description will say "a cool slash command for aoijs"
    */
})

/*
bot.reactionRemoveCommand({
    channel: "590677318524076043", 
    code: `
    $username unreacted.. i think
    `
})

bot.onReactionRemove() */

bot.variables({
    messages: 0 //Making the variable
})

bot.variables({
    Bio: `(insert bio here)`,
    Interests: `(insert interests here)`,
    Birthday: `(insert birthday here)`,
    Youtube: `https://example.com/`,
    Site: `https://example.com/`,
    Profile: `
        {
            "Bio": "(insert bio here)",
            "Interests": "(insert interests here)",
            "Birthday": [
                "Day": 0,
                "Month": "January"
            ],
            "Youtube": "https://example.com/",
            "Site": "https://example.com/"
        }
    `,
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

bot.variables(
    {
        Money: 0,
    }, 'Bank'
) 

bot.readyCommand({
    channel: "",
    code: `
    $log[Ready on $userTag[$clientID] - $parseDate[$math[$dateStamp-14400000];date]]
    `
})

bot.status({
	status: "online", // options: online, idle, dnd, invisible
	type: "COMPETING", // options: WATCHING, PLAYING, LISTENING, COMPETING, STREAMING (if you choose streaming, you can also add the url: '' property)
	text: "On $serverCount servers, and made by LightslicerGP#2125, prefix is #", //Whatever text you want, you can use $serverCount and $allMembersCount too.
	time: 10 //If you want multiple statuses add the time property for how long each status will be until it switches.
})