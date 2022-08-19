<?php

/* this page create a new menu and react is call here */

class Ns_Menu_React_Call {
    public function __construct() {
        add_action( 'admin_menu', array( $this , 'ns_menu_create' ) ) ;
        add_action( 'init', array( $this , 'custom_post_types' ) );
        add_action( 'add_meta_boxes', array( $this , 'ns_custom_field_in_student_post_type' ) );
        add_action( 'save_post' , array( $this , 'ns_save_detail' ) ,10,3);

    }
    public function ns_menu_create() {
        add_menu_page('student_detail', 'Student detail', 'manage_options', 'st_detail', array( $this, 'ns_call_react' ), 'dashicons-buddicons-replies');
    }
    public function ns_call_react() {
        ?> 
            <div class='wrap' >
                <div id='react_call' ></div>
            </div>
        <?php
    }
    function custom_post_types() {
        register_post_type( 'student', 
            [   'public'=> true, 
                'label'=> 'Student Detail',
                'menu_icon' => 'dashicons-admin-home',
                'show_ui' => true,
                'show_in_menu' => true,
            ] );
        // add_post_type_support( 'student' , 'excerpt');
        remove_post_type_support( 'student' , 'editor' );
        remove_post_type_support( 'student' , 'title' );
    }
    public function ns_custom_field_in_student_post_type(){
        add_meta_box( 'student' , 'Student Detail' , array( $this , 'ns_react_react_form' ) , array('post_type' => 'student' ) );
    }
    public function ns_react_react_form(){
        ?>
            <div class='wrap' >
                <div id='react_call' ></div>
            </div>
        <?php
    }
	function ns_save_detail($post_id, $post){
		if(isset($_POST['fname'])){
			update_post_meta(
				$post_id,
				's_fname', 
				$_POST['fname']
			);
            // wp_insert_post(array(
            //     'post_type' => 'student',
            //     'public' => true,
            //     'post_title' => $_REQUEST['fname'] . $_REQUEST['mname'] . $_REQUEST['lname'],
            //     // 'post_excerpt' => $_REQUEST['content'],
            //     // 'post_content' => $_REQUEST['content'],
                
            // ));
		}
        if(isset($_POST['lname'])){
			update_post_meta(
				$post_id,
				's_lname', 
				$_POST['lname']
			);
		}
        if(isset($_POST['mname'])){
			update_post_meta(
				$post_id,
				's_mname', 
				$_POST['mname']
			);
		}
        if(isset($_POST['email'])){
			update_post_meta(
				$post_id,
				's_email', 
				$_POST['email']
			);
		}
        if(isset($_POST['contact'])){
			update_post_meta(
				$post_id,
				's_contact', 
				$_POST['contact']
			);
		}
        if(isset($_POST['telephone'])){
			update_post_meta(
				$post_id,
				's_telephone', 
				$_POST['telephone']
			);
		}
        if(isset($_POST['gender'])){
			update_post_meta(
				$post_id,
				's_gender', 
				$_POST['gender']
			);
		}
        if(isset($_POST['f_fname'])){
			update_post_meta(
				$post_id,
				's_f_fname', 
				$_POST['f_fname']
			);
		}
        if(isset($_POST['f_lname'])){
			update_post_meta(
				$post_id,
				's_f_lname', 
				$_POST['f_lname']
			);
		}
        if(isset($_POST['f_mname'])){
			update_post_meta(
				$post_id,
				's_f_mname', 
				$_POST['f_mname']
			);
		}
        if(isset($_POST['m_fname'])){
			update_post_meta(
				$post_id,
				's_m_fname', 
				$_POST['m_fname']
			);
		}
        if(isset($_POST['m_lname'])){
			update_post_meta(
				$post_id,
				's_m_lname', 
				$_POST['m_lname']
			);
		}
        if(isset($_POST['m_mname'])){
			update_post_meta(
				$post_id,
				's_m_mname', 
				$_POST['m_mname']
			);
		}
        if(isset($_POST['gf_fname'])){
			update_post_meta(
				$post_id,
				's_gf_fname', 
				$_POST['gf_fname']
			);
		}
        if(isset($_POST['gf_lname'])){
			update_post_meta(
				$post_id,
				's_gf_lname', 
				$_POST['gf_lname']
			);
		}
        if(isset($_POST['gf_mname'])){
			update_post_meta(
				$post_id,
				's_gf_mname', 
				$_POST['gf_mname']
			);
		}

    }
}
new Ns_Menu_React_Call();