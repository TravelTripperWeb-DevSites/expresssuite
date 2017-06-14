$(document).ready(function(){  // SO the ready
   //set cookies
   function setCookie(c_name,value,exdays)
	{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays== null ) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
	}
   //get cookies
  function getCookie(c_name)
	{
	   var i,x,y,ARRcookies=document.cookie.split(";");
	   for (i=0;i<ARRcookies.length;i++)
	    {
	       x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	          y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	          x=x.replace(/^\s+|\s+$/g,"");
	          if (x==c_name)
	          {
	              return unescape(y);
	          }
	    }
	 }
   
   //get country zone
	var country = geoplugin_countryCode(); 
    if(country){
    	//removed slider if country code is not match with visitor
    	$('.bannerfor:not(.'+country+'):not(.Any)').remove();  
    }

    if(getCookie('visited'))
    { 
     $('.photo:not(.Return):not(.All)').remove();  
    }else
    {
    	 
    $('.photo:not(.All):not(.New)').remove(); 	
     setCookie('visited',1,365);
    }  


});//end ready


 