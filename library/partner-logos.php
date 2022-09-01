<?php


// ad showcase
function the_partner_logos() {

	// get the icons
	$icons = get_cmb_value( 'partner_logos' );

	// if it's an array
	if ( is_array( $icons ) ) {

		if ( !empty( $icons[0]['link'] ) && !empty( $icons[0]['image'] ) ) {

		// if it's an array, we'll assume it's got content
		?>
		<div class="partner-logos">
			<?php
			foreach ( $icons as $icon ) {
				if ( !empty( $icon['link'] ) && !empty( $icon['image'] ) ) { 
					?>
			<div class="partner-logo">
				<a href="<?php print $icon['link']; ?>" class="bypass"><img src="<?php print $icon['image']; ?>" alt="<?php print $icon['alt-text']; ?>"></a>
			</div>
					<?php 
				} 
			}
			?>
		</div>
		<?php
		}
	}
}


// add partner metaboxes
function partner_logos_metabox( $meta_boxes ) {

    // thumb showcase metabox
    $partner_logos_metabox = new_cmb2_box( array(
        'id' => 'partner_logos_metabox',
        'title' => 'Partner Logos',
        'object_types' => array( 'page' ),
        'context' => 'normal',
        'priority' => 'high',
    ) );

    $partner_logos_metabox_group = $partner_logos_metabox->add_field( array(
        'id' => CMB_PREFIX . 'partner_logos',
        'type' => 'group',
        'options' => array(
            'add_button' => __('Add Icon', 'cmb2'),
            'remove_button' => __('Remove Icon', 'cmb2'),
            'group_title'   => __( 'Icon {#}', 'cmb' ), // since version 1.1.4, {#} gets replaced by row number
            'sortable' => true, // beta
        )
    ) );

    $partner_logos_metabox->add_group_field( $partner_logos_metabox_group, array(
        'name' => 'Logo',
        'desc' => 'Upload a logo image, ideally a transparent PNG.',
        'id'   => 'image',
        'type' => 'file',
        'preview_size' => array( 90, 90 ),
        'sanitization_cb' => 'cmb2_relative_urls'
    ) );

    $partner_logos_metabox->add_group_field( $partner_logos_metabox_group, array(
        'name' => 'Logo Alt Text',
        'desc' => 'Set alt text for the logo that will be read off to visually impaired people.',
        'id'   => 'alt-text',
        'type' => 'text',
        'sanitization_cb' => false
    ) );

    $partner_logos_metabox->add_group_field( $partner_logos_metabox_group, array(
        'name' => 'Link',
        'desc' => 'Specify a URL to which this ad should link.',
        'id'   => 'link',
        'type' => 'text',
        'sanitization_cb' => 'cmb2_relative_urls'
    ) );

}
add_filter( 'cmb2_admin_init', 'partner_logos_metabox' );


