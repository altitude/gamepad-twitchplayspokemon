// apply gamepad stylesheet
// $("body").append('<link rel="stylesheet" href="" type="text/css" />');

// buttons controls
$("#gamepad button").click(function(){
	$(this).addClass("active");
	$("#chat_text_input").val("").val($(this).attr("action"));
	$("#chat_speak").trigger("click");
	var btn = $(this);
	window.setTimeout(function(){
		btn.removeClass("active");
	}, 50);
});