<?php

class Fichero{

    protected $fichero;

    public function __contructor($fichero){
        $this->fichero = $fichero;

        if (!file_exists($fichero)){
            $peliculas = [
                [
                    "nombre"=> "Los Vengadores",
                    "año"=>2015
                ],
                ["nombre"=> "Matrix", "año"=> 1999]
            ];

            $peliculaJSON = json_encode($peliculas);

            file_put_contents($fichero,$peliculaJSON);
        }
    }
    public function copiar($ficheroDestino){
        if (!copy($this->fichero, $ficheroDestino)){
            echo "Error al copiar el archivo";
        }
        echo "copia de $this->fichero a $ficheroDestino<br>";
    }
    public function mover($ficheroDestino){
        rename($this->fichero, $ficheroDestino);
        echo "renombre de $this->fichero a $ficheroDestino<br>";
    }
    public function leer(){
        return file_get_contents($this->fichero);
    }
    public function borrar(){
        unlink($this->fichero);
        echo "borro $this->fichero";
    }
    public function fechaModificacion(){
        return filemtime($this->fichero);
    }
}

?>