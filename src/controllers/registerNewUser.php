<?php

session_start();

include 'db_users.php';

    if(isset($_POST)){

        $_POST = json_decode(file_get_contents("php://input"), true);
        if(!empty($_POST['password']) && !empty($_POST['username'])){

            $password = $_POST['password'];
            $username = $_POST['username'];

            $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
            $stmt->execute(array($username));

            if($stmt->rowCount() == 0){

                $hash = password_hash($password, PASSWORD_BCRYPT);

                $data = [
                    'username' => $username,
                    'hash' => $hash
                ];
                $sql = "INSERT INTO users (username, hash) VALUES (:username, :hash)";
                $stmt = $conn->prepare($sql);
                $stmt->execute($data);

                http_response_code(201);

                $_SESSION['username'] = $username;
                $_SESSION['isLoggedIn'] = true;

            } else {
                http_response_code(205);
                session_unset();
                session_destroy();
            }

        } else {

            http_response_code(204);
            session_unset();
            session_destroy();

        }
    } else {

        http_response_code(204);
        session_unset();
        session_destroy();

    }

?>