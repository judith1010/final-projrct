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
