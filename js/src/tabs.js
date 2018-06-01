

// tab controls
jQuery(document).ready(function($){

	if ( $( '.tab-content:first' ).length ) {

		$( '.tab-nav li' ).click(function(){
			
			var target_class = $( this ).attr( 'class' );
			var content_top = $( '.tab-container' ).offset().top;

			$( '.tab-content:not(.'+target_class+'):visible' ).slideUp( 'slow' );
			$( '.tab-content.'+target_class+':hidden' ).slideDown( 'slow' );

			// scroll up if we're past the top of the content
			$( 'html,body' ).animate({ scrollTop: content_top }, 700 );

		});
	}

	if ( $( '.area-tabs' ).length ) {

		// clicks of the majors tab
		$( '.area-tab-navigation li:first-child' ).click(function(){
			$( '.area-tab-navigation li.active' ).removeClass( 'active' );
			$( this ).addClass( 'active' );
			$( '.area-tab-content.minors' ).removeClass( 'active' ).hide();
			$( '.area-tab-content.majors' ).addClass( 'active' ).show();
		});

		// clicks of the minors tab
		$( '.area-tab-navigation li:nth-child(2)' ).click(function(){
			$( '.area-tab-navigation li.active' ).removeClass( 'active' );
			$( this ).addClass( 'active' );
			$( '.area-tab-content.majors' ).removeClass( 'active' ).hide();
			$( '.area-tab-content.minors' ).addClass( 'active' ).show();
		});

	}

});

