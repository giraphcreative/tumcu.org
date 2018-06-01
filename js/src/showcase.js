

// onload
jQuery(document).ready(function($){

	// grab the showcase
	$( '.showcase' ).each(function(){
		var showcase = $( this );

		// set auto-rotate timer var so that it exists.
		var auto_rotate = 0;

		// count the slides
		var slide_count = showcase.find( '.slide' ).size();

		// if it exists
		if ( typeof( showcase ) !== 'undefined' ) {

			// grab the first slide
			var first_slide = showcase.find( '.slide.visible' );


			// grab the last slide
			var last_slide = showcase.find( '.slide' ).last();


			// function to switch to the previous slide
			var prev_slide = function() {

				// get current and next slide objects
				var current_slide = get_current_slide();
				var prev_slide = current_slide.prev(".slide");

				// if next slide doesn't exist, go back to the first
				if ( !prev_slide.length ) {
					prev_slide = last_slide;
				}

				// switch the slides
				current_slide.attr( 'class', 'slide' );
				prev_slide.attr( 'class', 'slide visible' );

				// wait a second and mimic infinite looping
				setTimeout(function(){
					current_slide.attr( 'class', 'slide hide-left' );
				}, 400 );

				// refresh showcase height
				showcase_height();

			};
			

			// function to switch to the next side.
			var next_slide = function() {

				// get current and next slide objects
				var current_slide = get_current_slide();
				var next_slide = current_slide.next( '.slide' );

				// if next slide doesn't exist, go back to the first
				if ( !next_slide.length ) {
					next_slide = first_slide;
				}

				// switch the slides
				current_slide.attr( 'class', 'slide hide-left' );
				next_slide.attr( 'class', 'slide visible' );

				// wait a second and mimic infinite looping
				setTimeout(function(){
					current_slide.attr( 'class', 'slide' );
				}, 400 );

				// refresh showcase height
				showcase_height();

			};


			// grab the current slide
			var get_current_slide = function(){
				return showcase.find( '.slide.visible' );
			};


			// function to resize the showcase div 
			// to match the image/video size
			var showcase_height = function(){
				var current_slide = get_current_slide(),
					current_slide_img = current_slide.find( 'img' );
				if ( showcase.find( '.slide-wrapper' ).length ) {
					var slide_wrapper_margin = showcase.find( '.slide-wrapper' ).css( 'margin-top' ).replace( 'px', '' ) * 2;
				} else {
					var slide_wrapper_margin = 0;
				}
				if ( $( window ).width() >= 768 ) {				
					showcase.height( current_slide_img.height() + slide_wrapper_margin );
				} else {
					showcase.height( current_slide.height() );
				}
			};


			// set showcase initial height when the first image is loaded.
			setTimeout( function() {
				showcase_height();

				// once we're loaded up, set a timer to auto-rotate the slides.
				if ( slide_count > 1 ) {
					auto_rotate = setInterval( next_slide, 10000 );
				}
			}, 500 );

			

			// update the showcase height on resize
			$( window ).resize(function(){
				var current_slide = get_current_slide();
				showcase_height();
			});


			// next/previous click
			showcase.find( '.showcase-nav a' ).click(function(){
				if ( $(this).hasClass( 'previous' ) ) {
					prev_slide();
				} else {
					next_slide();
				}

				// stop auto-rotation
				if ( slide_count > 1 ) {
					clearInterval( auto_rotate );
				}
			});

			// move slides to left if they mouse over the previous nav
			// gives the illusion of infinite scrolling
			showcase.find( '.showcase-nav a.previous' ).hover(function(){
				showcase.find( '.slide:not(.visible)' ).attr( 'class', 'slide hide-left' );
			});

			// move slides to right (default) if they mouse over the next nav
			// gives the illusion of infinite scrolling
			showcase.find( '.showcase-nav a.next' ).hover(function(){
				showcase.find( '.showcase .slide:not(.visible)' ).attr( 'class', 'slide' );
			});

		}

	});

});

