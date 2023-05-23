// node SocialMediaApi.js

const Twit = require('twit');
const Discord = require('discord.js');
const express = require('express');
const { consumer_key, consumer_secret, access_token, access_token_secret, discordWebhookUrl } = require('./config.json');

const discordClient = new Discord.WebhookClient({ url: discordWebhookUrl });

const app = express();

const twitterClient = new Twit({
  consumer_key,
  consumer_secret,
  access_token,
  access_token_secret,
});

app.use(express.json());

app.post('/webhook/twitter', (req, res) => {
  const tweet = req.body;
  const tweetContent = tweet.text;

  // Send the tweet content to Discord
  discordClient.send(tweetContent);

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Get the latest tweet
function getLatestTweet() {
  const params = {
    screen_name: 'LightslicerGP', // Replace with your Twitter username
    count: 1, // Number of tweets to retrieve
    tweet_mode: 'extended',
  };

  twitterClient.get('statuses/user_timeline', params, (err, data) => {
    if (err) {
      console.error('Error retrieving latest tweet:', err);
      return;
    }

    const latestTweet = data[0];
    const tweetContent = latestTweet.full_text;

    // Send the latest tweet content to Discord
    discordClient.send(tweetContent);
  });
}

// Call the function to get the latest tweet
getLatestTweet();