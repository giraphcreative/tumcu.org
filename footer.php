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
			<p style="margin-bottom: 10px;">10330 Staples Mill Rd.<br>
			Glen Allen, VA 23060</p>
			<p style="margin-bottom: 10px;"><strong>Mailing Address:</strong><br>
			PO Box 9798<br>
			Henrico, VA 23228</p>
			<p>Toll Free: 866-657-0004<br>
				Mortgage Department: 877-332-4972<br>
				Routing Number: 251082673</p>
		</div>
		<div class="column">
			<h5><?php print get_menu_name_by_location( 'footer-one' ); ?></h5>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-one', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
		<div class="column small">
			<h5><?php print get_menu_name_by_location( 'footer-two' ); ?></h5>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-two', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
		<div class="column">
			<h5><?php print get_menu_name_by_location( 'footer-three' ); ?></h5>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-three', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
		<div class="column small">
			<h5><?php print get_menu_name_by_location( 'footer-four' ); ?></h5>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-four', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
		<div class="column last">
			<h5><?php print get_menu_name_by_location( 'footer-five' ); ?></h5>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-five', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
	</footer><!-- #colophon -->

	<div class="colophon">
		<div class="column">
			<a href="https://www.ncua.gov/support-services/share-insurance-fund" target="_blank"><img src="<?php bloginfo( 'template_url' ); ?>/img/logo-ncua.png" alt="Insured by the NCUA" class="ncua"></a>Your savings are federally insured to at least $250,000 and backed by the full faith and credit of the United States government.
		</div>
		<div class="column">
			<img src="<?php bloginfo( 'template_url' ); ?>/img/logo-equal-housing.png" alt="Equal Housing Lender Logo">Equal Housing Lender - We do business in accordance with the Federal Fair Housing Law and the Equal Housing Opportunity Act.
		</div>
		<div class="column links">
			<a href="https://www.facebook.com/TUMCreditUnion/" target="_blank" class="alignright"><img src="<?php bloginfo( 'template_url' ); ?>/img/social-facebook.png" class="alignright" alt="Visit us on Facebook."></a>
			<a href="https://www.linkedin.com/company/tumcu/" target="_blank" class="alignright"><img src="<?php bloginfo( 'template_url' ); ?>/img/social-linkedin.png" class="alignright" alt="Visit us on Facebook."></a>
			<a href="https://twitter.com/TUMCreditUnion" target="_blank" class="alignright"><img src="<?php bloginfo( 'template_url' ); ?>/img/social-twitter.png" class="alignright" alt="Visit us on Facebook."></a>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-notices', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
		<div class="disclaimer">Links to other websites have been provided solely as a member convenience. The credit union is unable to control the content of these sites and assumes no liability for the content, accuracy, or availability. Be advised that our privacy policies do not apply to linked websites, and the viewer should consult the privacy disclosure on that site for further information.</div>
	</div>


</div><!-- #container -->

<?php wp_footer(); ?>
</body>
</html>