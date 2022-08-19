<?php
function ns_save_detail($post_id, $post){
		if(isset($_POST['fname'])){
			update_post_meta(
				$post_id,
				's_fname', 
				$_POST['fname']
			);
		}
    }
        