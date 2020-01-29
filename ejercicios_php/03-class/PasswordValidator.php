<?php 

class PasswordValidator
{
    // atributos
    const MIN_LENGTH = 8;
    const CARACTERES[".", ",", "*", "-", "_", ";"];
    var $password;

    // metodos

    function isValid(string $password): bool
    {
        if (strlen($password) < self::MIN_LENGTH){
            return false;
        }

        foreach (self::CARACTERES as $char) {
            if(strpos($password, $char)!==false){
                return true;
            }
        }

        return false;
    }
}