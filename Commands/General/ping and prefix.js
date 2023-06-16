module.exports = [
  {
    name: "$alwaysExecute",
    code: `
    $addMessageReactions[$channelID;$messageID;<:ping:940942433968070678>;<:tomWtf:940943821884231740>]
    $onlyIf[$isMentioned[$botOwnerID]==true||$isMentioned[698733140939898957]==true;]
    `,
  },
  {
    name: "$alwaysExecute",
    code: `
    $clientTyping
    $reply[$messageID;true]



    $color[#80bfff]
    $title[
        My prefix is # :D
    ]
    $description[
        Do #help for the list of commands!
    ]



    $onlyIf[$isMentioned[698733140939898957]==true;]
    $onlyIf[$stringStartsWith[$message;#]!=true;]
    `,
  },
];
