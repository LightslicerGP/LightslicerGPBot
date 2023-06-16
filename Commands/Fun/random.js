module.exports = [
  {
    name: "random",
    code: `
    $clientTyping
    $reply[$messageID;true]



    $color[#ffff80]
    $title[
        And your number is...
    ]
    $description[

    ]

    $let[num1;$random[1;1001]]
    `,
  },
];
