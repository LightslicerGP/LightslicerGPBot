module.exports = [
  {
    name: "coinflip",
    aliases: ["flip"],
    code: `
    $clientTyping
    $reply[$messageID;true]



    $color[#ffff80]
    $title[
        And you flipped...
    ]
    $description[
        $if[$get[number]==501;
            ***The coin somehow landed on its edge i dont know how i dont make the rules and i cant manipulate an RNG for it to do so but somehow you managed a 1/1001 chance of getting this, feel proud!***;
            $if[$get[number]>=501;
                Heads!;
                Tails!
            ]
        ]
    ]

    $let[number;$random[1;1001]]
    `,
  },
];
