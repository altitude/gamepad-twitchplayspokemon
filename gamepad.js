var gp_style = '#gamepad{position:absolute;z-index:500;width:360px;height:100px;bottom:10px;background:#ccc;border:solid 3px rgba(0,0,0,.2);font-family:sans-serif}#gamepad button{position:absolute;border:0;cursor:pointer}#gamepad button.button-arrow{width:30px;height:30px;background:#D44887;border:solid 2px #942C5B;border-radius:2px;font-size:8px}#gamepad button.button-arrow.active{background:#DD7AA6}#gamepad button.button-up{top:13px;left:60px}#gamepad button.button-down{top:58px;left:60px}#gamepad button.button-left{top:36px;left:18px}#gamepad button.button-right{top:36px;left:102px}#gamepad button.button-ab{width:40px;height:40px;background:#577CCC;border:solid 2px #2C4994;border-radius:100%;font-size:18px;font-weight:700;color:#2C4994}#gamepad button.button-ab.active{background:#849FDA}#gamepad button.button-a{top:13px;right:30px}#gamepad button.button-b{top:43px;right:70px}#gp-link-code{font-size:10px;color:rgba(0,0,0,.5);text-decoration:none;position:absolute;left:166px;bottom:10px}#gp-link-code:hover{color:rgba(0,0,0,.8)}';

var gp_view = '<div id="gamepad">\
		<button class="button-up button-arrow" action="up">U</button>\
		<button class="button-down button-arrow" action="down">D</button>\
		<button class="button-left button-arrow" action="left">L</button>\
		<button class="button-right button-arrow" action="right">R</button>\
		<button class="button-a button-ab" action="a">A</button>\
		<button class="button-b button-ab" action="b">B</button>\
		<a id="gp-link-code" href="https://github.com/altitude-labs/gamepad-twitchplayspokemon">&lt;code&gt;</a>\
	</div>';

// apply gamepad stylesheet
// $("body").append('<link rel="stylesheet" href="https://raw.github.com/altitude-labs/gamepad-twitchplayspokemon/master/gamepad-classic.css" type="text/css" />');
$("head").append('<style type="text/css">'+gp_style+'</style>');

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