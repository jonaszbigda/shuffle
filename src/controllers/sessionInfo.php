<?php

    session_start();

    if(isset($_SESSION)){
        $data = array(
            'username' => $_SESSION['username'],
            'isLoggedIn' => $_SESSION['isLoggedIn']
        );
    
        echo json_encode($data);
    } else {
        $data = array(
            'username' => false,
            'isLoggedIn' => false
        );
    
        echo json_encode($data);
    }

?>