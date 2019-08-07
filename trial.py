from flask import Flask
import json
import requests
import urllib.request
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'


def getRedditData():
    # page = requests.get('http://econpy.pythonanywhere.com/ex/001.html')
# tree = html.fromstring(page.content)
    # response = requests.get("https://www.reddit.com/search.json?q='skin bleaching'")
    # with urllib.request.urlopen("https://www.reddit.com/search.json?q='skin bleaching'") as response:
        # html = response.read()
        # print(html)
    page = requests.get("https://www.reddit.com/search.json?q='skinbleaching'", headers = {'User-agent': 'your bot 0.1'})
    j = page.json()
    print(type(j))
    # print(type(page))
    # data = html.fromstring(page.content)
    # print(data)
    print("success")
    return j["data"]["children"][0]["data"]["selftext"]

@app.route('/redditanalysis')
def redditanalysis():
    return getRedditData()
    # return 'temp'

if __name__ == '__main__':
    app.run()