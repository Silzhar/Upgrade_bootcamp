<?php

$text = $_GET['texto'];

$text_invert = strrev($text);

if ($text == $text_invert){
    echo "Es un palíndromo";
}else{
    echo "No es un palíndromo";
}