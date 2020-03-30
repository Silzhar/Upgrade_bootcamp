// Ejercicio 1
function ejercicio01(){
    function areaCuadrado(lado){
        var areaC = lado * lado;
        return areaC
    }
    
    function perimetroCuadrado(areaC){
        var perimetroC = areaC * 4
        return perimetroC
    }

    var lado = 20;
    var area1 = areaCuadrado(lado);
    console.log('Area de cuadrado es igual a : ',area1);

    perimetro1 = perimetroCuadrado(area1);
    console.log('Perímetro de cuadrado es igual a : ',perimetro1);

}

ejercicio01();

// Ejercicio 2
function ejercicio02(){
    function areaTriangulo(base, altura){
        var areaT = (base * altura) / 2
        return areaT
    }

    function perimetroTriangulo(a, base, c){
        var perimetroT = a + base + c
        return perimetroT
    }

    var base = 12;
    var altura = 4;
    area2 = areaTriangulo(base, altura);
    console.log('Area del triangulo : ',area2);

    var a = 8;
    var c = 6;

    perimetro2 = perimetroTriangulo(a, base, c);
    console.log('Perimetro de triangulo :',perimetro2);

}

ejercicio02();

