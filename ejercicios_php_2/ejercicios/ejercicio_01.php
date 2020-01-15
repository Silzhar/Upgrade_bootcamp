<?php

$file = $_GET['archivo'];

//stripos($file, ".exe");


if (stripos($file, ".exe") !== false){
    echo strtoupper($file);
 } elseif (stripos($file, ".db") !== false) {
         echo strtolower($file);
}

?>