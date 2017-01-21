jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/0a459f38d1460cb2/geolookup/forecast10day/q/CA/Santa_Barbara.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var todaysForecast = "Today: " + parsed_json.forecast.simpleforecast.forecastday[0].conditions;
  var todayHi = "H " + parsed_json.forecast.simpleforecast.forecastday[0].high.fahrenheit + "°";
  var todayLo = "L " + parsed_json.forecast.simpleforecast.forecastday[0].low.fahrenheit + "°";
  var tomorrowHi = "H " + parsed_json.forecast.simpleforecast.forecastday[1].high.fahrenheit + "° ";
  var tomorrowLo = "L " + parsed_json.forecast.simpleforecast.forecastday[1].low.fahrenheit + "° ";
  var tomorrowConditions = parsed_json.forecast.simpleforecast.forecastday[1].conditions + " ";
  var tomorrowsForecast = "Tomorrow: " + tomorrowConditions + tomorrowHi + tomorrowLo;

  //$("#todaysForecast").html(todaysForecast);
  $("#tomorrowsForecast").html(tomorrowsForecast);
  $("#todayHi").html(todayHi);
  $("#todayLo").html(todayLo);


  }
  });
  });