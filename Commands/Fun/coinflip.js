module.exports = [
  {
    //sometimes doesnt respond with a flip
    name: "coinflip",
    aliases: ["flip"],
    $if: "v4",
    code: `
    $clientTyping
    $reply[$messageID;yes]



    $color[#ffff80]
    $title[
        And you flipped...
    ]
    $description[
        $if[$random[1;101;no]==51]
            ***The coin somehow landed on its edge i dont know how i dont make the rules and i cant manipulate an RNG for it to do so but somehow you managed a 1/101 chance of getting this, feel proud***
        $elseIf[$random[1;101;no]>=51]
            Heads!
        $endelseIf
        $elseIf[$random[1;101;no]<=51]
            Tails!
        $endelseIf
        $endIf
    ]
    `,
  },
];
