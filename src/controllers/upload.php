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
        $audioTarget = '../audio/' . str_replace(' ', '', $audioNewName);
        $imageNewName = $title . "by" . $artist . ".jpg";
        $imageTarget = '../img/' . str_replace(' ', '', $imageNewName);
    
        move_uploaded_file($mp3['tmp_name'], $audioTarget);
        move_uploaded_file($image['tmp_name'], $imageTarget);

        $db_img = "https://www.indietune.net/img/" . str_replace(' ', '', $imageNewName);
        $db_audio = "https://www.indietune.net/audio/" . str_replace(' ', '', $audioNewName);

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

        $stmt = $conn->prepare("INSERT INTO db_songs (title, artist, genre, about, img_url, audio_url, added_by, fb, sc, www) 
        VALUES (:title, :artist, :genre, :description, :img_url, :audio_url, :username, :fb, :sc, :www)");
        $stmt->execute($data);

        $stmt = "";
        $stmt = $conn->prepare("SELECT id FROM db_songs WHERE added_by = ?");
        $stmt->execute(array($username));
        $response = $stmt->fetch();

        $data = [
            'song_id' => $response['id'],
            'username' => $username
        ];
        $stmt = "";
        $stmt = $conn_users->prepare("UPDATE db_users SET song_id = :song_id WHERE username = :username");
        $stmt->execute($data);

        echo json_encode($data);

    }

?>