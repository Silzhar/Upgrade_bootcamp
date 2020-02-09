<?php
require '../vendor/autoload.php';

use Upflix\Db;

$config = json_decode(file_get_contents('../config/config.json'), true);

$db = new Db($config);

$orden = $_GET['sort'];

try {
    $peliculas = $db->getPeliculas($orden);
} catch (\Exception $e) {
    die("ERROR AL OBTENER LAS PELICULAS");
}

$tpl = file_get_contents('../templates/index.tpl');

$tpl = str_replace('##PELICULAS##', createTableRows($peliculas) ,$tpl);

echo $tpl;

function createTableRows($peliculas) {
    $contenido = '';
    foreach ($peliculas as $pelicula) {
        $contenido.="<tr><td><a href='#'> {$pelicula->titulo}</a></td><td>{$pelicula->descripcion}</td></tr>";
    }
    return $contenido;
}
