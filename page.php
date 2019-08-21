<?php

get_header();

?>

	<?php the_showcase(); ?>
	
	<div class="content-wide" role="main">
		<?php 
		
		if ( have_posts() ) :
			while ( have_posts() ) : the_post(); 
				if ( get_cmb_value( 'layout-title-hide' ) != 'on' ) {
					?>
			<h1 class="post-title"><?php the_title(); ?></h1>
					<?php
				}
				if ( has_cmb_value( 'right-content' ) ) {
					?><div class="half first"><?php
				}
				the_content();
				if ( has_cmb_value( 'right-content' ) ) {
					?></div><div class="half"><?php print apply_filters( 'the_content', get_cmb_value( 'right-content' ) ); ?></div><?php
				}
			endwhile;
		endif;
		
		the_icon_showcase();

		?>
	</div><!-- #content -->

	<?php the_boxes(); ?>

	<?php the_footer_image(); ?>

<?php

get_footer();

?>