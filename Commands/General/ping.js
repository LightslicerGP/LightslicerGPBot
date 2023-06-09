module.exports = [
  {
    name: "ping",
    code: `
    $clientTyping
    $reply[$messageID;yes]


    
    $color[#80bfff]
    $title[
        Pong! $pingms
    ]
    `,
  },
];
