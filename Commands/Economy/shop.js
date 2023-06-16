module.exports = [
  {
    name: "shop",
    aliases: ["gamble"],
    code: `
    $clientTyping
    $reply[$messageID;true]
    
    
    
    $color[#80ff80]
    $title[
      Shop items
    ]
    $addField[Cookie: $2;its a cookie idk;true]
    $addField[Burger: $7;A savory, mety, and thick burger;true]
    $addField[Fries: $3;A medium group of fries, salted to perfection;true]
    $addField[Soda: $4;;true]
    $footer[Page 1]
    `,
  },
];
