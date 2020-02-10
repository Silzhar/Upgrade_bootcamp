<?php
require '../vendor/autoload.php';

use Upflix\Db;
use Upflix\Pelicula;

$config = json_decode(file_get_contents('../config/config.json'), true);
$db = new Db($config);

//hacer la lógica para guardar una película en MySQL
$titulo = $_POST['titulo'];
$descripcion = $_POST['descripcion'];

$pelicula = new Pelicula($titulo, $descripcion);

$db->guardarPelicula($pelicula);

header('Location: index.php');

