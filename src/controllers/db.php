<?php

    $host = "127.0.0.1";
    $user = "root";
    $pass = "";
    

    try {
        $conn = new PDO("mysql:host=$host;dbname=db_songs", $user, $pass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e)
    {
        die();
    }

?>