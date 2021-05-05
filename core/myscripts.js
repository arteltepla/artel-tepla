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

$(document).ready(function(){

    $("#loginform").validate({
        
       rules:{ 
        
            user_name:{
                required: true,
                minlength: 4,
                maxlength: 16,
            },
            
            number_phone:{
                required: true,
                minlength: 9,       
            },
       },
       
       messages:{
        
            user_name:{
                required: "Это поле обязательно для заполнения<br>",
                minlength: "Имя должно содержать минимум 4 символа",
                maxlength: "Максимальное число символо - 16",
            },
            
            number_phone:{
                required: "Это поле обязательно для заполнения",
                minlength: "Телефонный номер должен содержать 9 цифр",           
            },
        
       }
        
    });


}); //end of ready

}
/*
     FILE ARCHIVED ON 18:35:08 Jan 04, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:16:48 May 05, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  CDXLines.iter: 22.871 (3)
  esindex: 0.011
  exclusion.robots: 0.19
  load_resource: 68.29
  PetaboxLoader3.datanode: 55.5 (4)
  PetaboxLoader3.resolve: 38.933
  captures_list: 59.338
  exclusion.robots.policy: 0.176
  LoadShardBlock: 31.993 (3)
  RedisCDXSource: 0.734
*/