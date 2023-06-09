module.exports = [
  {
    name: "bot info",
    aliases: ["info"],
    code: `
      $clientTyping
      $reply[$messageID;yes]
  
  
  
      $color[#80bfff]
      $title[Bot Info]
      $description[
          Here is all the inormation you could possibly get from this, enjoy!
      ]
  
  
  
      $image[$userAvatar[$clientID]]
      $addField[Bot Avatar; :arrow_down: Here you go!;yes]
      $addField[Node version:;$nodeVersion;yes]
      $addField[Full RAM Usage;$ram[rss];yes]
      $addField[Full CPU Usage;$cpu[os];yes]
      $addField[Bot RAM Usage;$ram[heapUsed];yes]
      $addField[Bot CPU Usage;$cpu[process];yes]
      $addField[Bot Name;$username[$clientID];yes]
      $addField[Bot Message Received Ping;$messagePing;yes]
      $addField[Bot Database Ping;$dbPingms;yes]
      $addField[Bot Ping;$pingms;yes]
      $addField[Bot Uptime;$uptime;yes]
      $addField[Commands Count;$commandsCount;yes]
      $addField[Server Count;$serverCount;yes]
      $addField[User Count;$allMembersCount;yes]
      $addField[Bot Creation Date/Time;$creationDate[698733140939898957;date] (yea I know, 3 am lmao);yes]
      $addField[Bot Owner;[$username[$botOwnerID]](https://youtube.com/c/LightslicerGP/);yes]
      `,
  },
];
