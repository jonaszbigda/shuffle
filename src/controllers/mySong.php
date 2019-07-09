<?php

include "db.php";

$songid = $_GET["id"];

$stmt = $conn->prepare("SELECT * FROM songs WHERE id = ?");
$stmt->execute(array($songid));

$res = $stmt->fetch();

$response = array(
    'id' => $res['id'],
    'title' => $res['title'],
    'artist' => $res['artist'],
    'genre' => $res['genre'],
    'votes' => $res['votes'],
    'img_url' => $res['img_url'],
    'audio_url' => $res['audio_url'],
    'addedby' => $res['added_by'],
    'fb' => $res['fb'],
    'sc' => $res['sc'],
    'www' => $res['www'],
    'about' => $res['about'],
    'views' => $res['views']
);

echo json_encode($response);

$conn = NULL;

?>