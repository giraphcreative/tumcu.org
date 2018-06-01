

// onload responsive footer and menu stuff
jQuery(document).ready(function($){

	if ( $( '.products' ) ) {

		// store the products container and its list div.
		var products = $( '.products' );
		var product_list = products.find( '.product-list' );

		// we start on page one
		var page = 1;
		
		if ( product_list.length ) {

			// store product nav buttons
			var product_nav = products.find( 'button.product-nav' );
			var product_nav_next = products.find( 'button.product-nav.next' );
			var product_nav_previous = products.find( 'button.product-nav.previous' );

			// count total products
			var total_products = product_list.find( '.product' ).length;

			var set_buttons = function() {

				// get the width of the product list
				var product_list_width = product_list.width();

				// grab a product and get it's width, including padding and margin.
				var a_product = products.find('.product');
				var product_width = a_product.width() + ( parseFloat( a_product.css('margin-right').replace('px','') ) * 2 ) + ( parseFloat( a_product.css('padding-right').replace('px','') ) * 2 );
				
				// count products per page
				var products_per_page = Math.round( product_list_width / product_width );

				// count total pages
				var total_pages = Math.ceil( total_products / products_per_page );

				// if not page one, enable the previous button
				if ( page > 1 ) {
					product_nav_previous.prop( "disabled", false );
				}

				// if on last page, disable next button
				if ( page == total_pages ) {
					product_nav_next.prop( "disabled", true );
				}

				// if we're at the beginning, disable the previous button
				if ( page == 1 ) {
					product_nav_previous.prop( "disabled", true );
				}

				// if we aren't at the end, enable the next button
				if ( page < total_pages ) {
					product_nav_next.prop( "disabled", false );
				}

				// in the case that the number of products only calls for one page,
				// deem the product nav buttons unnecessary.
				if ( page == 1 && page == total_pages ) {
					product_nav.addClass( 'unnecessary' );
					product_list.addClass( 'no-nav' );
				}
			};

			// set buttons based on status
			set_buttons();

			// handle product-nav clicks
			product_nav.click(function(){

				// parse the next/previous class from the button
				var nav_class = $( this ).attr( 'class' ).replace( 'product-nav ', '' );

				// get the width of the product list
				var product_list_width = product_list.width();

				// grab a product and get it's width, including padding and margin.
				var a_product = products.find('.product');
				var product_width = a_product.width() + ( parseFloat( a_product.css('margin-right').replace('px','') ) * 2 ) + ( parseFloat( a_product.css('padding-right').replace('px','') ) * 2 );
				
				// count products per page
				var products_per_page = Math.round( product_list_width / product_width );

				// count total pages
				var total_pages = Math.ceil( total_products / products_per_page );


				// NEXT clicked
				if ( nav_class == 'next' ) {

					// subtract from the text indentation
					product_list.css( 'text-indent', parseInt( product_list.css( 'text-indent' ) ) - product_list_width );

					// increase page
					page = page + 1;

					// set buttons based on status
					set_buttons();

				}

				// PREVIOUS clicked
				if ( nav_class == 'previous' ) {

					// set the text indentation to slide to the 'right'
					product_list.css( 'text-indent', parseInt( product_list.css( 'text-indent' ) ) + product_list_width );
					
					// decrease page
					page = page - 1;

					// set buttons based on status
					set_buttons();

					// in case we changed screen sizes.
					if ( parseInt( product_list.css( 'text-indent' ) ) > 0 ) {
						product_list.css( 'text-indent', 0 );
					}

				}
			});
			

			// reset product slider when window is resized.
			$( window ).resize(function(){
				product_list.css( 'text-indent', 0 );
				page = 1;
				set_buttons();
			});

		}

	}

});

