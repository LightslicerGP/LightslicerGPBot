module.exports = [
  {
    name: "rawjson",
    code: `
    $clientTyping
    $reply[$messageID;true]



    \`\`\`json
$get[profilejson]\`\`\`
    $let[profilejson;$getObject$createObject[$getGlobalUserVar[Profile;$mentioned[1;true];People]]]
    `,
  },
];
