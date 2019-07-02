<?php

    session_start();

    include 'db_users.php';

    if(isset($_POST)){

        $_POST = json_decode(file_get_contents("php://input"), true);
        if(!empty($_POST['password']) && !empty($_POST['username'])){

            $username = $_POST["username"];
            $password = $_POST["password"];
            
            $stmt = $conn->prepare("SELECT hash FROM users WHERE username = ?");
            $stmt->execute(array($username));
            $response = $stmt->fetch();
            $hash = $response["hash"];

            if(password_verify($password, $hash)){

                $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
                $stmt->execute(array($username));
                $response = $stmt->fetch();

                $data = array(
                    'bool'=> true,
                    'song_id'=> $response['song_id']
                );

                echo json_encode($data);
                $_SESSION["loggedIn"] = true;
                $_SESSION["username"] = $username;
            } else {
                echo false;
            };
        }
    }
?>