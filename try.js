api_key ='0b113d5c-d540-4abe-8fb9-b0b3692e40bd'


// Get the 'deepai' package here (Compatible with browser & nodejs):
//     https://www.npmjs.com/package/deepai
// All examples use JS async-await syntax, be sure to call the API inside an async function.
//     Learn more about async-await here: https://javascript.info/async-await

// Example posting a text URL:

// const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML



var l = []
var api_url = "https://www.reddit.com/search.json?q='skin bleaching'";
  console.log(api_url);
  fetch(api_url)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      // console.log(json);
      // console.log(json["data"][0]["images"]["fixed_height"]["url"])
      var v = json["data"]["children"].length
      for (i = 0; i < v; i++){
        // console.log(json["data"]["children"][i]["data"]["selftext"]);
        var x = json["data"]["children"][i]["data"]["selftext"];
        l.push(x)
      }
    //   console.log(l)

      deepai.setApiKey('0b113d5c-d540-4abe-8fb9-b0b3692e40bd');

(async function() {
    var n = json['data']['children'].length
    var k = 0
    for (k = 0; k < n; k++){
        if (l[k] != ""){
        var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: l[k],
    });
    var j = resp["output"].length
    var sum = 0; 
    var i = 0;
    for(i = 0; i < j; i++){
        if (resp["output"][i]=="Negative"){
            var a = -1
            // console.log(a)
            sum += a
        }  
        if (resp["output"][i]=="Positive"){
            var a = 1
            // console.log(a)
            sum += a
        }
        if (resp["output"][i]=="Neutral"){
            var a = 0
            // console.log(a)
            sum += a
        }  
    }
    // console.log(j)
    // console.log(sum)
    var avg_sent = sum/j
    console.log(avg_sent)
    }

    
    // console.log(resp);
    // console.log(resp["output"][0])
    
}})()

      // console.log(json["data"]["children"])
      
      // console.log(json.length)
    //   img.src=json["data"][0]["images"]["fixed_height"]["url"];
    //   document.body.appendChild(img)
    })



// Example posting file picker input text (Browser only):

// const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

// deepai.setApiKey('0b113d5c-d540-4abe-8fb9-b0b3692e40bdY');

// (async function() {
//     var resp = await deepai.callStandardApi("sentiment-analysis", {
//             text: document.getElementById('t'),
//     });
//     console.log(resp);
// })()


// // Example directly sending a text string:

// const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

// deepai.setApiKey('YOUR_API_KEY');

// (async function() {
//     var resp = await deepai.callStandardApi("sentiment-analysis", {
//             text: "YOUR_TEXT_HERE",
//     });
//     console.log(resp);
// })()

