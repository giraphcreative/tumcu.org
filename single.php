<?php
/**
 * The Template for displaying all single posts
 */

get_header();

?>

	<div class="content-wide" role="main">
		<?php 
		if ( have_posts() ) :
			while ( have_posts() ) : the_post(); 
				?>
				<h1><?php the_title(); ?></h1>
				<?php the_post_thumbnail(); ?>
				<?php the_content(); ?>
				<p class="quiet">Posted by <?php print get_the_author_link() ?> in <?php print get_the_category_list( ', ' ) ?>.</p>

				<hr />
				<h1>Comments</h1>
				<div id="disqus_thread"></div>
				<script>

				var disqus_config = function () {
				this.page.url = '<?php the_permalink() ?>';  // Replace PAGE_URL with your page's canonical URL variable
				this.page.identifier = '<?php the_ID() ?>'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
				};

				(function() { // DON'T EDIT BELOW THIS LINE
				var d = document, s = d.createElement('script');
				s.src = 'https://va-united-methodist-credit-union.disqus.com/embed.js';
				s.setAttribute('data-timestamp', +new Date());
				(d.head || d.body).appendChild(s);
				})();
				</script>
				<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                                
				<?php
			endwhile;
		endif;
		?>
	</div>

<?php

get_footer();

?>