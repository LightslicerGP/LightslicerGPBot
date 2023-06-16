module.exports = [
  {
    name: "ping",
    code: `
    $clientTyping
    $reply[$messageID;true]


    
    $color[#80bfff]
    $title[
        Pong! $pingms
    ]
    `,
  },
];
