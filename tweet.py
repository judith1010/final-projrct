# import tweepy as tw
# # import pandas as pd
# import tweepy
#


# api = tweepy.api(consumer_key='1158395409720590337-0aXoLAvbyaoSjD2xlgDGNoP9n5qk9Q',
#   consumer_secret='CZkAhNZh2nEMIgcHjkli0VRkdMKGHsQM32Kn2lMIuZvwp',
#   access_token_key='p8sAf3T658aQPQZU1Hfu77FQz',
#   access_token_secret='9YGC0UZl8zCr4SU4v5CMwecqX3tKzwMO9ic7dCzFscoBb7KRPN')
#
# # auth = tw.OAuthHandler(consumer_key, consumer_secret)
# # auth.set_access_token(access_token, access_token_secret)
# # api = tw.API(auth, wait_on_rate_limit=True)
#
# auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
# auth.set_access_token(access_token, access_token_secret)
#
# api = tweepy.API(auth)
#
# # search_words = "#wildfires"
# # date_since = "2018-11-16"
# #
# # tweets = tw.Cursor(api.search,
# #               q=search_words,
# #               lang="en",
# #               since=date_since).items(5)
# #
# # # Iterate on tweets
# # for tweet in tweets:
# #     print(tweet.text)
#
# public_tweets = api.home_timeline()
# for tweet in public_tweets:
#     print(tweet.text)

# import tweepy as tw
#
# auth = tw.OAuthHandler(consumer_key, consumer_secret)
# auth.set_access_token(access_token, access_token_secret)
#
# api = tw.API(auth)
#
# public_tweets = api.home_timeline()
# for tweet in public_tweets:
#     print(tweet.text)

import tweepy

consumer_key= 'pPzZ4LuRE54uMKwmiQyhAjH6R'
consumer_secret= 'odATbPTrhClLrbvj4pIL7CKzDxYmgLt29KwSkODsqkFCEntjeT'
access_token= '1158395409720590337-5NYINkSH4k9327MfjPq4y2H69h11Zm'
access_token_secret= 'r2N7Eiq8ijPkxDa9rdOjIYeEJfrArRsA6z1zENE92MkJO'

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)

public_tweets = api.home_timeline()
# print(public_tweets)

for tweet in public_tweets:
    print(tweet.text)
