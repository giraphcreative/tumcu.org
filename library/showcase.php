<?php


function the_showcase( $height = 600 ) {

	// get the slides
	$slides = get_post_meta( get_the_ID(), CMB_PREFIX . "showcase", 1 );

	if ( !empty( $slides ) ) {
		?>
		<div class="showcase">
		<?php
		$count = 0;
		foreach ( $slides as $key => $slide ) {
			unset( $title, $subtitle, $link, $video );
			if ( !empty( $slide["image"] ) ) {

				// store the title and subtitle
				$title = ( isset( $slide["title"] ) ? $slide["title"] : '' );
				$subtitle = ( isset( $slide["subtitle"] ) ? $slide["subtitle"] : '' );
				$link = ( isset( $slide["link"] ) ? $slide["link"] : '' );
				$video = ( !empty( $slide["video_mp4"] ) && !empty( $slide["video_webm"] ) ? '<video playsinline autoplay muted loop controls poster="' . $slide["image"] . '" class="bgvid">
    <source src="' . $slide["video_webm"] . '" type="video/webm">
    <source src="' . $slide["video_mp4"] . '" type="video/mp4">
</video>' : '' );

				// check if it's an image or video
				if ( p_is_image( $slide["image"] ) ) {
					// it's an image, so resize it and generate an img tag.
					$image = '<img src="' . $slide["image"] . '" alt="' . $title . '">';
				} else {
					// it's a video, so oEmbed that stuffs, yo
					$image = apply_filter( 'the_content', $slide["image"] );
				}

				?>
			<div class="slide<?php print ( $key == 0 ? ' visible' : '' ); ?>">
				<?php if ( !empty( $link ) ) { ?><a href="<?php print $link ?>" class="<?php print ( stristr( $link, 'vimeo' ) || stristr( $link, 'youtube' ) || stristr( $link, 'google.com/maps' ) ? 'lightbox-iframe' : '' ) ?>"><?php } ?>
				<?php 

				print $image;

				if ( !empty( $video ) ) {
					print $video;
				}

				?>
				<?php if ( !empty( $link ) ) { ?></a><?php } ?>
				
				<?php if ( !empty( $title ) || !empty( $subtitle ) ) { ?>
				<div class="slide-content">
					<div class="wrap">
					<?php if ( !empty( $title ) ) { ?><h1><?php print $title; ?></h1><?php } ?>
					<?php if ( !empty( $subtitle ) ) { ?><h2><?php print $subtitle; ?></h2><?php } ?>
					</div>
				</div>
				<?php } ?>
			</div>
				<?php
				$count++;
			}
		}

		if ( $count > 1 ) { 
			?>
			<div class="showcase-nav">
				<a class="previous">Previous</a>
				<a class="next">Next</a>
			</div>
			<?php
		}
		?>
		</div>
		<?php
	}
}


function the_photo_showcase( $height = 600 ) {

	// get the slides
	$slides = get_post_meta( get_the_ID(), CMB_PREFIX . "showcase", 1 );

	if ( !empty( $slides ) ) {
		?>
		<div class="showcase">
		<?php
		$count = 0;
		foreach ( $slides as $key => $slide ) {
			if ( !empty( $slide["image"] ) ) {

				// store the title and subtitle
				$title = ( isset( $slide["title"] ) ? $slide["title"] : '' );
				$subtitle = ( isset( $slide["subtitle"] ) ? $slide["subtitle"] : '' );
				$link = ( isset( $slide["link"] ) ? $slide["link"] : '' );
				$button = ( isset( $slide["button"] ) ? $slide["button"] : '' );
				$video = ( isset( $slide["video_mp4"] ) && isset( $slide["video_webm"] ) ? '<video playsinline autoplay muted loop poster="' . $slide["image"] . '" class="bgvid">
    <source src="' . $slide["video_webm"] . '" type="video/webm">
    <source src="' . $slide["video_mp4"] . '" type="video/mp4">
</video>' : '' );

				// check if it's an image or video
				if ( p_is_image( $slide["image"] ) ) {
					// it's an image, so resize it and generate an img tag.
					$image = '<img src="' . p_image_resize( $slide["image"], 800, $height, 300 ) . '" class="slide-image-small">';
					$image .= '<img src="' . p_image_resize( $slide["image"], 1220, $height, true ) . '" class="slide-image-large">';
				} else {
					// it's a video, so oEmbed that stuffs, yo
					$image = apply_filters( 'the_content', $slide["image"] );
				}

				?>
			<div class="slide<?php print ( $key == 0 ? ' visible' : '' ); ?>">
				<?php 
				if ( !empty( $link ) ) { 
					?><a href="<?php print $link ?>" class="<?php print ( stristr( $link, 'vimeo' ) || stristr( $link, 'youtube' ) || stristr( $link, 'google.com/maps' ) ? 'lightbox-iframe' : '' ) ?>"><?php 
				} 

				print $image;

				if ( !empty( $video ) ) {
					print $video;
				}

				if ( !empty( $link ) ) { ?></a><?php } 

				if ( !empty( $title ) || !empty( $subtitle ) ) { ?>
				<div class="slide-content">
					<div class="wrap">
					<?php if ( !empty( $title ) ) { ?><h1><?php print $title; ?></h1><?php } ?>
					<?php if ( !empty( $subtitle ) ) { ?><h2><?php print $subtitle; ?></h2><?php } ?>
					<?php if ( !empty( $button ) ) { ?><div class="slide-button"><?php print $button ?></div><?php } ?>
					</div>
				</div>
				<?php } ?>
			</div>
				<?php
				$count++;
			}
		}

		if ( $count > 1 ) { 
			?>
			<div class="showcase-nav">
				<a class="previous">Previous</a>
				<a class="next">Next</a>
			</div>
			<?php
		}
		?>
		</div>
		<?php
	}
}




?>