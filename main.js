jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/0a459f38d1460cb2/geolookup/conditions/q/CA/Santa_Barbara.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var temp_f = parsed_json['current_observation']['temp_f'];
  var icon_url = parsed_json['current_observation']['icon_url'];
  var temp_format = temp_f + "°";

  var path1 = "k"
  var path2 =  "i"
  var newIconUrl = iconChangeURL(icon_url, path1, path2);

  $("#weatherIcon").attr("src", newIconUrl);
  $("#temperature").html(temp_format);

  }
  });



  function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var ampm = "";
      m = checkTime(m);
      ampm = checkAMPM(h);
      h = convertTime(h);
      document.getElementById('time').innerHTML = h + ":" + m;
      document.getElementById('amorpm').innerHTML = ampm;
      var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
  }

  function checkAMPM(i) {
    if(i >= 12) {
      i = " PM";
    } else {
      i = " AM";
   }
    return i;
  }

  function convertTime(i) {
      if (i >= 13) {i = i - 12};
      return i;
  }

  function iconChangeURL(url, x, y) {
        // Get the url, just as you did
        var theURL = url;
        // Return the url
                             //("/url_part_to_change/", "/new_url_part/")
        var newURL = theURL.replace(x, y);
        return newURL; 
   }


  startTime();


});
