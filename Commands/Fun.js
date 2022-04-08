module.exports = [{
    name: "coinflip",
    aliases: ['flip'],
    $if: "v4",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[1;#ffff80]
    $title[1;
        And you flipped...
    ]
    $description[1;
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
    `
},{
    name: "chat",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[1;#ffff80]
    $title[1;
        LightslicerGPBot responds:
    ]
    $description[1;
        $jsonRequest[https://some-random-api.ml/chatbot?key=ob9quL2wwhm0icE6fjhJvc46qj5HChIbNbLJuBHyWwfmx2xkIfaCND0cXdqXntTE&message=$replaceText[$message; ;%20];response;no response given, sad]
    ]



    $onlyIf[$message!=;
        {newEmbed:
          {title:Please include some text for the bot to reply to!!}
          {color:#ffff80}
        }
        $reply[$messageID;yes]
    ]
    `
},{
    name: "tweet",
    code:`
    $botTyping
    $reply[$messageID;yes]



    $color[1;#ffff80]
    $title[1;
        Here is your tweet
    ]
    $description[1;
        Enjoy!
    ]
    $image[1;
        https://some-random-api.ml/canvas/tweet?username=$username[$authorID]&displayname=$username[$authorID]&avatar=$replaceText[$authorAvatar;webp;png]&comment=$replaceText[$message; ;%20]
    ]



    $onlyIf[$message!=;{"embeds": " 
    {newEmbed:
      {title:Please include some text to put in the tweet!}
      {color:#ffff80}}",
    "reply": {"messageReference": "$messageID"}
    }]]
    ` //$log[https://some-random-api.ml/canvas/tweet?username=$username[$authorID]&displayname=$username[$authorID]&avatar=$replaceText[$authorAvatar;webp;png]&comment=$replaceText[$message; ;%20]]
},{
    name: "animal",
    code:`
    $botTyping
    $reply[$messageID;yes]



    $color[1;#ffff80]
    $title[1;
List of animals you can do:
-Dogs
-Cats
-Birds
    ]
    $description[1;
        Enjoy!
    ]
    `
},{
    name: "animal dog",
    code:`
    $botTyping
    $reply[$messageID;yes]



    $color[1;#ffff80]
    $title[1;
        Here is your dog picture and fact!
    ]
    $description[1;
        $jsonRequest[https://some-random-api.ml/animal/dog;fact;rip theres no dog fact]
    ]
    $image[1;
        $jsonRequest[https://some-random-api.ml/animal/dog;image;rip theres no dog picture]
    ]
    `
},{
    name: "animal cat",
    code:`
    $botTyping
    $reply[$messageID;yes]



    $color[1;#ffff80]
    $title[1;
        Here is your cat picture
    ]
    $description[1;
        $jsonRequest[https://some-random-api.ml/animal/cat;fact;rip theres no cat fact]
    ]
    $image[1;
        $jsonRequest[https://some-random-api.ml/animal/cat;image;rip theres no cat picture]
    ]
    `
},{
    name: "animal bird",
    code:`
    $botTyping
    $reply[$messageID;yes]



    $color[1;#ffff80]
    $title[1;
        Here is your bird picture
    ]
    $description[1;
        $jsonRequest[https://some-random-api.ml/animal/bird;fact;rip theres no bird fact]
    ]
    $image[1;
        $jsonRequest[https://some-random-api.ml/animal/bird;image;rip theres no bird picture]
    ]
    `
}
]