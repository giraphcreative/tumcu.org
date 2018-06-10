<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>	
	
	</section>
	
	<footer class="footer">
		<div class="column first">
			<h5>The United Methodist Credit Union</h5>
			<p>Toll Free: 866-657-0004<br>
				Phone: 804-672-0200</p>
		</div>
		<div class="column">
			<h5>About</h5>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-one', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
		<div class="column small">
			<h5>Borrow</h5>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-two', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
		<div class="column">
			<h5>Save</h5>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-three', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
		<div class="column small">
			<h5>Pastors</h5>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-four', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
		<div class="column last">
			<h5>Churches</h5>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-five', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
	</footer><!-- #colophon -->

	<div class="colophon">
		<div class="column">
			<a href="/ncua-insurance-information/" target="_blank"><img src="<?php bloginfo( 'template_url' ); ?>/img/logo-ncua.png" alt="Insured by the NCUA"></a>Your savings are federally insured to at least $250,000, ad backed by the full faith and credit of the united states government.
		</div>
		<div class="column">
			<img src="<?php bloginfo( 'template_url' ); ?>/img/logo-equal-housing.png" alt="Equal Housing Lender Logo">Equal Housing Lender - We do business in accordance with the Federal Fair Housing Law and the Equal Housing Opportunity Act.
		</div>
		<div class="column links">
			<a href="https://co-opcreditunions.org/locator/" class="alignright"><img src="<?php bloginfo( 'template_url' ); ?>/img/logo-shared.png" class="alignright" alt="COOP Credit Union Locator"></a>
			<a href="https://www.facebook.com/unitedmethodistchurch/" class="alignright"><img src="<?php bloginfo( 'template_url' ); ?>/img/social-facebook.png" class="alignright" alt="Visit us on Facebook."></a>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-notices', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
	</div>

</div><!-- #container -->

<?php wp_footer(); ?>
</body>
</html>