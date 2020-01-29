<?php

require 'Alumno-kiko.php';

$kiko = new Alumno('kiko', 37, '1234');

if ($kiko->esMayorEdad()) {
    echo "Es mayor de edad";
} else{
    echo "ponte a estudiar!!";
}