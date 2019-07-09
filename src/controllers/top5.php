<?php

include "db.php";

$stmt = $conn->query("SELECT * FROM songs ORDER BY votes DESC LIMIT 5");

$res = $stmt -> fetchAll(PDO::FETCH_ASSOC);

echo json_encode($res);

$conn = NULL;

?>