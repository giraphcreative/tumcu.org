<?php


function the_footer_image() {
	if ( has_cmb_value('footer-image') && has_cmb_value( 'footer-image-link') ) {
	?>
		<div class="footer-image">
			<?php if ( has_cmb_value( 'footer-image-link' ) ) { print '<a href="' . get_cmb_value( 'footer-image-link' ) . '">'; } ?>
			<img src="<?php show_cmb_value( 'footer-image' ); ?>" alt="footer-alt-text" />
			<?php if ( has_cmb_value( 'footer-image-link' ) ) { print '</a>'; } ?>
		</div>
	<?php
	}
}


?>