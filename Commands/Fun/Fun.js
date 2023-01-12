module.exports = [{//sometimes doesnt respond with a flip
    name: "coinflip",
    aliases: ['flip'],
    $if: "v4",
    code: `
    $botTyping
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
    `
}, {
    name: "chat",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[#ffff80]
    $title[
        LightslicerGPBot responds:
    ]
    $description[
        $jsonRequest[https://some-random-api.ml/chatbot?key=$getObjectProperty[apiToken]&message=$replaceText[$message; ;%20];response;no response given, sad]
    ]
    $createObject[$readFile[./config.json]]



    $onlyIf[$message!=;
        {newEmbed:
          {title:Please include some text for the bot to reply to!!}
          {color:#ffff80}
        }
        $reply[$messageID;yes]
    ]
    `
}, {//random ] in the beginning of the send thign
    name: "tweet",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[#ffff80]
    $title[
        Here is your tweet
    ]
    $description[
        Enjoy!
    ]
    $image[
        https://some-random-api.ml/canvas/tweet?username=$username[$authorID]&displayname=$username[$authorID]&avatar=$replaceText[$authorAvatar;webp;png]&comment=$replaceText[$message; ;%20]
    ]



    $onlyIf[$message!=;{"embeds": "
    {newEmbed:
      {title:Please include some text to put in the tweet!}
      {color:#ffff80}}",
    "reply": {"messageReference": "$messageID"}
    }]]
    ` //$log[https://some-random-api.ml/canvas/tweet?username=$username[$authorID]&displayname=$username[$authorID]&avatar=$replaceText[$authorAvatar;webp;png]&comment=$replaceText[$message; ;%20]]
}, {
    name: "animal",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[#ffff80]
    $title[
List of animals you can do:
-Dogs
-Cats
-Birds
    ]
    $description[
        Enjoy!
    ]
    `
}, {
    name: "animal dog",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[#ffff80]
    $title[
        Here is your dog picture and fact!
    ]
    $description[
        $jsonRequest[https://some-random-api.ml/animal/dog;fact;rip theres no dog fact]
    ]
    $image[
        $jsonRequest[https://some-random-api.ml/animal/dog;image;rip theres no dog picture]
    ]
    `
}, {
    name: "animal cat",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[#ffff80]
    $title[
        Here is your cat picture
    ]
    $description[
        $jsonRequest[https://some-random-api.ml/animal/cat;fact;rip theres no cat fact]
    ]
    $image[
        $jsonRequest[https://some-random-api.ml/animal/cat;image;rip theres no cat picture]
    ]
    `
}, {
    name: "animal bird",
    code: `
    $botTyping
    $reply[$messageID;yes]



    $color[#ffff80]
    $title[
        Here is your bird picture
    ]
    $description[
        $jsonRequest[https://some-random-api.ml/animal/bird;fact;rip theres no bird fact]
    ]
    $image[
        $jsonRequest[https://some-random-api.ml/animal/bird;image;rip theres no bird picture]
    ]
    `
}]