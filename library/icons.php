<?php


// ad showcase
function the_icon_showcase() {

	// get the icons
	$icons = get_cmb_value( 'icon_showcase' );

	// if it's an array
	if ( is_array( $icons ) ) {

		if ( !empty( $icons[0]['link'] ) && !empty( $icons[0]['image'] ) ) {

		// if it's an array, we'll assume it's got content
		?>
		<div class="icons">
			<?php
			foreach ( $icons as $icon ) {
				if ( !empty( $icon['link'] ) && !empty( $icon['image'] ) ) { 
					?>
			<a href="<?php print $icon['link']; ?>">
				<img src="<?php print $icon['image']; ?>" alt="<?php print ( !empty( $icon['alt-text'] ) ? $icon['alt-text'] : $icon['title'] ); ?>">
			</a>
					<?php 
				} 
			}
			?>
		</div>
		<?php
		}
	}
}


?>