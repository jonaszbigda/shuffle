<?php

    $host_users = "jonasz787.mysql.dhosting.pl";
    $user_users = "nue4ki_user";
    $pass_users = "SHS41495md5";
    

    try {
        $conn_users = new PDO("mysql:host=$host_users;dbname=tei3ie_shuffle", $user_users, $pass_users);
        $conn_users->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e)
    {
        die();
    }

?>