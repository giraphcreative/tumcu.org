<?php


function tumcu_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'tumcu_excerpt_length', 999 );


