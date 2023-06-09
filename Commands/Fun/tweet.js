module.exports = [
  {
    //random ] in the beginning of the send thign
    name: "tweet",
    code: `
      $clientTyping
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
      `, //$log[https://some-random-api.ml/canvas/tweet?username=$username[$authorID]&displayname=$username[$authorID]&avatar=$replaceText[$authorAvatar;webp;png]&comment=$replaceText[$message; ;%20]]
  },
];
