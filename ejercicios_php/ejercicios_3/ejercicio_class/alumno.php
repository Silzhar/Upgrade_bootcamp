<?php

class Alumno{
    const CARACTERES(".", ",", "*", "-", "_", ";");
    var $nombre;
    var $edad;
    var $direccion;
    var $password;

    function validate(string $pass) {

        if(foreach(self::CARACTERES as $password && $password < 7)){
            echo "Correcto";
        } else{
            echo "Ha de introducir más de 7 números y algún caracter (',' '.' '-' '_' ';')"
        }
        
    }
}

?>