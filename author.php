<?php
/**
 * The template for displaying Archive pages
 */

get_header(); 

?>

	<div class="content-wide" role="main">

		<?php 
		if ( have_posts() ) : 
			?>
			<h1>Author: <span><?php the_author(); ?></span></h1>
			<?php 

			// Start the Loop.
			while ( have_posts() ) : the_post(); 
				?>
				<hr />
				<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
				<?php the_excerpt(); ?>
				<p class="quiet">Posted by <?php print get_the_author_link() ?> in <?php print get_the_category_list( ', ' ) ?>.</p>
				<?php
			endwhile;

		else :

			print "<p>There are currently no posts to list here.</p>";

		endif;
		?>

	</div><!-- #primary -->

	<?php pagination(); ?>

<?php

get_footer();

?>