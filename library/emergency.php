<?php

function the_emergency_bar() {

	// narrow content
    $emergency_text = get_post_meta( get_the_ID(), CMB_PREFIX . "emergency-text", 1 );
    $emergency_link = get_post_meta( get_the_ID(), CMB_PREFIX . "emergency-link", 1 );
    $emergency_color = get_post_meta( get_the_ID(), CMB_PREFIX . "emergency-color", 1 );

	if ( !empty( $emergency_text ) ) {
		?>
	<div class="emergency-bar-container <?php print $emergency_color; ?> <?php print md5( $emergency_text ); ?>">
		<div class="wrap">
			<i class="fa fa-close">X</i>
			<?php if ( !empty( $emergency_link ) ) { ?><a href="<?php print $emergency_link ?>"><?php } ?>
			<div class="emergency-bar-text">
				<?php print do_shortcode( $emergency_text ) ?>
			</div>
			<?php if ( !empty( $emergency_link ) ) { ?></a><?php } ?>
		</div>
	</div>
		<?php
	}

}

?>