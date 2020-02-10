<?php

require_once ("Serie.php");
require_once ("Temporadas.php");
require_once ("Capitulo.php");

$serie = new Serie("Doctor who","ciencia ficcion");

$temporada = new Temporadas("temporada1.json");

$visualizador = $temporada->ver();
echo $visualizador;

//echo "El número total de capítulos es :". <$serie->getTotalCapitulos();

?>