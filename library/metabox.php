<?php


// init cmb2
require_once( 'cmb2/init.php' );


function cmb2_relative_urls( $value, $field_args, $field ) {
    if ( stristr( $value, 'http' ) ) {
        $value = str_replace( get_site_url(), '', $value );
    }
    return $value;
}


// add metabox(es)
function page_metaboxes( $meta_boxes ) {



    // thumb showcase metabox
    $right_metabox = new_cmb2_box( array(
        'id' => 'right_metabox',
        'title' => 'Right Column Content',
        'object_types' => array( 'page' ),
        'context' => 'normal',
        'priority' => 'high',
    ) );

    $right_metabox->add_field( array(
        'name' => 'Right Column Content',
        'id'   => CMB_PREFIX . 'right-content',
        'type' => 'wysiwyg',
    ) );


    // showcase metabox
    $showcase_metabox = new_cmb2_box( array(
        'id' => 'showcase_metabox',
        'title' => 'Showcase',
        'object_types' => array( 'page' ), // post type
        'context' => 'normal',
        'priority' => 'high',
    ) );

    $showcase_metabox_group = $showcase_metabox->add_field( array(
        'id' => CMB_PREFIX . 'showcase',
        'type' => 'group',
        'options' => array(
            'add_button' => __('Add Slide', 'cmb2'),
            'remove_button' => __('Remove Slide', 'cmb2'),
            'group_title'   => __( 'Slide {#}', 'cmb' ), // since version 1.1.4, {#} gets replaced by row number
            'sortable' => true, // beta
        )
    ) );
    /*
    $showcase_metabox->add_group_field( $showcase_metabox_group, array(
        'name' => 'Subtitle',
        'description' => 'Enter the slide content.',
        'id'   => 'subtitle',
        'type' => 'wysiwyg',
        'options' => array (
            'textarea_rows' => 8
        )
    ) );
    */
    $showcase_metabox->add_group_field( $showcase_metabox_group, array(
        'name' => 'Title',
        'description' => 'Enter a slide title.',
        'id'   => 'title',
        'type' => 'text'
    ) );
    $showcase_metabox->add_group_field( $showcase_metabox_group, array(
        'name' => 'Content',
        'description' => 'Enter the content for this slide.',
        'id'   => 'content',
        'type' => 'wysiwyg',
        'options' => array(
            'textarea_rows' => 5,
        )
    ) );
    $showcase_metabox->add_group_field( $showcase_metabox_group, array(
        'name' => 'Link',
        'description' => 'Enter a slide link.',
        'id'   => 'link',
        'type' => 'text',
        'sanitization_cb' => 'cmb2_relative_urls'
    ) );
    $showcase_metabox->add_group_field( $showcase_metabox_group, array(
        'name' => 'Image/Video',
        'description' => 'Select an image or paste in a video URL.',
        'id'   => 'image',
        'type' => 'file',
        'preview_size' => array( 350, 150 ),
        'sanitization_cb' => 'cmb2_relative_urls'
    ) );
    /*
    $showcase_metabox->add_group_field( $showcase_metabox_group, array(
        'name' => 'Video URL (mp4)',
        'description' => 'Select a video in mp4 format for the background of the slide.',
        'id'   => 'video_mp4',
        'type' => 'file',
        'sanitization_cb' => 'cmb2_relative_urls'
    ) );
    $showcase_metabox->add_group_field( $showcase_metabox_group, array(
        'name' => 'Video URL (webm)',
        'description' => 'Select a video in webm format for the background of the slide.',
        'id'   => 'video_webm',
        'type' => 'file',
        'sanitization_cb' => 'cmb2_relative_urls'
    ) );
    */



    // thumb showcase metabox
    $icon_showcase_metabox = new_cmb2_box( array(
        'id' => 'icon_showcase_metabox',
        'title' => 'Icons',
        'object_types' => array( 'page' ),
        'context' => 'normal',
        'priority' => 'high',
    ) );

    $icon_showcase_metabox_group = $icon_showcase_metabox->add_field( array(
        'id' => CMB_PREFIX . 'icon_showcase',
        'type' => 'group',
        'options' => array(
            'add_button' => __('Add Icon', 'cmb2'),
            'remove_button' => __('Remove Icon', 'cmb2'),
            'group_title'   => __( 'Icon {#}', 'cmb' ), // since version 1.1.4, {#} gets replaced by row number
            'sortable' => true, // beta
        )
    ) );

    $icon_showcase_metabox->add_group_field( $icon_showcase_metabox_group, array(
        'name' => 'Icon Image',
        'desc' => 'Upload a 90x90 pixel icon image, ideally a transparent PNG with the icon in white.',
        'id'   => 'image',
        'type' => 'file',
        'preview_size' => array( 90, 90 ),
        'sanitization_cb' => 'cmb2_relative_urls'
    ) );

    $icon_showcase_metabox->add_group_field( $icon_showcase_metabox_group, array(
        'name' => 'Image Alt Text',
        'desc' => 'Set alt text for the icon.',
        'id'   => 'alt-text',
        'type' => 'text',
        'sanitization_cb' => false
    ) );

    $icon_showcase_metabox->add_group_field( $icon_showcase_metabox_group, array(
        'name' => 'Title',
        'desc' => 'Set a title to display below this icon.',
        'id'   => 'title',
        'type' => 'text',
        'sanitization_cb' => false
    ) );

    $icon_showcase_metabox->add_group_field( $icon_showcase_metabox_group, array(
        'name' => 'Link',
        'desc' => 'Specify a URL to which this ad should link.',
        'id'   => 'link',
        'type' => 'text',
        'sanitization_cb' => 'cmb2_relative_urls'
    ) );

    $icon_showcase_metabox->add_group_field( $icon_showcase_metabox_group, array(
        'name' => 'Color',
        'desc' => 'Choose a color for the background of the icon and the text-color.',
        'id'   => 'color',
        'type' => 'select',
        'options' => array(
            'navy' => "Navy",
            'blue' => "Blue",
            'teal' => "Teal",
            'green' => "Green"
        ),
        'default' => 'navy'
    ) );

    

    // accordion metabox
    $accordion_metabox = new_cmb2_box( array(
        'id' => 'accordion_metabox',
        'title' => 'Boxes',
        'desc' => 'Boxes of content that alternate colors between white and grey.',
        'object_types' => array( 'page' ), // post type
        'context' => 'normal',
        'priority' => 'high',
    ) );

    $accordion_metabox_group = $accordion_metabox->add_field( array(
        'id' => CMB_PREFIX . 'accordion',
        'type' => 'group',
        'options' => array(
            'add_button' => __('Add Box', 'cmb'),
            'remove_button' => __('Remove Box', 'cmb'),
            'group_title'   => __( 'Content Box {#}', 'cmb' ), // since version 1.1.4, {#} gets replaced by row number
            'sortable' => true, // beta
        )
    ) );

    $accordion_metabox->add_group_field( $accordion_metabox_group, array(
        'name' => 'Title',
        'id'   => 'title',
        'type' => 'text',
        'sanitization_cb' => false
    ) );

    $accordion_metabox->add_group_field( $accordion_metabox_group, array(
        'name' => 'Content',
        'id'   => 'content',
        'type' => 'wysiwyg',
        'show_names' => false,
        'options' => array( 'textarea_rows' => 7 )
    ) );



    // thumb showcase metabox
    $footer_image_showcase_metabox = new_cmb2_box( array(
        'id' => 'footer_image_metabox',
        'title' => 'Footer Image',
        'object_types' => array( 'page' ),
        'context' => 'normal',
        'priority' => 'high',
    ) );

    $footer_image_showcase_metabox->add_field( array(
        'name' => 'Image',
        'desc' => 'Upload a full width image/photo for the footer.',
        'id'   => CMB_PREFIX . 'footer-image',
        'type' => 'file',
        'preview_size' => array( 100, 100 ),
        'sanitization_cb' => 'cmb2_relative_urls'
    ) );

    $footer_image_showcase_metabox->add_field( array(
        'name' => 'Alt text',
        'desc' => 'Specify alt text for this slide.',
        'id'   => CMB_PREFIX . 'footer-alt-text',
        'type' => 'text',
    ) );

    $footer_image_showcase_metabox->add_field( array(
        'name' => 'Link',
        'desc' => 'Specify a URL to which this ad should link.',
        'id'   => CMB_PREFIX . 'footer-image-link',
        'type' => 'text',
        'sanitization_cb' => 'cmb2_relative_urls'
    ) );



    // thumb showcase metabox
    $layout_metabox = new_cmb2_box( array(
        'id' => 'layout_metabox',
        'title' => 'Layout Options',
        'object_types' => array( 'page' ),
        'context' => 'side',
        'priority' => 'high',
    ) );

    $layout_metabox->add_field( array(
        'name' => 'Hide title?',
        'id'   => CMB_PREFIX . 'layout-title-hide',
        'type' => 'checkbox',
    ) );



    // emergency metabox
    $emergency_metabox = new_cmb2_box( array(
        'id' => 'emergency_metabox',
        'title' => 'Emergency Bar',
        'desc' => "An emergency bar on the top to indicate local news or bring people into a specific area of the site when there's something you want them to read.",
        'object_types' => array( 'page' ), // post type
        'context' => 'normal',
        'priority' => 'high',
    ));

    $emergency_metabox->add_field( array(
        'name' => 'Emergency Text',
        'id'   => CMB_PREFIX . 'emergency-text',
        'type' => 'text',
    ) );

    $emergency_metabox->add_field( array(
        'name' => 'Link',
        'desc' => 'Where should the emergency bar link to.',
        'id'   => CMB_PREFIX . 'emergency-link',
        'type' => 'text',
        'sanitization_cb' => 'cmb2_relative_urls'
    ) );

    $emergency_metabox->add_field( array(
        'name' => 'Color',
        'desc' => 'What color should the emergency bar be?',
        'id'   => CMB_PREFIX . 'emergency-color',
        'type' => 'select',
        'options' => array(
            'red' => 'Red',
            'orange' => 'Orange',
            'yellow' => 'Yellow',
            'lime' => 'Lime',
            'navy' => 'Navy',
            'blue' => 'Blue',
            'teal' => 'Teal'
        )
    ) );


}
add_filter( 'cmb2_admin_init', 'page_metaboxes' );



// get CMB value
function get_cmb_value( $field ) {
    return get_post_meta( get_the_ID(), CMB_PREFIX . $field, 1 );
}


// get CMB value
function has_cmb_value( $field ) {
    $cval = get_cmb_value( $field );
    return ( !empty( $cval ) ? true : false );
}


// get CMB value
function show_cmb_value( $field ) {
    print get_cmb_value( $field );
}


// get CMB value
function show_cmb_wysiwyg_value( $field ) {
    print apply_filters( 'the_content', get_cmb_value( $field ) );
}


function cmb2_metabox_show_on_template( $display, $meta_box ) {
    if ( isset( $meta_box['show_on']['key'] ) && isset( $meta_box['show_on']['value'] ) ) :
        if( 'template' !== $meta_box['show_on']['key'] )
            return $display;

        // Get the current ID
        if( isset( $_GET['post'] ) ) $post_id = $_GET['post'];
        elseif( isset( $_POST['post_ID'] ) ) $post_id = $_POST['post_ID'];
        if( !isset( $post_id ) ) return false;

        $template_name = get_page_template_slug( $post_id );
        if ( !empty( $template_name ) ) $template_name = substr($template_name, 0, -4);

        // If value isn't an array, turn it into one
        $meta_box['show_on']['value'] = !is_array( $meta_box['show_on']['value'] ) ? array( $meta_box['show_on']['value'] ) : $meta_box['show_on']['value'];

        // See if there's a match
        return in_array( $template_name, $meta_box['show_on']['value'] );
    else:
        return $display;
    endif;
}
add_filter( 'cmb2_show_on', 'cmb2_metabox_show_on_template', 10, 2 );


