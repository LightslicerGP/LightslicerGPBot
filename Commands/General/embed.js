module.exports = [
  {
    name: "embed",
    code: `
      $clientTyping
      $reply[$messageID;true]
  
  
  
      $color[#80bfff]
      $title[TitleTextGoesHere]
      $description[DescriptionTextGoesHere]
      $footer[FooterTextGoesHere;https://lightslicergp.netlify.app]
      $addTimestamp[$dateStamp]
      $addField[AddFieldTextGoesHere;AddFieldValueGoesHere;true]
      $addField[AddFieldTextGoesHere;AddFieldValueGoesHere;true]
      $addField[AddFieldTextGoesHere;AddFieldValueGoesHere;true]
      $author[AuthorTextGoesHere;https://my.mcpedl.com/storage/texturepacks/3327/images/kellys-minecraft-vanilla-rtx-conversion-pack-caves-and-cliffs-supprt-as-well-as-discord_5.png;https://api.mcpedl.com/storage/submissions/99076/images/kellys-minecraft-vanilla-rtx-conversion-pack-massive-update_4.jpeg]
      $thumbnail[https://my.mcpedl.com/storage/texturepacks/3327/images/kellys-minecraft-vanilla-rtx-conversion-pack-clear-water-and-another-addon_8.png]
      $image[https://images.nvidia.com/geforce/news/minecraft-rtx-february-2021-player-worlds-roundup/Kelly-3.jpg;ImageNameGoesHere]
  
      $addButton[1;label;1;1;false;]
      $addButton[1;label;2;2;false;]
      $addButton[1;label;3;3;false;]
      $addButton[1;label;4;4;false;]
      $addButton[1;label;5;https://www.example.com;false;]
      $addButton[2;label;1;6;true;]
      $addButton[2;label;2;7;true;]
      $addButton[2;label;3;8;true;]
      $addButton[2;label;4;9;true;]
      $addButton[2;label;5;https://www.example.com;true;]
      `, //bottom one is $image, top right one is $thumbnail, top left is $author
  },
];
