<?php
/**
 * Plugin Name: Rescue Me — Dog Block Plugin
 * Plugin URI: https://github.com/KarenCodes/rescue-me-dog-block/
 * Description: Rescue Me — Dog Block is a Gutenberg plugin created via create-guten-block.
 * CBG Author: mrahmadawais, maedahbatool
 * CBG Author URI: https://AhmadAwais.com/
 * Author: Karen Neumann, Brezo Cordero
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
