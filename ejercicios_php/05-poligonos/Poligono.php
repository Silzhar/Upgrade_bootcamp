<?php

    abstract class Poligono{
        
        protected $lado_1 = $lado_uno;
        protected $lado_2 = $lado_dos;

        public function __constructor($lado1, $lado2){
            $this->$lado_1 = $lado1;
            $this->$lado_2 = $lado2;
        }

        public function calculaArea($lado_1, $lado_2){
            return $area = $lado_1 * $lado_2;
            
        }
    }

?>


