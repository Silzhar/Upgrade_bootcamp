<?php

namespace Upflix;

class Db
{
    private $db;

    public function __construct(array $config)
    {
        $dsn = "mysql:host={$config['host']};dbname={$config['db']};port={$config['port']};charset=utf8mb4";
        $this->db = new \PDO($dsn, $config['user'], $config['pass']);
    }

    public function getPeliculas($sort)
    {
        $peliculas = [];

        //TODO: Falta por realizar la query a MySQL
        $query = "select * from pelicula";

        if ($sort !== false) {
            $query.= " order by titulo $sort";
        }

    if (($result = $this->db->query($query)) === false) {
    throw new \Exception("Error al obtener las peliculas");
    }


        foreach ($result as $registro) {
            $peliculas[] = new Pelicula($registro['titulo'], $registro['descripcion']);
        }

        return $peliculas;
    }

    public function guardarPelicula($pelicula)
    {
        $result = $this->db->exec("Insert into pelicula (titulo, descripcion)
         values ('{$pelicula->getTitulo()}', '{$pelicula->getDescripcion()}')");

        if (!$result){
            print_r($this->db->errorInfo()); die;
        }
        return true;
    }
}
