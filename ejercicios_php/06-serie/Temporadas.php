<?php



class Temporadas{

    protected $temporada1_2005;


    public function __construct($temporada1_2005){

        $this->temporada1 = $temporada1_2005;

        if(!file_exists($temporada1_2005)){
            $temporada = [
                ["capitulo-01"=>"Rose"],
                ["capitulo-02"=>"El fin del mundo"],
                ["capitulo-03"=>"Los muertos inquietos"],
                ["capitulo-04"=>"Alienígenas en Londres"],
                ["capitulo-05"=>"Tercera Guerra Mundial"],
                ["capitulo-06"=>"Dalek"],
                ["capitulo-07"=>"Una jugada larga"],
                ["capitulo-08"=>"El día del padre"],
                ["capitulo-09"=>"El niño vacío"],
                ["capitulo-10"=>"El Doctor baila"],
                ["capitulo-11"=>"Explosión en la ciudad"],
                ["capitulo-12"=>"Lobo malo"],
                ["capitulo-13"=>"El momento de la despedida"],                
            ];

            $temporada1_JSON = json_encode($temporada);

            file_put_contents($temporada1_2005, $temporada1JSON);
        }
    }

    public function ver(){
        return file_get_contents($this->temporada1);
    }

    public function addCapitulo($temporada1_2005){
        fwrite($this->temporada1_2005, $nuevoCapitulo);
    }
}


?>