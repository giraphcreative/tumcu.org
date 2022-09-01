

// onload responsive footer and menu stuff
jQuery(document).ready(function($){

	// handle clicks on online banking button
	$( '.banking' ).on( 'click', function(){
		$( '.banking-container' ).slideToggle( 400 );
	});

});

