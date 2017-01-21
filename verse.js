jQuery(document).ready(function($) {
	$.ajax({
	url:'https://dailyverses.net/getdailyverse.ashx?language=es&isdirect=1&url=' + window.location.hostname,
	dataType: 'JSONP',
	success:function(json){
	$(".dailyVersesWrapper").prepend(json.html);
	}
	});
});