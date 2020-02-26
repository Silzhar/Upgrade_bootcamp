<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController{

    public function index(){
        return new Response("Hola mundo");
    }

    public function homepage(){
        return new Response("Esto es el HOMEPAGE");
    }

    /**
     * @Route("/contacto")
     */
    public function contacto(){
        return new Response("CONTACTO");
    }

    /**
     * @Route("/peliculas")
     */
    public function peliculas(){
        return new Response("PELICULAS");
    
    
    /**
     * @Route("/usuario/{nombre}/{apellido}/edad/{edad}", requirements={"edad"="\d+"})
     */
    public function usuario($nombre, $apellido, $edad){
        // Lo pinta desde twig
        return $this->render("usuarios.html.twig",
        ["name"=> $nombre,
            "surname"=> $apellido,
            "age"=> $edad ]  ); 

        // return new Response("<h1>EL nombre es $nombre $apellido</h1>
        //                     <h2>Y la edad es $edad</h2>");
    }
}

?>