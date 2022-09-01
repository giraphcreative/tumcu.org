<?php


// set a custom field prefix
define( "CMB_PREFIX", "_p_" );


// include some theme-related things
include( "library/core.php" );
include( "library/menus.php" );
include( "library/scripts.php" );


// an extra image manipulation function
include( "library/images.php" );


// include our metaboxes library
include( "library/metabox.php" );


// include quote metaboxes/functions
include( "library/button.php" );
include( "library/emergency.php" );
include( "library/showcase.php" );
include( "library/icons.php" );
include( "library/calculator.php" );
include( "library/boxes.php" );
include( "library/footer.php" );
include( "library/partner-logos.php" );


// add editor stylesheet
add_editor_style( 'editor-style.css' );


// pagination
function pagination( $prev = '&laquo;', $next = '&raquo;' ) {
    global $wp_query, $wp_rewrite;

    $current = ( $wp_query->query_vars['paged'] > 1 ? $wp_query->query_vars['paged'] : 1 );

    $pagination = array(
        'base' => @add_query_arg('paged','%#%'),
        'format' => '',
        'total' => $wp_query->max_num_pages,
        'current' => $current,
        'prev_text' => __($prev),
        'next_text' => __($next),
        'type' => 'plain'
	);

    if ( $wp_rewrite->using_permalinks() ) $pagination['base'] = user_trailingslashit( trailingslashit( remove_query_arg( 's', get_pagenum_link( 1 ) ) ) . 'page/%#%/', 'paged' );

    if ( !empty($wp_query->query_vars['s']) ) $pagination['add_args'] = array( 's' => get_query_var( 's' ) );

    if ( is_paged() ) {
        print '<div class="pagination">' . paginate_links( $pagination ) . '</div>';
    }
}



function get_menu_name_by_location( $location ) {
    if( empty($location) ) return false;

    $locations = get_nav_menu_locations();
    if( ! isset( $locations[$location] ) ) return false;

    $menu_obj = get_term( $locations[$location], 'nav_menu' );

    return $menu_obj->name;
}

