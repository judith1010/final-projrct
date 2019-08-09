(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

function baby(){
  var x = confirm("Trigger warning");
  if (x == true){
      document.getElementById('this').setAttribute("class", "js-scroll-trigger")
  }
  else {
    document.getElementById('this').setAttribute("class", "none")
  }
}

function load(){
  var api_url = "https://www.reddit.com/search.json?q='skin bleaching'";
  console.log(api_url);
  fetch(api_url)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      for (i=0;i<25;i++){
        console.log(json["data"]["children"][i]["data"]["selftext"]);
        var x = json["data"]["children"][i]["data"]["selftext"];
        var red = document.createElement("div");
        red.innerHTML = x;
        document.getElementById('idk').innerHTML = x;
      }
    })
}

function foo(arr) {
  var a = [], b = [], prev;

  arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      a.push(arr[i]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = arr[i];
  }

  return [a, b];
}

api_key = '0b113d5c-d540-4abe-8fb9-b0b3692e40bd'


// Get the 'deepai' package here (Compatible with browser & nodejs):
//     https://www.npmjs.com/package/deepai
// All examples use JS async-await syntax, be sure to call the API inside an async function.
//     Learn more about async-await here: https://javascript.info/async-await

// Example posting a text URL:

// const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML



var l = []
var li = []
var api_url = "https://www.reddit.com/search.json?q='skin bleaching'";
// console.log(api_url);
fetch(api_url)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    // console.log(json);
    // console.log(json["data"][0]["images"]["fixed_height"]["url"])
    var v = json["data"]["children"].length
    for (i = 0; i < v; i++) {
      // console.log(json["data"]["children"][i]["data"]["selftext"]);
      var x = json["data"]["children"][i]["data"]["selftext"];
      l.push(x)
    }
    //   console.log(l)

    deepai.setApiKey('0b113d5c-d540-4abe-8fb9-b0b3692e40bd');

    (async function () {
      var n = json['data']['children'].length
      var k = 0
      for (k = 0; k < n; k++) {
        if (l[k] != "") {
          var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: l[k],
          });
          var j = resp["output"].length
          var sum = 0;
          var i = 0;
          for (i = 0; i < j; i++) {
            if (resp["output"][i] == "Negative") {
              var a = -1
              // console.log(a)
              sum += a
            }
            if (resp["output"][i] == "Positive") {
              var a = 1
              // console.log(a)
              sum += a
            }
            if (resp["output"][i] == "Neutral") {
              var a = 0
              // console.log(a)
              sum += a
            }
          }
          // console.log(j)
          // console.log(sum)
          var avg_sent = sum / j
          console.log(avg_sent)
          li.push(avg_sent)
        }



        // console.log(resp);
        // console.log(resp["output"][0])

      }
      // console.log(li)
      var result = foo(li);
      // console.log(result[0])

      var data = [{
        x: result[0],
        y: result[1],
        type: 'bar'
      // ,
      //   marker: {
      //     line: {
      //       color: 'rgb(8,48,107)',
      //       width: 3
      // }}
    }];

      var layout = {
        title: 'Sentiment Analysis of Reddit Posts About Skin Bleaching',
        font:{
          family: 'Raleway, sans-serif'
        },
        color: 'blue',
        showlegend: false,
        xaxis: {
          tickangle: -45
        },
        yaxis: {
          zeroline: true,
          gridwidth: 2
        },
        bargap :0.25
      };
      
      Plotly.newPlot('myDiv', data, layout);

    })()

    // console.log(json["data"]["children"])

    // console.log(json.length)
    //   img.src=json["data"][0]["images"]["fixed_height"]["url"];
    //   document.body.appendChild(img)
  })
