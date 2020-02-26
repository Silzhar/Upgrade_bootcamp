<?php


namespace Upflix;

class Pelicula 
{
    public $titulo;
    public $descripcion;

    public function __construct(string $titulo, string $descripcion)
    {
        $this->titulo = $titulo;
        $this->descripcion = $descripcion;
    }

        /**
     * @return string
     */
    public function getTitulo()
    {
        return $this->titulo;
    }
    /**
     * @param string $titulo
     */
    public function setTitulo($titulo)
    {
        $this->titulo = $titulo;
    }
    /**
     * @return string
     */
    public function getDescripcion()
    {
        return $this->descripcion;
    }
    /**
     * @param string $descripcion
     */
    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;
    }
}
