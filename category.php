<?php
/**
 * The template for displaying Category pages
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

get_header(); ?>

	<div class="content-wide" role="main">

		<?php 
		if ( have_posts() ) : ?>

			<h1>Category: <span><?php printf( single_cat_title( '', false ) ); ?></span></h1>

			<?php
			// Show an optional term description.
			$term_description = term_description();
			if ( ! empty( $term_description ) ) :
				printf( '<div class="description">%s</div>', $term_description );
			endif;


			while ( have_posts() ) : the_post(); 
				?>
				<hr />
				<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
				<?php the_excerpt(); ?>
				<p class="quiet">Posted by <?php print get_the_author_link() ?> in <?php print get_the_category_list( ', ' ) ?>.</p>
				<?php
			endwhile;

		endif;
		?>
	</div><!-- #content -->

	<?php pagination(); ?>

<?php

get_footer();

?>