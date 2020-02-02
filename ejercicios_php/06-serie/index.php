<?php

require_once ("Serie.php");
require_once ("Temporadas.php");

$temporada = new Temporada("temporada1.json");

$visualizador = $temporada->ver();
echo $visualizador;

?>