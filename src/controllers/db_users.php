<?php

    $host_users = "127.0.0.1";
    $user_users = "root";
    $pass_users = "";
    

    try {
        $conn_users = new PDO("mysql:host=$host_users;dbname=db_users", $user_users, $pass_users);
        $conn_users->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e)
    {
        die();
    }

?>