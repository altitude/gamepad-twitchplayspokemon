var gp_view = '<div id="gamepad">\
		<button class="button-up button-arrow" action="up">U</button>\
		<button class="button-down button-arrow" action="down">D</button>\
		<button class="button-left button-arrow" action="left">L</button>\
		<button class="button-right button-arrow" action="right">R</button>\
		<button class="button-a button-ab" action="a">A</button>\
		<button class="button-b button-ab" action="b">B</button>\
	</div>';

// apply gamepad stylesheet
$("body").append('<link rel="stylesheet" href="https://raw.github.com/altitude-labs/gamepad-twitchplayspokemon/master/gamepad-classic.css" type="text/css" />');

// insert gamepad view
$("body").prepend(gp_view);

// center gamepad
$("#gamepad").css("left",window.innerWidth/2-$("#gamepad").width()/2);

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