<?php

require_once("Cuadrado.php");
require_once("Rectangulo.php");

$cuadrado = new Cuadrado(4);
echo $cuadrado->calculaArea();

$cuadrado2 = new Cuadrado(12);
echo $cuadrado2->calculaArea();

?>