<?php

class Alumno{
    var $name;
    var $password;
    var $age;

    function __construct($name, $password, $age)
    {
        $this->name = $name;
        $this->password = $password;
        $this->age = $age;
    }

    function esMayorEdad(): bool
    {
        if ($this->age > 17){
            return true;
        }
        return false;
        
    }
}