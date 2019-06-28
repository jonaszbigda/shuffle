<?php
    include 'db.php';

    $id = $_GET['id'];

    if(isset($_COOKIE["userVotes"]))
    {
        $cookies = explode("/", $_COOKIE["userVotes"]);
        $votedBefore = in_array($id, $cookies);

        if($votedBefore == true){
            echo "Has been voted on before...";
        } else {
            $stmt = $conn->query('SELECT `votes` FROM `songs` WHERE `id` = ' . $id . '');
            $votes = $stmt -> fetch(PDO::FETCH_ASSOC);
            $votesplusone = $votes['votes'] + 1;

            $stmt = $conn->query('UPDATE `songs` SET `votes`=' . $votesplusone . ' WHERE `id` = ' . $id . '');

            $cookiesstring = implode("/", $cookies) . "/" . $id;
            setcookie("userVotes", $cookiesstring, time()+30*24*60*60, "/", false);

            echo "VOTED"; 
            echo $_COOKIE["userVotes"];
        }
    } else {
        $stmt = $conn->query('SELECT `votes` FROM `songs` WHERE `id` = ' . $id . '');
        $votes = $stmt -> fetch(PDO::FETCH_ASSOC);
        $votesplusone = $votes['votes'] + 1;

        $stmt = $conn->query('UPDATE `songs` SET `votes`=' . $votesplusone . ' WHERE `id` = ' . $id . '');

        setcookie("userVotes", $id, time()+30*24*60*60, "/", false);

        echo "Voted and created cookie";
    };
?>