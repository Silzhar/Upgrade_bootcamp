<?php
require_once ("Fichero.php");

$peliculas = new Fichero("peliculas.json");

$peliculas->copiar("copia_peliculas.json");

$contenidoPeliculas = $peliculas->leer();
echo $contenidoPeliculas;

$peliculas->borrar();

$copiaPeliculas = new Fichero("copia_peliculas.json");

echo "La fecha de modificación es: ".$copiaPeliculas->fechaModificacion();

$copiaPeliculas->mover("peliculas.json");
