<?php
    header('Access-Control-Allow-Origin: http://localhost');



    $id = $_GET['id'];

    if(isset($_COOKIE["userVotes"]))
    {
        $cookies = explode("/", $_COOKIE["userVotes"]);
        $votedBefore = in_array($id, $cookies);

        if($votedBefore == true)
        {
            echo 1;
        } else {
            echo 0;
        };
    } else {
        echo 0;
    };

?>