<!DOCTYPE html>
<!--[if IE 7]><html class="ie ie7" <?php language_attributes(); ?>><![endif]-->
<!--[if IE 8]><html class="ie ie8" <?php language_attributes(); ?>><![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!--><html <?php language_attributes(); ?>><!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width,initial-scale=1" />

<title><?php wp_title( '|', true, 'right' ); ?> TUMCU</title>

<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-3721994-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-3721994-1');
</script>

<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->

<?php wp_head(); ?>
<link href="<?php bloginfo( "template_url" ) ?>/css/main.css?v=22" rel="stylesheet" type="text/css">

</head>
<body <?php body_class(); ?>>

<?php the_emergency_bar(); ?>

<div class="container">

<header>

	<div class="wrap">
	
		<div class="logo">
			<a href="/" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
				<img src="<?php bloginfo( "template_url" ) ?>/img/logo.png" alt="<?php bloginfo( 'name' ); ?>">
			</a>
		</div>
		
		<div class="search">
			<?php get_search_form(); ?>
		</div>
		
		<a href="#" class="banking bypass">Online Banking</a>
		<div class="banking-container">
			<iframe id="tethered_frame" width="203" height="193"
				src="https://tumcu.cert.fec-dc.fiservapps.com/idp/AE9028B4/tethered"
				style="background: transparent; border: none;" scrolling="no" title="Online Banking Login">
				</iframe>
		</div>

		<a href="/join" class="join bypass">Become a Member</a>

		<div class="quick-links">
			<?php
			$quick_links = wp_get_nav_menu_items( 9 );
			?>
			<select>
				<option>Services</option>
				<?php
				foreach ( $quick_links as $ql ) {
					?><option value="<?php print $ql->url ?>"><?php print $ql->title ?></option><?php
				}
				?>
			</select>
		</div>

	</div>

	<nav role="navigation">
		<button class="menu-toggle">Show/hide Menu</button>
		<?php wp_nav_menu( array( 'theme_location' => 'main-menu', 'menu_class' => 'nav-menu' ) ); ?>
	</nav>
	
</header>

<section class="content">
	<a name="content"></a>
