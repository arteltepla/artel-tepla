var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(".personal-modal").click(function(){
    $("#TYPE_FORM").val($(this).attr("TYPE"));
});

function hiddenValue(valid){
	if(valid==1){$('input[type="hidden"]').val('1')
	}
	else{$('input[type="hidden"]').val('2')}
}



function sendContact() {
	var valid;	
	valid = validateContact();
	if(valid) {
		jQuery.ajax({
		url: "contact_mail.php",
		data:'user_name='+$("#user_name").val()+'&number_phone='+$("#number_phone").val()+'&subject='+$("#subject").val()+'&content='+$("#content").val()+'&captcha='+$("#captcha").val()+'&hiddenValue='+$("#hiddenValue").val(),
		type: "POST",
		success:function(data){
		$("#mail-status").html(data);

		},
		error:function (){}
		});
	}
}

function validateContact() {
	var valid = true;	
	$(".demoInputBox").css('background-color','');
	$(".info").html('');
	
	if(!$("#user_name").val()) {
		$("#user_name-info").html("(Поле обязательно для заполнения)");
		$("#user_name").css('background-color','#FFFFDF');
		valid = false;
	}
	if(!$("#number_phone").val()) {
		$("#number_phone-info").html("(Поле обязательно для заполнения)");
		$("#number_phone").css('background-color','#FFFFDF');
		valid = false;
	}
	if(!$("#captcha").val()) {
		$("#captcha-info").html("(Поле обязательно для заполнения)");
		$("#captcha").css('background-color','#FFFFDF');
		valid = false;
	}
	
	return valid;
}
function refreshCaptcha() {
	$("#captcha_code").attr('src','captcha_code.php');
}

}
/*
     FILE ARCHIVED ON 19:08:17 Jan 04, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:16:48 May 05, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  CDXLines.iter: 22.236 (3)
  exclusion.robots: 0.145
  RedisCDXSource: 1.199
  captures_list: 206.812
  LoadShardBlock: 179.731 (3)
  load_resource: 75.658
  PetaboxLoader3.resolve: 59.709
  exclusion.robots.policy: 0.134
  esindex: 0.011
  PetaboxLoader3.datanode: 70.019 (4)
*/