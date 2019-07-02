<?php

    session_start();
    session_unset();
    session_destroy();

    echo "Succesfully logged out.";

?>