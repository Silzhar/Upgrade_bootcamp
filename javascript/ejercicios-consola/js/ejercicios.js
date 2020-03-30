// Ejercicio 1
function ejercicio01(){
    function areaCuadrado(lado){
        var area = lado * lado;
        return area
    }
    

    function perimetroCuadrado(area){
        var perimetro = area * 4
        return perimetro
    }

    var lado = 20;
    var area1 = areaCuadrado(lado);
    console.log('Area es igual a : ',area1);

    perimetro1 = perimetroCuadrado(area1);
    console.log('Perímetro es igual a : ',perimetro1);

}

ejercicio01();

