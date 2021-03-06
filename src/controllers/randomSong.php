<?php

include "db.php";

$genre = $_GET["genre"];

if($genre == "Genre"){
    $stmt = $conn->query("SELECT * FROM db_songs ORDER BY RAND() LIMIT 1");
} else {
    $stmt = $conn->query("SELECT * FROM db_songs WHERE genre = '$genre' ORDER BY RAND() LIMIT 1");
};

$res = $stmt -> fetch();

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

$newViews = $res['views'] + 1;

$stmt2 = $conn->prepare("UPDATE db_songs SET views = ? WHERE id = ?");
$stmt2->execute(array($newViews, $res['id']));

$conn = NULL;

?>