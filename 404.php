<?php
/**
 * The template for displaying 404 pages (Not Found)
 */

get_header(); ?>


	<div class="site-content content-wide" role="main">

		<h1>Not Found</h1>
		<p>We couldn't find a page at the URL you requested. Navigate using the menu, or search using the form below.</p>
		<p class="search-form"><?php print get_search_form(); ?></p>

	</div>

<?php

get_footer();

?>