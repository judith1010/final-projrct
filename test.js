console.log("test")
var i = 0;
function apiRequest(){
//   var input = document.getElementById('input').value;
  // console.log(input);
  // var newChild = document.createElement("div")
  // newChild.innerText = input;
  // document.body.appendChild(newChild)
  var api_url = "https://www.reddit.com/search.json?q='skin bleaching'";
  console.log(api_url);
  fetch(api_url)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      // console.log(json);
      // console.log(json["data"][0]["images"]["fixed_height"]["url"])
      
      for (i=0;i<25;i++){
        console.log(json["data"]["children"][i]["data"]["selftext"]);
        var x = json["data"]["children"][i]["data"]["selftext"];
        var red = document.createElement("div");
        red.innerHTML = x;
        document.body.appendChild(red)
      }
      // console.log(json["data"]["children"])
      
      // console.log(json.length)
    //   img.src=json["data"][0]["images"]["fixed_height"]["url"];
    //   document.body.appendChild(img)
    })

  }