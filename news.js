jQuery(document).ready(function($) {
  $.ajax({
  url : "http://rss2json.com/api.json?rss_url=http%3A%2F%2Fhosted2.ap.org%2Fatom%2FAPDEFAULT%2F3d281c11a96b4ad082fe88aa0db04305",
  dataType : "jsonp",
  success : function(parsed_json) {
    var newsStories = "";
    var i;
    var storyCount = 1;


  for (i = 0; i < 5; i++) { 
    newsStories += storyCount + " ) " + parsed_json.items[i].title + " • " + parsed_json.items[i].description + " . . .  ";
    storyCount++;
    }
  
  $("#news").text(newsStories);
  console.log(newsStories); 

  $(function() {
  $('.marquee').marquee({
    duration: 30000,
    startVisible: true,
    duplicated: true
  });
});
  
  

  }



  });
});
