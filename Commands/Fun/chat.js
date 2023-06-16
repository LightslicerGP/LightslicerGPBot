module.exports = [
  {
    name: "chat",
    code: `
    $clientTyping
    $reply[$messageID;true]



    $color[#ffff80]
    $title[
        LightslicerGPBot responds:
    ]
    $description[
        $jsonRequest[https://some-random-api.ml/chatbot?key=$getObjectProperty[apiToken]&message=$replaceText[$message; ;%20];response;false response given, sad]
    ]
    $createObject[$readFile[./config.json]]



    $onlyIf[$message!=;
        {newEmbed:
          {title:Please include some text for the bot to reply to!!}
          {color:#ffff80}
        }
        $reply[$messageID;true]
    ]
    `,
  },
];
