module.exports = [
  {
    name: "date",
    code: `
      $clientTyping
      $reply[$messageID;true]
  
  
  
      $color[#80bfff]
      $title[
          Here is the date and time in Eastern Daylight Time (EDT)
      ]
      $description[
          $parseDate[$math[$dateStamp-14400000];date]
      ]
      `,
  },
];
