<?php

require_once ("Temporadas.php");

class Serie{

    private $nombre;
    private $genero;
    private $temporadas = [];

    public function __construct(string $nombre, string $genero){

        $this->nombre = $nombre;
        $this->genero = $genero;
    }
    
    public function addtemporada(Temporadas $temporada){

        $this->temporadas[] = $temporada;
    }

    public function getTotalCapitulos(): int{

        $totalCapitulos = 0;

        foreach ($this->temporadas as $temporada){
            $totalCapitulos += $temporada->getTotalCapitulos();
        }

        return $totalCapitulos;
    }
}

?>