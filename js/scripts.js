if (document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
	$('html').addClass('svg');
}else{
	$('html').addClass('nosvg');
}

/* IPAD FRIENDLY */

function Hammer(a,b,c){function x(a){return a.touches?a.touches.length:1}function y(a){a=a||window.event;if(!w){var b=document,c=b.body;return[{x:a.pageX||a.clientX+(b&&b.scrollLeft||c&&c.scrollLeft||0)-(b&&b.clientLeft||c&&b.clientLeft||0),y:a.pageY||a.clientY+(b&&b.scrollTop||c&&c.scrollTop||0)-(b&&b.clientTop||c&&b.clientTop||0)}]}else{var d=[],e;for(var f=0,g=a.touches.length;f<g;f++){e=a.touches[f];d.push({x:e.pageX,y:e.pageY})}return d}}function z(a,b){return Math.atan2(b.y-a.y,b.x-a.x)*180/Math.PI}function A(a,b){if(a.length==2&&b.length==2){var c,d;c=a[0].x-a[1].x;d=a[0].y-a[1].y;var e=Math.sqrt(c*c+d*d);c=b[0].x-b[1].x;d=b[0].y-b[1].y;var f=Math.sqrt(c*c+d*d);return f/e}return 0}function B(a,b){if(a.length==2&&b.length==2){var c,d;c=a[0].x-a[1].x;d=a[0].y-a[1].y;var e=Math.atan2(d,c)*180/Math.PI;c=b[0].x-b[1].x;d=b[0].y-b[1].y;var f=Math.atan2(d,c)*180/Math.PI;return f-e}return 0}function C(a,b){b.touches=y(b.originalEvent);b.type=a;if(J(d["on"+a])){d["on"+a].call(d,b)}}function D(a){a=a||window.event;if(a.preventDefault){a.preventDefault();a.stopPropagation()}else{a.returnValue=false;a.cancelBubble=true}}function E(){i={};k=false;j=0;f=0;g=0;l=null}function G(c){switch(c.type){case"mousedown":case"touchstart":i.start=y(c);n=(new Date).getTime();j=x(c);k=true;t=c;var d=a.getBoundingClientRect();var e=a.clientTop||document.body.clientTop||0;var o=a.clientLeft||document.body.clientLeft||0;var p=window.pageYOffset||a.scrollTop||document.body.scrollTop;var q=window.pageXOffset||a.scrollLeft||document.body.scrollLeft;r={top:d.top+p-e,left:d.left+q-o};s=true;F.hold(c);if(b.prevent_default){D(c)}break;case"mousemove":case"touchmove":if(!s){return false}u=c;i.move=y(c);if(!F.transform(c)){F.drag(c)}break;case"mouseup":case"mouseout":case"touchcancel":case"touchend":if(!s||l!="transform"&&c.touches&&c.touches.length>0){return false}s=false;v=c;F.swipe(c);if(l=="drag"){C("dragend",{originalEvent:c,direction:h,distance:f,angle:g})}else if(l=="transform"){C("transformend",{originalEvent:c,position:i.center,scale:A(i.start,i.move),rotation:B(i.start,i.move)})}else{F.tap(t)}m=l;C("release",{originalEvent:c,gesture:l});E();break}}function H(a,b){if(!b&&window.event&&window.event.toElement){b=window.event.toElement}if(a===b){return true}if(b){var c=b.parentNode;while(c!==null){if(c===a){return true}c=c.parentNode}}return false}function I(a,b){var c={};if(!b){return a}for(var d in a){if(d in b){c[d]=b[d]}else{c[d]=a[d]}}return c}function J(a){return Object.prototype.toString.call(a)=="[object Function]"}function K(a,b,c){b=b.split(" ");for(var d=0,e=b.length;d<e;d++){if(a.addEventListener){a.addEventListener(b[d],c,false)}else if(document.attachEvent){a.attachEvent("on"+b[d],c)}}}var d=this;var e={prevent_default:false,css_hacks:true,swipe:true,swipe_time:200,swipe_min_distance:20,drag:true,drag_vertical:true,drag_horizontal:true,drag_min_distance:20,transform:true,scale_treshold:.1,rotation_treshold:15,tap:true,tap_double:true,tap_max_interval:300,tap_max_distance:10,tap_double_distance:20,hold:true,hold_timeout:500};b=I(e,b);(function(){if(!b.css_hacks){return false}var c=["webkit","moz","ms","o",""];var d={userSelect:"none",touchCallout:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"};var e="";for(var f=0;f<c.length;f++){for(var g in d){e=g;if(c[f]){e=c[f]+e.substring(0,1).toUpperCase()+e.substring(1)}a.style[e]=d[g]}}})();var f=0;var g=0;var h=0;var i={};var j=0;var k=false;var l=null;var m=null;var n=null;var o={x:0,y:0};var p=null;var q=null;var r={};var s=false;var t;var u;var v;var w="ontouchstart"in window;this.option=function(a,d){if(d!=c){b[a]=d}return b[a]};this.getDirectionFromAngle=function(a){var b={down:a>=45&&a<135,left:a>=135||a<=-135,up:a<-45&&a>-135,right:a>=-45&&a<=45};var c,d;for(d in b){if(b[d]){c=d;break}}return c};var F={hold:function(a){if(b.hold){l="hold";clearTimeout(q);q=setTimeout(function(){if(l=="hold"){C("hold",{originalEvent:a,position:i.start})}},b.hold_timeout)}},swipe:function(a){if(!i.move){return}var c=i.move[0].x-i.start[0].x;var e=i.move[0].y-i.start[0].y;f=Math.sqrt(c*c+e*e);var j=(new Date).getTime();var k=j-n;if(b.swipe&&b.swipe_time>k&&f>b.swipe_min_distance){g=z(i.start[0],i.move[0]);h=d.getDirectionFromAngle(g);l="swipe";var m={x:i.move[0].x-r.left,y:i.move[0].y-r.top};var o={originalEvent:a,position:m,direction:h,distance:f,distanceX:c,distanceY:e,angle:g};C("swipe",o)}},drag:function(a){var c=i.move[0].x-i.start[0].x;var e=i.move[0].y-i.start[0].y;f=Math.sqrt(c*c+e*e);if(b.drag&&f>b.drag_min_distance||l=="drag"){g=z(i.start[0],i.move[0]);h=d.getDirectionFromAngle(g);var j=h=="up"||h=="down";if((j&&!b.drag_vertical||!j&&!b.drag_horizontal)&&f>b.drag_min_distance){return}l="drag";var m={x:i.move[0].x-r.left,y:i.move[0].y-r.top};var n={originalEvent:a,position:m,direction:h,distance:f,distanceX:c,distanceY:e,angle:g};if(k){C("dragstart",n);k=false}C("drag",n);D(a)}},transform:function(a){if(b.transform){if(x(a)!=2){return false}var c=B(i.start,i.move);var d=A(i.start,i.move);if(l!="drag"&&(l=="transform"||Math.abs(1-d)>b.scale_treshold||Math.abs(c)>b.rotation_treshold)){l="transform";i.center={x:(i.move[0].x+i.move[1].x)/2-r.left,y:(i.move[0].y+i.move[1].y)/2-r.top};var e={originalEvent:a,position:i.center,scale:d,rotation:c};if(k){C("transformstart",e);k=false}C("transform",e);D(a);return true}}return false},tap:function(a){var c=(new Date).getTime();var d=c-n;if(b.hold&&!(b.hold&&b.hold_timeout>d)){return}var e=function(){if(o&&b.tap_double&&m=="tap"&&n-p<b.tap_max_interval){var a=Math.abs(o[0].x-i.start[0].x);var c=Math.abs(o[0].y-i.start[0].y);return o&&i.start&&Math.max(a,c)<b.tap_double_distance}return false}();if(e){l="double_tap";p=null;C("doubletap",{originalEvent:a,position:i.start});D(a)}else{var g=i.move?Math.abs(i.move[0].x-i.start[0].x):0;var h=i.move?Math.abs(i.move[0].y-i.start[0].y):0;f=Math.max(g,h);if(f<b.tap_max_distance){l="tap";p=c;o=i.start;if(b.tap){C("tap",{originalEvent:a,position:i.start});D(a)}}}}};if(w){K(a,"touchstart touchmove touchend touchcancel",G)}else{K(a,"mouseup mousedown mousemove",G);K(a,"mouseout",function(b){if(!H(a,b.relatedTarget)){G(b)}})}}

jQuery.fn.hammer=function(a){return this.each(function(){var b=new Hammer(this,a);var c=jQuery(this);c.data("hammer",b);var d=["hold","tap","doubletap","transformstart","transform","transformend","dragstart","drag","dragend","swipe","release"];for(var e=0;e<d.length;e++){b["on"+d[e]]=function(a,b){return function(c){a.trigger(jQuery.Event(b,c))}}(c,d[e])}})}

/* END */

//indentifies when window resize is happening
var photosTimer;

$(window).resize(function(){
  $('html').addClass('resized');
  if( $('html').hasClass('resized') ) {
    $('#supersized li').removeClass('zoom');
  }
  clearTimeout(photosTimer);
  photosTimer = setTimeout(function(){
    $('html').removeClass('resized');
  }, 200);
});

$(function(){
	 //$('#viewport').css('min-height',$(window).height() -40 +'px');
	/* VARIABLES */
   
	var pressroom = $('#pressroom'),
		pressroomEntry = $('article', pressroom),
		pressroomCategories = $('#categories-list'),
		pressroomCategory = $('li a', pressroomCategories);
	

			//Popup Sign Offer
		$('#popup-offer').show();
		var popupWrapper = $('#popup-offer'),
			popupForm = $('form', popupWrapper);
			
		function removePopup(){
			popupWrapper.hide();
			$('html').removeClass('blur');
		}
		
		popupForm.on('submit', function(){
			if( popupForm.validationEngine('validate') ){
				removePopup();
				$.cookie('__CUGmember__', 'true', { expires: 20*365 });
			}
		});
		$.cookie('__CUGmember__') === 'true' ? removePopup() : null;

	
		
		



	// New form for http://www.triumphhotels.com/walkingtours/walking-tours-rfp
	
	if ($('#walking_tours_rfp').length) {
		
		$('#row_availablewalkingtours input').attr('disabled', 'disabled');
		
		$('#desiredwalkingtourdate').bind('dateSelected', function(e, selectedDate, $td, state) {
			var t = new Date(selectedDate),
				d = t.getDay(),
				tours = ['availablewalkingtours_iroquois_new_york_tour',null,'availablewalkingtours_times_square-rockefeller_center-the_edison_hotel-tuesdays','availablewalkingtours_hotel_belleclaire_tour','availablewalkingtours_washington_jefferson_hotel_tour','availablewalkingtours_cosmopolitan_hotel_tour','availablewalkingtours_hotel_chandler_tour']; // SUNDAY - first day of the week, no tours for MO
			
			$('#row_availablewalkingtours input').attr('disabled', 'disabled').removeAttr('checked');
			if (d>1 || d==0) $('#'+tours[d]).removeAttr('disabled');
			
		});
		$('#desiredwalkingtourdate').on('click', function(){
			var blackoutDates = [];
			
			function dateRange(s,e,daysToSkip){
			    var S = new Date(s);
			    var E = new Date(e);
			    
			    while(S <= E) {
				    if(typeof daysToSkip =='undefined' || $.inArray(S.getDay(), daysToSkip) > -1 )
					blackoutDates.push(S.getMonth() + 1 + '/' + S.getDate() + '/' +  S.getFullYear());
					
			        S = new Date(S.setDate(S.getDate() + 1));
			    }
			};
			
			dateRange('12/28/15','01/06/2016');
			dateRange('01/07/16','03/28/2016', [2,3,6]);
			
			
			$('#desiredwalkingtourdate').dpSetRenderCallback(function($td, thisDate, month, year){
				var currentDate = thisDate.getMonth() + 1 + '/' + thisDate.getDate() + '/' +  thisDate.getFullYear()
				if( $.inArray(currentDate, blackoutDates) > -1){
					$td.addClass('disabled')
				}
			});		
		});
	}
	
	
	//Masonry Plugin for images
	    $('.galleries').masonry({
	        itemSelector: '.gallery',
	        singleMode: false,
	        isResizable: true,
	        isAnimated: true,
	        animationOptions: {
	            queue: true,
	            duration: 500
	        }
	    });
	
		/* Summer Layout TOPIMAGE ROTATION */

		if($('.summer #photos img').length > 1){
			var photosContainer = $('.summer #photos'),
				photosSwitchInterval = 6000,
				photosTransitionSpeed = 1500,
				nextPhoto;
			function moveSlider(direction){
				nextPhoto = (direction > 0) ? $('figure:visible', photosContainer).next('figure') : $('figure:visible', photosContainer).prev('figure');
				if (nextPhoto.length == 0){ nextPhoto = (direction > 0) ? $('figure:eq(0)', photosContainer) : $('figure:last', photosContainer) };
				$('figure:visible', photosContainer).css('z-index', 2).fadeOut(photosTransitionSpeed);
				nextPhoto.css('z-index', 1).show();
			}
			var photoInterval = setInterval(function(){ moveSlider(1)}, photosSwitchInterval);
			var arrows = '<a href="#" class="photo-arrow prev" data-direction="-1"></a><a href="#" class="photo-arrow next" data-direction="1"></a>';
			$('.summer #photos').append(arrows);
			$('.summer #photos .photo-arrow').click(function(e){
				e.preventDefault();
				if($('figure:animated', photosContainer).length > 0){ return false }
				clearInterval(photoInterval);
				moveSlider($(this).data('direction'));
				photoInterval = setInterval(function(){ moveSlider(1) }, photosSwitchInterval);
			});
		}
  
//share this site init
	$('a.share').fancybox({centerOnScroll: true, overlayColor: '#fff'});	
	if ($('.fancybox').length) {
	  $('.fancybox').fancybox({centerOnScroll: true, overlayColor: '#fff'});
	}
  
// STYLISH SELECT
  $('.bookingform .select select, #content .form select, #calendar-filter select').sSelect();
  
//custom scrollbar  
  if(!$('body.custompage').length) {
    $('#content, #content ul.newList').mCustomScrollbar();
  } else {
    $('.hiddenpage').mCustomScrollbar();
  }
//END  
  
//Duplicate content to Hiddenpage
  $('#content .hiddenpage_content').html($('#content .contentblock').html());
  
//append links in custom layout to hidden page
  $('#content .thumb p a').each(function(){
    var link = $('<a>', {href:$(this).attr('href')}).html($(this).html());
    $('.custompage #content .hidden_navigation').append(link);
  });

//Read More + Read Less
  if ($('body.home').length) {
    var rmbtn = $('<a href="#" class="readmore">Read More</a>').toggle(
      function () {
    	  $('#content .mCSB_container').children().slideDown(1000);
    	  $('.readmore').text('Read Less');
    },
    function () {
    	$('#content .mCSB_container').children().not(':last,h2:eq(0), ul.socials, h1, p:eq(0), aside').hide();
    	$('.readmore').text('Read More');
    })
    if(!($('.big-gallery').length || $('#flashcontent').length)) {
      $('#content .mCSB_container').children().not('h2:eq(0), ul.socials, h1, p:eq(0), aside, embed').hide();
      rmbtn.appendTo('#content .mCSB_container');
    }
    
  } 
  
  if ($('body.custompage').length) {
  	
  	var rmbtn = $('<a href="#content" class="readmore">Read More</a>');
      
    if (!($('.big-gallery').length || $('#flashcontent').length)) {
    	$('#content .contentblock').children().not('h2:eq(0), ul.socials, h1, p:eq(0), aside, embed').hide();
    		rmbtn.appendTo('#content .contentblock');
    }
    
    //read more click event
    rmbtn.click(function(){
      if(event.preventDefault) event.preventDefault();
      event.returnValue = false;
      setTimeout(function(){
        $('.custompagelogo, .ie_custompagelogo').animate({top: -($('.custompagelogo, .ie_custompagelogo').height() + 40)});
        $('.blocks.top').animate({left: "-100%"}, 800);
        $('.blocks.bottom').animate({left: "100%"}, 800, function(){
          $('.custompage #content .hiddenpage').show().animate({left: '0'});
          $('.custompagelogo, .ie_custompagelogo').animate({top: '10px'});
          $('.custompage #content .readless').show().animate({left: '50px'});
          $('.hidden_navigation').show().animate({right: '50px'});
        });
      }, 500);
    });
    //end
    
    //read less click event
    $('.custompage .readless').click(function(){
      if(event.preventDefault) event.preventDefault();
      event.returnValue = false;
      setTimeout(function(){
        $('.custompagelogo, .ie_custompagelogo').animate({top: -($('.custompagelogo, .ie_custompagelogo').height() + 40)});
        $('.custompage .readless').animate({left: '-100%'}, function(){
          $(this).hide();
        });
        $('.hidden_navigation').animate({right: '-100%'});
        $('.custompage #content .hiddenpage').animate({left: '-100%'}, 800, function(){
          $('.blocks.top').animate({left: "0"}, 800);
          $('.blocks.bottom').animate({left: "0"}, 800);
          $('.custompagelogo, .ie_custompagelogo').animate({top: '10px'}, 600);          
        });
      }, 500);  
    });
    //end

  }
  function characterLimit(string,limit){
	  limit = limit || 180;
	  return string.length>limit ? string.substr(0,limit-1)+'&hellip;' : string;
  }
  //CUSTOM GRID LAYOUT
  if ($('body.custompage[class*="col-"]').length) {
	  
	  $('.grid-wrapper .text').children().not('h1, p:eq(0)').hide();
	  var intro = $('.grid-wrapper .text p:eq(0)');
	  intro.html( characterLimit(intro.text(),160) );
	  $('.grid-wrapper .text').find('a.button').parent().show().css({margin:0});
	  
	  // Create subnav
	  $('.grid-wrapper a').each(function(){
		      var link = $('<a>', {href:$(this).attr('href')}).html($(this).find('h3').text());
			  $('.custompage #content .hidden_navigation').append(link);
	  });
	  //More Text button click
	  $('.grid-wrapper .text a.button').on('click', function(e){
		  e.preventDefault();
		  $('.grid-wrapper').animate({marginLeft:'-100%',marginRight:'100%'},600, function(){
			  $('.hidden_navigation').show().animate({right: '50px'});
	          $('.custompage #content .readless').show().animate({left: '50px'});
	          $('.custompage #content .hiddenpage').show().animate({left: '0'});
		  });
          $('.custompage #content .hiddenpage').find('a.button').hide();
		   
	  });
	 
	  
	  	  //Less Text button click
	  $('.custompage .readless').off("click").on('click', function(e){
		  e.preventDefault();
		  $('.hidden_navigation').show().animate({right: '-100%'});
          $('.custompage #content .readless').show().animate({left: '-100%'});
          $('.custompage #content .hiddenpage').show().animate({left: '-100%'}, 800, function(){
			  $('.grid-wrapper').animate({marginLeft:0,marginRight:0},600);
			  $('.hidden_navigation').css('display','none');
		  });
	  });
  }
  
	// SUMMER Layout
	
	$('.summer #header #logo').clone().appendTo('.summer #logo-block');
	$('.summer #header #logo').remove();
	
	$('.summer #content .hotel-list').wrapAll('<div class="hotel-list-wrapper" />');
	
	// PLACEHOLDER

	inputPlaceholder($("#sc-email"));

//read more + read less end
  	
//supersized full screen mode
//  $('#fullscreen').click(function(){
//    if($('#content-area').hasClass('opened')) {
//		$('#logowrapper').animate({right: '2%'});
//		$('#content-area').animate({left: '100%'}, function(){
//			$('#content-area').removeClass('opened');
//			$('.home .booking_tel').css({color: '#fff'});
//			setLogoColor();
//			$(this).hide();
//		});
//		$(this).addClass('collapse').text('Exit Full Screen');
//    } else {
//		$('.home .booking_tel').css({color: '#003057'});
//		$('#logowrapper').animate({right: '52%'});
//		$('#content-area').addClass('opened').show().animate({left: '50%'});
//		$('#logo i').fadeOut(3000, function(){
//		$('#logo').removeClass('light');
//		});
//		$(this).removeClass('collapse').text('Full Screen');
//    }
//  });

	$('#fullscreen').click(function(){
		if($('#content-area').hasClass('closed')) {
			$('#logowrapper').animate({right: '52%'});
			$('#content-area').animate({left: '50%'}, function(){
				$('#content-area').removeClass('closed');
				$('.home .booking_tel').css({color: '#003057'});
				setLogoColor();
				$(this).show();
				
				if( $('#members-only-signup').length )
				$('#members-only-signup').animate({left:'25%'},300)

				if( $('.members-only-signup').length )
				$('.members-only-signup').animate({left:'25%'},300)

				if( $('.hero-content-outer').length )
				$('.hero-content-outer').animate({right:'49%'},300);
			   // $('.hero-content-outer').css({'max-width':'40%'});
			    

				if( $('.join').length )
				$('.join').animate({left:'20%'},300)
			});
			$(this).removeClass('active').text('Full Screen');
		} else {
			$('.home .booking_tel').css({color: '#fff'});
			$('#logowrapper').animate({right: '2%'});
			$('#content-area').addClass('closed').show().animate({left: '100%'}, function(){
				$(this).show();
			});
			$('#logo i').fadeOut(3000, function(){
				$('#logo').removeClass('light');
			});

			$(this).addClass('active').text('Exit Full Screen');
			
			if( $('#members-only-signup').length )
			$('#members-only-signup').animate({left:'50%'},300)
			if( $('.members-only-signup').length )
			$('.members-only-signup').animate({left:'50%'},300)
			if( $('.join').length )
			$('.join').animate({left:'45%'},300)
			if( $('.hero-content-outer').length )
			$('.hero-content-outer').animate({right:'0'},300)
			if( $('.hero-content-outer').length )
			$('.hero-content-outer').animate({right:'0'},300)
			//$('.hero-content-outer').css({'max-width':'auto'});
		}
	});
  
  //will close full screen on esc button
  if( $('body.home').length ) {
    $(document).keyup(function(e) {
      if (e.keyCode == 27) {
        $('.home .booking_tel').css({color: '#003057'});
        $('#logowrapper').animate({right: '52%'});
        $('#content-area').show().animate({left: '50%'}, function(){
			$(this).removeClass('closed');
		});
        $('#logo i').fadeOut(3000, function(){
          $('#logo').removeClass('light');
        });
		  $('#fullscreen').removeClass('active').text('Full Screen');
      }
    });
  }
  
//end
  
/*Main menu ul ul new padding from left
	$("#main-menu > ul > li:has(ul)").each(function(){
		$("ul", this).css({
			paddingLeft: ($(this).offset().left + 18) + "px",
			left: - ($("ul", this).width() + ($(this).offset().left + 18)) + "px"
		});
	}); */
//end
	
	
//MAIN MENU UL LI:HOVER DROPDOWN new position
  $('#main-menu > ul > li').mouseenter(function(){
    $('ul', this).eq(0).show().animate({top: 40});
  })
  .mouseleave(function(){
    $('ul', this).eq(0).stop(true, true).animate({
      top: -$("ul", this).eq(0).height() + 'px'
    }, function(){ $(this).hide(); });
  });
	
	$('#main-menu > ul > li:last').has('ul').addClass('last');
//end 
  
//MAIN MENU UL LI:first-child
  $('#main-menu > ul > li:first-child').mouseenter(function(){
    $('a.firstelement').stop(true, true).slideDown(300);
  })
  .mouseleave(function(){
    $('a.firstelement').stop(true, true).slideUp(300);
  });
  
//SPECIALS SUBMENU REMOVE
  $('#main-menu > ul > li > a[href$="specials"]').each(function(){
    $(this).next().remove();
  });
//
  
//BOOKING EXPAND
  $('#hotel').change(function(){
		$('.submitform input[type="submit"]').attr('onclick','if($(\'#sSelect_hotel .selectedTxt\').text() != \'Select A Hotel\'){ var s=s_gi(s_account); s.linkTrackVars=\'events,products\'; s.linkTrackEvents=\'event6,scOpen\'; s.events=\'event6,scOpen\'; s.products=\';'+ $("#hotel option[value='" + $('#hotel').getSetSSValue() + "']").text() +'\'; (s.tl(this,\'o\',\'Booking Initiated\'));}' );
	});
  
  $('#header #booking').click(function(){
    $('.booking_tel').animate({right: '0px'});
    $(this).animate({top: '-59px'}, function(){
      $('#bookingexpanded').animate({top: '0px'});
    });
    
  });
  
  $('#bookingexpanded .cross').click(function(){
    $('#bookingexpanded').animate({top: -($('#bookingexpanded').height())}, function(){
      $('#header #booking').animate({top: '0'});
      $('.booking_tel').animate({right: '50px'});
    });
  });
//end of booking EXPAND


// ATTR target="_blank"
  $('a[rel="external"], form.form-external, a[href^="http"][href*="://"]:not([href*="' + window.location.host + '"]), a[href*=".pdf"]').attr('target', '_blank');

// TOKENS
  if ($('#ping').length) $('#ping').after($('<input>').attr({'name':'pong','value':$('#ping').val(),'class':'hide'}));

// FANCYBOX
  $('a.fancybox').fancybox({centerOnScroll: true});

// TOP IMAGE ROTATION
  if ($('#photos img').length > 0 && !$('body').hasClass('summer')) {
    
    $('#supersizedcontrols #prevslide, #supersizedcontrols #nextslide').show();
    
      var images = [];
      $('#photos figure').each(function(){
          var img = {
              image: $('img', this).attr('src'),
              alt: $('img', this).attr('alt'),
              title: $('figcaption', this).html()
          };
          if ($('a', this).length) {
              img.url = $('a', this).attr('href');
          }
          
          images.push(img);
          
      });
      $.supersized({
          slides: images,
          transition: 1,
		  image_protect: 0,
          transition_speed: 6000,
          slide_interval: 6000,
          horizontal_center: true,
          vertical_center: true,
          performance: 2,
          autoplay: true
      });

    var beforeAnimationOld = typeof theme.beforeAnimation == 'function' ? theme.beforeAnimation : undefined;
    var init = true;
    theme.beforeAnimation = function(data) {
        if (init) {
            if (vars.current_slide) {
                api.options.transition_speed = 3000;
                api.options.slide_interval = 3000;
                init = false;
            } else {
	            var mo = $('#supersized li.activeslide a[href="/members-only"]');
	            mo.append('<div id="members-only-signup"></div>');
                setTimeout(function() {
					$('#supersized li #logowrapper').remove();
                    $('#supersized li.slide-0').addClass('zoom');

					$('#supersized li.activeslide').append('<div id="logowrapper"></div>');
					if ( $('#content-area').hasClass('closed') && $('body').hasClass('home') ) {
						$('#logowrapper').css({right: '2%'});
					} else {
						$('#logowrapper').css({right: '52%'});
					}
					$('#logowrapper').fadeIn(1500);

                }, 3000);
            }
        }
        setLogoColor();
        if (typeof beforeAnimationOld == 'function') beforeAnimationOld(data);
    };

      var afterAnimationOld = typeof theme.beforeAnimation == 'function' ? theme.beforeAnimation : undefined;
      theme.afterAnimation = function(data) {
      	if( $('body').hasClass('home') ){
  	        $('#supersized li #logowrapper').remove();
  	        $('#supersized li.activeslide').append('<div id="logowrapper"></div>');
  	        if ( $('#content-area').hasClass('closed') ) {
  	          $('#logowrapper').css({right: '2%'});
  	        } else {
  	          $('#logowrapper').css({right: '52%'});
  	        }
  	        $('#logowrapper').fadeIn(1500);
  	        if (typeof afterAnimationOld == 'function') afterAnimationOld(data);
      	}
      };
  }
  
  function setLogoColor() {
    var image = new Image();
    image.crossOrigin = "anonymous";
    
    if ( (!$('#content-area').hasClass('closed')) || (!$('body').hasClass('home')) ) {
        $(image).load(function(){
	      setColors(image);
      });
    }
		
		
    
    image.src = images[vars.current_slide].image.indexOf('//') == 0 ? 'https:'+images[vars.current_slide].image : images[vars.current_slide].image;
  }
  
  
  
  
  //main-menu submenu hover image a thumbnail appends to viewport
  if( (!$('body.custompage').length) ) {
    
    $('#supersized').show();
    $('#main-menu ul ul li a').hover(function(){
      
      var spszimg = $('#supersized img');
      
          $(this).parent().find('img.submenu_img').clone().appendTo('#viewport').wrap( "<div class='submenuphotowrap'></div>" ).show();
          $('img.submenu_img').css({
            width: (spszimg.width()) + 'px',
            height: (spszimg.height()) + 'px'
          });
          $('.submenuphotowrap').css({
            top: (spszimg.position().top) + 'px'
          });
          
        }, function(){
            $('#viewport .submenuphotowrap').remove();
    });
  
  }
  

// DATES AND BOOKING

	var HeBS_Link_Checkin_Checkout_Inputs = function HeBS_Link_Checkin_Checkout_Inputs_function(checkin_selector, checkout_selector) {
		Date.format = 'mm/dd/yyyy';

		$(checkin_selector).bind('dateSelected', function(e, selectedDate, $td, state) {
			var t = new Date(selectedDate);
			var dt = t;
			var edate = new Date.fromString($(checkout_selector).val());
			var one_day=1000*60*60*24;
			var days_diff = Math.ceil((edate.getTime() - dt.getTime())/(one_day));

			if(edate.getTime() <= dt.getTime()) {
				$(checkout_selector).val(t.addDays(1).asString());
				$(checkout_selector).dpSetSelected(t.asString());
				$(checkout_selector).dpSetDisplayedMonth(t.getMonth(), t.getFullYear());
			}
		});

		$(checkout_selector).bind('dateSelected', function(e, selectedDate, $td, state) {
			var t = new Date(selectedDate);
			var dt = new Date.fromString($(checkin_selector).val());
			var edate = t;
			var one_day=1000*60*60*24;
			var days_diff = Math.ceil((edate.getTime() - dt.getTime())/(one_day));

			if(edate.getTime() <= dt.getTime()) {
				$(checkin_selector).val(t.addDays(-1).asString());
				$(checkin_selector).dpSetSelected(t.asString());
				$(checkin_selector).dpSetDisplayedMonth(t.getMonth(), t.getFullYear());
			}
		});

		var today = new Date();
		$(checkin_selector).val(today.asString());
		$(checkout_selector).val(today.addDays(1).asString());

		$(checkout_selector).dpSetStartDate(today.asString());
	};
	
	$('#checkin, #checkout, .date-pick').datePicker({'clickInput' : true, 'showYearNavigation': false });
	var today = new Date();
	$('#checkin').val(today.asString());

	HeBS_Link_Checkin_Checkout_Inputs('#checkin', '#checkout');

	$('.datepicker, .date-pick').each(function(){ $(this).attr('autocomplete', 'off'); }).datePicker({'clickInput': true, 'showYearNavigation': false});
	
		//SMART BOKING WIDGET
	$('#bookingexpanded form').hebsBP({
	        // property id from any source
	        propertyId : currentPropertyId,
	
	        // checkin field's jQuery selector
	        checkIn : '#checkin',
	
	        // checkout field's jQuery selector
	        checkOut : '#checkout',
	
	        // extra fields to track
	        extraFields: {
	            //jQuery selector : jQuery events to track
	            '#rooms' : 'change',
	            '#guests' : 'change',
	            '#hotel' : 'change'
	        },
	
	        // read corporate cookie for all properties
	        singleCookie: true,
	
	        // Apply data gathered by booking plugin
	        onComplete: function(booking) {
			 if (booking) {
				 var inDate = new Date(booking.checkin_date),
				 outDate = new Date(booking.checkout_date);
		        $('#checkin').val((inDate.getMonth() + 1) + '/' + inDate.getDate() + '/' +  inDate.getFullYear());
		        $('#checkout').val((outDate.getMonth() + 1) + '/' + outDate.getDate() + '/' +  outDate.getFullYear());
		        $("#guests").val(booking.number_of_adults);
		
	                if (booking.extra_fields && booking.extra_fields.length) {
	                    $.each( booking.extra_fields, function( ind, obj ) {
                            $(obj.selector).val(obj.value);
                            $(obj.selector).val(obj.value).resetSS();
	                    });
	                }		
			    }
	        }
	});

	
/*
	// LIMIT DATE ON triumphhotels.com/walkingtours/walking-tours-rfp
	
	$('#desiredwalkingtourdate').on('change', function(){
		function isInArray(value, array) {
		  return array.indexOf(value) > -1;
		}
		var blockedOutDates = [];
		if(isInArray($(this).val(), blockedOutDates);){
			alert('Sorry, please select another date.' );
		}
	});
*/
// VALIDATION

	if ($.validationEngine) $(".bookingform, #content .form, #newsletter form, #popup-offer form").validationEngine({ 'prettySelect' : true, 'usePrefix' : 'sSelect_'});
	

// FORMS HIGHLIGHT

	$('.form select, .form input, .form textarea').bind('focus',function(){
		$('.form p').removeClass('highlight');
		$(this).parents('p').addClass('highlight');
	}).bind('blur', function(){
		$('.form p').removeClass('highlight');
	});

// GOOGLE MAP

	if($('#map-canvas').length){

		var latLng = new google.maps.LatLng(40.7558056, -73.98206900000002);
		var content = '<h4>Triumph Hotels</h4><p>49 West 44th Street New York,<br>New York 10036<br>Phone: (212) 453-4055</p><p><a href="http://maps.google.com/maps?f=d&geocode=&daddr=40.7558056,-73.98206900000002&z=15" target="_blank">Get directions</a></p>';

		var mapOptions = {
			zoom: 16,
			center: latLng,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false
		};

		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
		var pointer = templateURL + "images/pointer.png";
		var marker = new google.maps.Marker({
			position: latLng,
			map: map,
			icon: pointer
		});

		var infowindow = new google.maps.InfoWindow();
		infowindow.setContent(content);
		infowindow.open(map, marker);

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});

	}
	
  // CUSTOM page resize WIDTH
  function adjustResize() {

  	var winWidth = $(window).width();
  	var winHeight = $(window).height();
  	  
    if  ( (winWidth > 1170) || (winHeight > 920) )  {
  	  $('.custompage .contentblock').removeClass('small');
  	}
  	
  	if  ( (winWidth > 1170) && (winHeight < 920) )  {
      $('.custompage .contentblock').addClass('small');
    } 
    
    if  ( (winWidth < 1170) || (winHeight < 920) )  {
  	  $('.custompage .contentblock').addClass('small');
  	}
    
    //if hidden menu on custom pages is too wide
    if (winWidth < 1290) {
      if( $('.hidden_navigation').width() > 750 ) {
    	  $('.hidden_navigation').addClass('small_nav');
    	}
    } else {
    	  $('.hidden_navigation').removeClass('small_nav');
    }
    //end
    
    //sidebar + content bottom margins
    if( (!$('body.custompage').length) && (!$('body.home').length) ) {
      if  ( (winWidth < 1058) && ( $('#sidebar').height() > 78) )  {
    	  $('#sidebar').css({bottom: '10px'});
    	} else {
    	  $('#sidebar').css({bottom: '50px'});
    	}
    	
    	if ( !$('#sidebar').length ) {
        $('#content').css({bottom: '20px'});
      }

      if ( $('#sidebar').length ) {
        $('#content').css({bottom: '160px'});
      }
    	
	  }

  }
  
  adjustResize();
  $(window).resize(function(){adjustResize()});

// even-odd rows to table
	
    $("#content table tr:nth-child(even)").removeClass('odd').addClass('even'); $("#content table tr:nth-child(odd)").addClass("odd").removeClass('even');


// GALLERY

    if ($('.galleries').length) {
        $.each(galleryJSON, function() {
            for (var length = this.images.length, index = 0; index < length; index++) {
                this.images[index].image = this.images[index].full;
                this.images[index].description = this.images[index].caption;
            }
        });

       	$("#content .gallery a").click(function() {

			initGallery({
				'data': galleryJSON,
				'id': $(this).data('gallery-id'),
				'categories': true,
				'startingImage': $(this).data('image-index') ? $(this).data('image-index') : 0
			});

			return false;
		});
    }

	//PRESS ROOM -> Categories

	$("li:first-child a", pressroomCategories).addClass("active");

	pressroomCategory.click(function (e) {

		e.preventDefault();

		var category = $(this).data("category");

		pressroomCategory.removeClass("active");
		$(this).addClass("active");

		pressroomEntry.show();

		if (category != 0) {
			pressroomEntry.not("[data-category*=" + category + "]").hide();
		}

	});

	//PRESS ROOM -> Gallery

	$('.viewgallery', pressroomEntry).click(function () {

		var new_photos = {};

		$.each(pressroomJSON, function (k, photos) {

			new_photos[k] = {'images': []};

			$.each(photos, function (i, v) {
				new_photos[k]['images'].push({
					'image': v.src_full,
					'link': v.url,
					'description': v.caption
				});
			});
		});

		initGallery({
			'data': new_photos,
			'id': $(this).data('gallery-id')
		});

		return false;
	});


/*    if(typeof galleryJSON != "undefined"){
        var newGalleryJSON = {};
        newGalleryJSON.all = {};
        newGalleryJSON.all.name = "All Photos";
        newGalleryJSON.all.images = [];

        var aIndex = 0;

        $('#gallery-menu').append('<ul><li><a href="#" data-category="all">All Photos</a></li></ul>');

        $.each(galleryJSON, function(k,v) {
            $('#gallery-menu ul').append('<li><a href="#" data-category="' + k + '">' + v.name + '</a></li>');
            newGalleryJSON[k] = v;

            for (var length = this.images.length, index = 0; index < length; index++) {
                this.images[index].image = this.images[index].full;
                this.images[index].description = this.images[index].caption;

                newGalleryJSON.all.images[aIndex] = {};
                newGalleryJSON.all.images[aIndex] = this.images[index];
                aIndex++;
            }
        });

        galleryJSON = newGalleryJSON;

        var galleryHtml = "";

        $.each(galleryJSON.all.images, function(index, value){
            galleryHtml += '<a href="' + value.image + '" data-category="all" data-id="' + index + '" class="gallery-image"><img src="' + value.thumb + '"></a> ';
        });

        $( "#content .mCSB_container" ).append('<div id="gallery-wrapper">' + galleryHtml + '</div>');


        $(document).on('click', '#gallery-wrapper .gallery-image', function(e){
            e.preventDefault();
            initGallery($(this).data('category'), $(this).data('id'));
            return false;
        });

        $('#gallery-menu a').on('click', function(e){
            e.preventDefault();

            $('#gallery-wrapper').empty();

            var category = $(this).data('category');

            $.each(galleryJSON[category].images, function(index, value){
                $('#gallery-wrapper').append('<a href="' + value.image + '" data-category="' + category + '" data-id="' + index + '" class="gallery-image"><img src="' + value.thumb + '"></a> ');
            });

            return false;
        });
    }*/
    
    //galleries check for ipad only
    if (!iOS()) {
//      $('.galleries').remove();
    }
    
    //ipad friendly
  	if (iOS()) {

  		$('html').addClass('ipad');
  		
  		//Main menu - overview added
  		$('#main-menu ul>li>a').click(function(event) {

  			if ($(this).parent().find('ul').length) {
  				event.preventDefault();
  				$(this).parent().addClass('hover');
  				return false;
  			}
  		})

  		$('#main-menu ul>li>a').each(function() {
  			var li = $('<li/>').append($(this).clone().html('Overview'));
  			li.prependTo($(this).next('ul'))
  		})
  		//end
  		
  		//Datepicker
  		$('.dp-choose-date, date-pick').remove();
  		$('.dp-applied').each(function() {
  			var i = $(this);
  			i.hide().after($('<input>',{type:'date',rel:i.attr('id'),value:i.val(),size:14}));
  		});

  		$('.form').submit(function() {
  			$('input[type="date"]').each(function() {
  				var d = $(this).val().split('-');
  				$('input#'+$(this).attr('rel')).val(d[1]+'/'+d[2]+'/'+d[0]);
  			})
  			return true;
  		});//end

    }
    //ipad friendly end

});

//PLACEHOLDER FOR INPUT

jQuery.support.placeholder = (function(){
	var i = document.createElement('input');
	return 'placeholder' in i;
})();

//PLACEHOLDER FUNCTION

function inputPlaceholder(input) {

	if(!input.attr('placeholder') || input.attr('placeholder') == '' || $.support.placeholder) return;

	var placeholderText = input.attr('placeholder');

	var placeholder = $('<label for="'+input.attr('id')+'" class="placeholder"></label>').text(placeholderText);

	input.after(placeholder);

	input.click(function() {
		$(this).addClass("blur");
	}).blur(function(){
		$(this).removeClass("blur");
	});
	input.on('input keyup mouseup', function(e) {
		if (input.val() == '') placeholder.show();
		else placeholder.hide();
	});

}


function initGallery(options) {

	var settings = $.extend({
			'data': null,
			'id': null,
			'categories': false,
			'startingImage': 0
		}, options),
		$html = $('html'),
		$body = $('body'),
		galleryContainer = $('<div />', {'id': 'hebs-gallery'}),
		gallery = $('<div />', {'class': 'galleria'}),
		closeButton = $('<a />', {'class': 'close-button'}),
		photos = settings.data[settings.id].images,
		categoriesSelector = $('<select />', {'class': 'category-selector'});

	if (!settings.data || !settings.id) return false;

	$html.addClass('selection-disabled');

	$body.append(
		galleryContainer
			.append(gallery)
			.append(closeButton)
	);

	if (photos.length == 1) {
		galleryContainer.addClass('no-controls');
	}

	if( settings.categories == true ){

		$.each(settings.data, function(index, value) { categoriesSelector.append($('<option />', {'value': index, 'text': value.name})) });

		if ($('option', categoriesSelector).length > 1) {
			categoriesSelector.val(settings.id);
			categoriesSelector.appendTo(galleryContainer);
		}
 
	}

	galleryContainer.fadeIn(200, function(){
		Galleria.run('#hebs-gallery .galleria', {dataSource: photos, show: settings.startingImage});
	});

	Galleria.ready(function(){
		var gallery = this;

		closeButton.click(function(){
			gallery.pause();
			galleryContainer.fadeOut(200, function(){
				gallery.destroy();
				$(this).remove();
				$html.removeClass('selection-disabled');
			})
		});

		if( settings.categories == true ){
			categoriesSelector.change(function(){
				var photos = settings.data[$(this).val()].images;
				if (photos.length == 1) galleryContainer.addClass('no-controls');
				else galleryContainer.removeClass('no-controls');
				gallery.load(photos);
			});
			categoriesSelector.sSelect();
		}

	});
	$("#hebs-gallery select").sSelect();

}
function iOS() {
	var userAgent = navigator.userAgent;
	return ( userAgent.match(/iPad/i) || userAgent.match(/iPod/i) || userAgent.match(/iPhone/i));
};


//Logo color change
function setColors(img) {
  
	if (canvasSupported) {

			d = getDominantColor(img);
      mc = menuColor(d);
      
      var r,g,b,hsp, 
        a = rgbToHex(mc),
        logo = $('#logo');

          if (a.match(/^rgb/)) {
            a = a.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
            r = a[1];
            b = a[2];
            g = a[3];
          } else {
            a = +("0x" + a.slice(1).replace( // thanks to jed : http://gist.github.com/983661
                a.length < 5 && /./g, '$&$&'
              )
            );
            r = a >> 16;
            b = a >> 8 & 255;
            g = a & 255;
          }
          hsp = Math.sqrt( // HSP equation from http://alienryderflex.com/hsp.html
            0.299 * (r * r) +
            0.587 * (g * g) +
            0.114 * (b * b)
          );
          if (hsp>127.5) {
            logo.removeClass('dark').addClass('light');
            $('#logo i').fadeIn(3000);
          } else {
            $('#logo i').fadeOut(3000, function(){
              logo.removeClass('light').addClass('dark');
            });
            
          }

	}
}

function menuColor(c) {
	c = gainColor(255-~~((c.r+c.g+c.b)/3));
	return {r:c,g:c,b:c};
};

function gainColor(c) {
	var g = 2;
	if (c<128) {
		c=c/g;
	} else {
		c = Math.min(c*g,255);
	}
	return Math.round(c);
};

function rgbToHex(c) {
	return "#"+((1<<24)+(c.r<<16)+(c.g<<8)+c.b).toString(16).slice(1,7);
}
function canvasSupported() {
	return !!d.createElement("canvas").getContext;
};

function log(e){try{console.log(e)}catch(e){}}

 