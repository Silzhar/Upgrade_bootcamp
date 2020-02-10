#!/usr/bin/env php
<?php
// Usando la extensión PDO

$config = json_decode(file_get_contents('config/config.json'), true);
$dsn = "mysql:host={$config['host']};dbname={$config['db']};port={$config['port']};charset=utf8mb4";
try {
    $pdo = new PDO($dsn, $config['user'], $config['pass']);
} catch (Exception $e) {
    die("ERROR AL CONECTARSE A LA BASE DE DATOS");
}

if ($pdo->exec('DROP TABLE IF EXISTS pelicula') === false) {
    die("ERROR AL VACIAR LA TABLA pelicula");
}

if ($pdo->exec('CREATE TABLE IF NOT EXISTS pelicula (id INT NOT NULL AUTO_INCREMENT, titulo VARCHAR(50), descripcion VARCHAR(256), PRIMARY KEY (id))') === false) {
    die("ERROR AL CREAR LA TABLA pelicula: " . $pdo->errorInfo());
} else {
    echo "CREADA LA TABLA pelicula\n";
}

echo "INICIALIZANDO TRANSACCIÓN PARA IMPORTAR DATOS... \n";
$pdo->beginTransaction();

$stmt = $pdo->prepare('INSERT INTO pelicula (titulo, descripcion) VALUES (:titulo, :descripcion)');
$stmt->bindParam(':titulo', $titulo);
$stmt->bindParam(':descripcion', $descripcion);

$datos = fopen("fixtures/data","r");

try {
    while(!feof($datos)) {
        $linea = fgets($datos);
        list($titulo, $descripcion) = explode('###', $linea);
        // si no está titulo es que la linea está vacía
        if ($titulo) {
            $stmt->execute();
        }
    }
} catch (\Exception $e) {
    $pdo->rollback();
} finally {
    fclose($datos);
}

$pdo->commit();
echo "FINALIZADA TRANSACCIÓN, IMPORTACIÓN CORRECTA \n";






