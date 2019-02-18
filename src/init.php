<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function rescue_me_cgb_block_assets() { // phpcs:ignore
	// Styles.
	wp_enqueue_style(
		'rescue_me-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);
}

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'rescue_me_cgb_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function rescue_me_cgb_editor_assets() { // phpcs:ignore
	// Scripts.
	wp_enqueue_script(
		'rescue_me-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: File modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'rescue_me-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);
}

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'rescue_me_cgb_editor_assets' );
/**
 * Rescue Me customizations
 * - custom post type
 * - custom meta
 */

/**
 * Custom Post Type - rescue_me_dogs
 */
 function rescue_me_custom_post_type_dog()
  {
    register_post_type(
      'rescue_me_dogs',
      array(

          'labels'            => array(
              'name'          => __('Dogs', 'rescue-me'),
              'singular_name' => __('Dog', 'rescue-me'),
              ),

          'menu_position'     => 5,

          'supports'          => array(
            'title',
            'editor',
            'thumbnail',
            'excerpt',
            'author',
            'custom-fields'
            ),

          'menu_icon'         => 'dashicons-heart',
          /*'taxonomies' => array('category','post_tag'),*/
          'public'            => true,
          'has_archive'       => true,
          'show_in_rest'      => true,
          'template_lock'     => 'all',

          'template'          => array(

            array( 'core/paragraph', array(
                'placeholder' => 'Enter information about this dog.',
                'className'   => 'rescue-me-about',
            ) ),

            array( 'core/paragraph', array(
                'placeholder' => 'Enter contact information for this dog.',
                'className'   => 'rescue-me-contact',
            ) ),

            array( 'core-embed/youtube', array(
                'className'   => 'rescue-me-video',
            ) ),

            array( 'rescue-me/dog-block', array(
                'placeholder' => 'Add dog information',
            ) )

          ),
      )
    );
}
/* add NAMESPACE next round
add_action('init', __NAMESPACE__ . '\\add_custom_post_type_dog'); */
add_action('init', 'rescue_me_custom_post_type_dog');
/*
* change Add title to Add Dog's Name for this CPT
*/
function rescue_me_enter_dog_name( $title ) {
    $screen = get_current_screen();
     if  ( 'rescue_me_dogs' == $screen->post_type ) {
          $title = __('Enter dog\'s name', 'rescue-me' );
     }
     return $title;
}
add_filter( 'enter_title_here', 'rescue_me_enter_dog_name' );
/**
 * Custom Meta for block
*/
function rescue_me_register_meta() {
    register_meta( 'post', 'rescue_me_meta_good_with_dogs', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'boolean',
    ) );
    register_meta( 'post', 'rescue_me_meta_good_with_cats', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'boolean',
    ) );
    register_meta( 'post', 'rescue_me_meta_good_with_kids', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'boolean',
    ) );
    register_meta( 'post', 'rescue_me_meta_gender', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ) );
    register_meta( 'post', 'rescue_me_meta_size', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ) );
    register_meta( 'post', 'rescue_me_meta_age', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ) );
}
add_action( 'init', 'rescue_me_register_meta' );
