<?php

include "db.php";

$stmt = $conn->query('SELECT * FROM `songs` JOIN (SELECT CEIL(RAND() * (SELECT MAX(`id`) FROM `songs`)) AS `id`) AS rows USING (`id`)');
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
    'about' => $res['about']
);

echo json_encode($response);

$conn = NULL;

?>