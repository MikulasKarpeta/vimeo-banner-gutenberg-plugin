<?php
/**
 * Plugin Name:       Vimeo Banner - Minimalio.org
 * Description:       Vimeo banner with play and mute buttons covering whole viewport
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Minimalio.org
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       minimalio
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function vimeo_banner_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'vimeo_banner_block_init' );

add_action( 'wp_enqueue_scripts', 'vimeo_banner_block_stylesheet', 99 );
function vimeo_banner_block_stylesheet() {
    wp_enqueue_style( 'vimeo-banner-style', plugins_url('/build/style-index.css', __FILE__), false, '1.0', 'all' );
}

//Add block scripts to child theme
add_action( 'wp_enqueue_scripts', 'vimeo_banner_scripts_block' );
function vimeo_banner_scripts_block() {
    wp_enqueue_script(
        'vimeo-banner-script',
		plugins_url('/build/vimeo-banner-script.js', __FILE__),
    );
}

add_action( 'wp_enqueue_scripts', 'vimeo_api_scripts_block' );
function vimeo_api_scripts_block() {
    wp_enqueue_script(
        'vimeo-api-script',
		'https://player.vimeo.com/api/player.js',
    );
}
