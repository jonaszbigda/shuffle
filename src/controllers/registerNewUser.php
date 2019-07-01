<?php

include 'db_users.php';

    if(isset($_POST)){
        $_POST = json_decode(file_get_contents("php://input"), true);
        if(!empty($_POST['password']) && !empty($_POST['username'])){
            $password = $_POST['password'];
            $username = $_POST['username'];
            $hash = password_hash($password, PASSWORD_BCRYPT);

            $data = [
                'username' => $username,
                'hash' => $hash
            ];
            $sql = "INSERT INTO users (username, hash) VALUES (:username, :hash)";
            $stmt = $conn->prepare($sql);
            $stmt->execute($data);

            http_response_code(201);
        } else {
            http_response_code(204);
        }
    } else {
        http_response_code(204);
    }

?>