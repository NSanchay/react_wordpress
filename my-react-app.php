<?php
/**
 * Plugin Name: Student Registration
 * Plugin URI: https://www.facebook.com/sanchay.upadhyay.31
 * Description: The best choice for a Collage or School to manage student detail and packages more efficiently & increase sales.
 * Version: 1.1
 * Author:NS Sanchay
 * Author URI: https://www.facebook.com/sanchay.upadhyay.31
 * Requires at least: 1.1
 * Requires PHP: 5.6
 * Tested up to: 6.0.1
 *
 * Text Domain: ns-sanchay
 * Domain Path: /i18n/languages/
 *
 * @package NS-sanchay
 * @category ns
 * @author ns
 */
if( ! defined( 'ABSPATH' ) ) { die( 'please run this plugins in wordpress. Thank You.' ); }

define( 'NS_PLUGIN_PATH' , trailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'NS_PLUGIN_URL' , trailingslashit( plugins_url( '/', __FILE__ ) ) );

class Ns_Student_Detail
{
    public function __construct() { 
        add_action( 'admin_enqueue_scripts', array( $this , 'load_react' ) );
    }
    public function load_react() { 
       wp_enqueue_script( 'ns-react-scripts', NS_PLUGIN_URL . 'dist/bundle/my_react_plugins.js', [ 'jquery', 'wp-element'], wp_rand(), true);
       wp_enqueue_style( 'ns-react-style',  NS_PLUGIN_URL . 'dist/bundle/my_react_plugins.css' );
        
    }
    public function ns_activate() {

    }
    public function ns_deactivate() {
        
    }

}

if ( class_exists( 'Ns_Student_Detail' ) ) {
        $class_object = new Ns_Student_Detail();
    }
register_activation_hook( 'activated_plugin', array( $class_object, 'ns_activate' ) );
register_deactivation_hook( 'deactivated_plugins', array( $class_object, 'ns_deactivate' ) );

require_once NS_PLUGIN_PATH . 'admin_menu/student_detail.php' ;