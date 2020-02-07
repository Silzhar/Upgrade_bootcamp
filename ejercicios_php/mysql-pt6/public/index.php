<?php

$dsn = "mysql:host=mysql;dbname=demo;port=3306;charset=utf8mb4";
try {
  $pdo = new PDO($dsn, "user", "pass"); //opciones opcionales
  echo "CONECT";
} catch (Exception $e) {
  echo $e->getMessage();
}

$pdo->exec("CREATE TABLE empleado(
    per int NOT NULL, 
    nombre varchar(255), 
    apellido1 varchar(255), 
    depto int NOT NULL, 
    PRIMARY KEY (per)  
    )");

if (!$result){
    print_r($pdo->errorInfo());
}
