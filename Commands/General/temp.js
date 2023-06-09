module.exports = [
  {
    name: "temp",
    code: `
      $clientTyping
      $reply[$messageID;yes]
  
  
  
      $color[#80bfff]
      $title[TitleTextGoesHere]
      $description[DescriptionTextGoesHere]
      $footer[FooterTextGoesHere;https://lightslicergp.netlify.app]
      $addTimestamp[$dateStamp]
      $addField[AddFieldTextGoesHere;AddFieldValueGoesHere;yes]
      $addField[AddFieldTextGoesHere;AddFieldValueGoesHere;yes]
      $addField[AddFieldTextGoesHere;AddFieldValueGoesHere;yes]
      $author[AuthorTextGoesHere;https://my.mcpedl.com/storage/texturepacks/3327/images/kellys-minecraft-vanilla-rtx-conversion-pack-caves-and-cliffs-supprt-as-well-as-discord_5.png;https://api.mcpedl.com/storage/submissions/99076/images/kellys-minecraft-vanilla-rtx-conversion-pack-massive-update_4.jpeg]
      $thumbnail[https://my.mcpedl.com/storage/texturepacks/3327/images/kellys-minecraft-vanilla-rtx-conversion-pack-clear-water-and-another-addon_8.png]
      $image[https://images.nvidia.com/geforce/news/minecraft-rtx-february-2021-player-worlds-roundup/Kelly-3.jpg;ImageNameGoesHere]
  
      $addButton[1;label;1;1;no;]
      $addButton[1;label;2;2;no;]
      $addButton[1;label;3;3;no;]
      $addButton[1;label;4;4;no;]
      $addButton[1;label;5;https://www.example.com;no;]
      $addButton[2;label;1;6;yes;]
      $addButton[2;label;2;7;yes;]
      $addButton[2;label;3;8;yes;]
      $addButton[2;label;4;9;yes;]
      $addButton[2;label;5;https://www.example.com;yes;]
      `, //bottom one is $image, top right one is $thumbnail, top left is $author
  },
];
