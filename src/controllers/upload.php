<?php

    include "db.php";
    include "db_users.php";

    if(isset($_POST)){

        $title = $_POST['title'];
        $artist = $_POST['artist'];
        $genre = $_POST['genre'];
        $fb = $_POST['fb'];
        $sc = $_POST['sc'];
        $www = $_POST['www'];
        $description = $_POST['description'];
        $username = $_POST['username'];
        $image = $_FILES['image'];
        $mp3 = $_FILES['mp3'];
    
        $audioNewName = $title . "by" . $artist . ".mp3";
        $audioTarget = '../../../audio/' . $audioNewName;
        $imageNewName = $title . "by" . $artist . ".jpg";
        $imageTarget = '../../../img/' . $imageNewName;
    
        move_uploaded_file($mp3['tmp_name'], $audioTarget);
        move_uploaded_file($image['tmp_name'], $imageTarget);

        $db_img = "http://localhost/img/" . $imageNewName;
        $db_audio = "http://localhost/audio/" . $audioNewName;

        $data = [
            'title' => $title,
            'artist' => $artist,
            'genre' => $genre,
            'fb' => $fb,
            'sc' => $sc,
            'www' => $www,
            'description' => $description,
            'username' => $username,
            'img_url' => $db_img,
            'audio_url' => $db_audio
        ];

        $stmt = $conn->prepare("INSERT INTO songs (title, artist, genre, about, img_url, audio_url, added_by, fb, sc, www) 
        VALUES (:title, :artist, :genre, :description, :img_url, :audio_url, :username, :fb, :sc, :www)");
        $stmt->execute($data);

        $stmt = "";
        $stmt = $conn->prepare("SELECT id FROM songs WHERE added_by = ?");
        $stmt->execute(array($username));
        $response = $stmt->fetch();

        $data = [
            'song_id' => $response['id'],
            'username' => $username
        ];
        $stmt = "";
        $stmt = $conn_users->prepare("UPDATE users SET song_id = :song_id WHERE username = :username");
        $stmt->execute($data);

        echo json_encode($data);

    }

?>