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

	<?php 
	// the query
	$the_query = new WP_Query( array(
		'posts_per_page' => 3,
	)); 
	?>
	
	<div class="recent-posts content-wide group">
		<h2>News &amp; Information</h2>
	<?php if ( $the_query->have_posts() ) : ?>
		<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
		<div class="third">
			<h4><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h4>
			<?php the_excerpt(); ?>
		</div>
		<?php endwhile; ?>
		<?php wp_reset_postdata(); ?>
		<div class="group buttons text-center">
			<a href="/blog" class="btn">Read More Articles</a>
		</div>
	</div>
	<?php else : ?>
	<p><?php __('No News'); ?></p>
	<?php endif; ?>

	<div class="partner-logo-title">
		<h3>Our Partners</h3>
	</div>
	<?php the_partner_logos(); ?>

	<?php the_footer_image(); ?>

<?php

get_footer();

?>