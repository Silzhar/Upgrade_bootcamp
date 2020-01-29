<?php

require 'PasswordValidator.php';

$pv = new PasswordValidator();

$pass = '12345';


$resultado = $pv ->isValid($pass);

if ($resultado == true) {
    echo "la contraseña es valida";
} else{
    echo "la contraseña es incorrecta";
}