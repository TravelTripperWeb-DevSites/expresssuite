

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".main-nav").offset().top > 50) {
        $(".fixed-nav").addClass("fixed-onscroll");
		$(".menu-toggle .fa").addClass("dark");
    } else {
        $(".fixed-nav").removeClass("fixed-onscroll");
		$(".menu-toggle .fa").removeClass("dark");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.main-nav li a, .link').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-30
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function(){
	$(".menu-toggle").click(function(){
		$(".main-nav").stop().slideToggle(300);
	});
	$(".scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#our-story").offset().top-30
    }, 1000);
});
});