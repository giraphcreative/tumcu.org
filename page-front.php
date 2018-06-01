<?php

/*
Template Name: Homepage
*/

get_header();

?>

	<?php the_showcase(); ?>
	
	<div class="content-wide" role="main">
		<?php 
		
		the_icon_showcase();

		?>
	</div><!-- #content -->
	<div class="content-wide home-bottom">
		<?php
		if ( have_posts() ) :
			while ( have_posts() ) : the_post(); 
				the_content();
			endwhile;
		endif;
		?>
	</div>

	<?php the_boxes(); ?>

	<?php the_footer_image(); ?>

<?php

get_footer();

?>