var browser = {
  touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch
};

$(function(){

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

	
		
	if ($('#walking_tours_rfp').length) {
		
		$('#row_availablewalkingtours input').attr('disabled', 'disabled');
		
		$('#desiredwalkingtourdate').bind('dateSelected', function(e, selectedDate, $td, state) {
			var t = new Date(selectedDate),
				d = t.getDay(),
				tours = ['availablewalkingtours_iroquois_new_york_tour',null,'availablewalkingtours_times_square-rockefeller_center-the_edison_hotel-tuesdays','availablewalkingtours_hotel_belleclaire_tour','availablewalkingtours_washington_jefferson_hotel_tour','availablewalkingtours_cosmopolitan_hotel_tour','availablewalkingtours_hotel_chandler_tour']; // SUNDAY - first day of the week, no tours for MO 			
			$('#row_availablewalkingtours input').attr('disabled', 'disabled');
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
	
	// STYLISH SELECT
	$('form fieldset#information p > select').sSelect();
	
	// DATEPICKER
	$('.datepicker, .date-pick').each(function(){ $(this).attr('autocomplete', 'off'); }).datePicker({'clickInput': true, 'showYearNavigation': false});

// VALIDATION

	if ($.validationEngine) $(".bookingform, #content .form, #popup-offer form").validationEngine({ 'prettySelect' : true, 'usePrefix' : 'sSelect_'});
	
	
	if($('#photo ul > li').length > 1 ) {
		$('#photo').glide({
      autoplay: 5000,
      arrows: (browser.touch) ? false : true,
			nav: false
    });
		setTimeout(function(){$('#photo').addClass('glidejs-slider')}, 500);
	}
	
	if($('#read-more').length) {
		
	var k = ($('#text > #welcome + h1 + h2').length) ? 2 : 1;
	var childCount = (k < 1) ? ($('#text > *').length - 1) : ($('#text > *').length - 2); //IF THERE'S H2, THEN - 2 elements from counting.
	
	if( $('body').hasClass('home') && childCount > 0 ){
		$('#text > *').each(function(i){
			if( i > k && !$(this).hasClass('down') ) {
				$(this).addClass('hide');
			}
		});
	}
	
	if(childCount <= 1) $('#read-more').hide();
	
		//$('#text p').not(':first').wrap('<div class="hidden-text"/>').parent().hide();
		$('#read-more').click(function(e){
			//e.preventDefault();
			if( $(this).hasClass('up') ){
				$(this).removeClass('up').html('<i></i>Read More');
				$('#text .hide').hide();
			} else {
				$(this).addClass('up').html('<i></i>Read Less');
				$('#text .hide').show();
			}
			//$('.hidden-text').slideToggle();
		});
	}
	
	if( $('.gallery').length ) {
		$('.gallery a').click(function(e){
			//e.preventDefault();
			var id = $(this).data('id');
			initGallery(imgList[id], $(this).parent().index(), $(this).parents('.gallery').children('h3').text());
		});
	}
	
	function initGallery(imgs, curImg, h1){
		var galleryWrap = $('<div />', {id: "bigimage"}),
				gallerySwipe = $('<div />', {id: 'gallerySwipe'}),
				galleryList = $('<ul />'),
				li;

		gallerySwipe.appendTo(galleryWrap);


		$.each(imgs, function(i, val){
			li = $('<li />');
			$('<img />', {src: val.path, title: val.caption}).appendTo(li);

			//if(val.caption)	$('<p />').html(val.caption).appendTo(li);

			li.appendTo(galleryList);
		});	
		galleryList.appendTo(gallerySwipe);
		$('#content').hide();
		galleryWrap.insertAfter('#content').show();
		$('<h1></h1>').text(h1).prependTo(galleryWrap);
		$('<span class="btn larr back">Back to Gallery</span>').appendTo(galleryWrap);
		
		var glide = $('#gallerySwipe').glide({
      autoplay: 5000,
      arrows: (browser.touch) ? false : true,
			nav: false
    }).data('api_glide');

		glide.jump(curImg+1);

		$('.back').click(function(e){
			$(this).remove();
			galleryWrap.remove();
			$('#content').show();
		});

	}

});

