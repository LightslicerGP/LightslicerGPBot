import requests
from bs4 import BeautifulSoup

def get_latest_tweets():
    url = 'https://twitter.com/LightslicerGP'  # Replace with your Twitter profile URL
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        tweet_texts = soup.find_all('div', {'class': 'tweet-text'})
        tweets = [tweet.text.strip() for tweet in tweet_texts[:3]]
        return tweets
    else:
        return []

latest_tweets = get_latest_tweets()
if latest_tweets:
    for tweet in latest_tweets:
        print(tweet)
else:
    print('No tweets found.')
