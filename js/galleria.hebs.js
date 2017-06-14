/*
 * Galleria HeBS Theme
 * http://www.hebsdigital.com/
 *
 * Copyright (c) 2013, HeBS digital
 */

(function($) {

Galleria.addTheme({
    name: 'hebs',
    author: 'HeBS digital',
    css: 'galleria.hebs.css',
    defaults: {
		autoplay: false,
		debug: false,
		fullscreenDoubleTap: false,
		imageCrop: false,
		imagePan: false,
		initialTransition: 'fade',
		layerFollow: false,
		maxScaleRatio: 1,
		preload: 3,
		queue: false,
		showCounter: false,
		thumbCrop: true,
		thumbQuality: 'auto',
		transition: 'fade',
		transitionSpeed: 300,
		trueFullscreen: false
	},
    init: function(options) {

		var gallery = this;

		gallery.bind('loadstart', function() {
			gallery.$('loader').fadeIn(200);
        });

		gallery.bind('loadfinish', function() {
			gallery.$('loader').fadeOut(200);
        });

    }
});

}(jQuery));
