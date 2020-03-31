// Ejercicio 1
console.log('//----------------------/////----------------------//')

function ejercicio01(){
    function areaCuadrado(lado){
        var areaC = lado * lado;
        return areaC
    }
    
    function perimetroCuadrado(areaC){
        var perimetroC = areaC * 4;
        return perimetroC
    }

    var lado = 20;
    var area1 = areaCuadrado(lado);
    console.log('Area de cuadrado es igual a : ',area1);

    var perimetro1 = perimetroCuadrado(area1);
    console.log('Perímetro de cuadrado es igual a : ',perimetro1);
}

ejercicio01();

console.log('//----------------------/////----------------------//')

//------------------------------/////////------------------------------//
//------------------------------/////////------------------------------//
// Ejercicio 2
function ejercicio02(){
    function areaTriangulo(baseT, altura){
        var areaT = (baseT * altura) / 2;
        return areaT
    }

    function perimetroTriangulo(a, baseT, c){
        var perimetroT = a + baseT + c;
        return perimetroT
    }

    var baseT = 12;
    var altura = 4;
    var area2 = areaTriangulo(baseT, altura);
    console.log('Area del triangulo : ',area2);

    var a = 8;
    var c = 6;

    var perimetro2 = perimetroTriangulo(a, baseT, c);
    console.log('Perimetro de triangulo :',perimetro2);
}

ejercicio02();
console.log('//----------------------/////----------------------//')

//------------------------------/////////------------------------------//
//------------------------------/////////------------------------------//
// Ejercicio 3
function ejercicio03(){
    function areaRectangulo(baseR, alturaR){
        var areaR = baseR * alturaR;
        return areaR
    }

    function perimetroRectangulo(){
        var perimetroR = 2 * (baseR +  alturaR);
        return perimetroR
    }

    var baseR = 16
    var alturaR = 7

    var area3 = areaRectangulo(baseR, alturaR);
    console.log('Area del rectángulo : ',area3);

    var perimetro3 = perimetroRectangulo(baseR, alturaR);
    console.log('Perimetro del rectángulo : ',perimetro3);
}

ejercicio03();
console.log('//----------------------/////----------------------//')

//------------------------------/////////------------------------------//
//------------------------------/////////------------------------------//
// Ejercicio 4
function ejercicio04(){
    function areaParalelogramo(baseP, alturaP){
        var areaP = baseP * alturaP;
        return areaP
    }

    function perimetroParalelogramo(){
        var perimetroP = 2 * (baseP +  alturaP);
        return perimetroP
    }

    var baseP = 32
    var alturaP = 21

    var area4 = areaParalelogramo(baseP, alturaP);
    console.log('Area del paralelogramo : ',area4);

    var perimetro4 = perimetroParalelogramo(baseP, alturaP);
    console.log('Perimetro del paralelogramo : ',perimetro4);
}

ejercicio04();
console.log('//----------------------/////----------------------//')

//------------------------------/////////------------------------------//
//------------------------------/////////------------------------------//
// Ejercicio 5 
function ejercicio05(){
    function areaRombo(diagonal1, diagonal2){
        var areaRom = (diagonal1 * diagonal2) / 2;
        return areaRom
    }

    function perimetroRombo(areaRom){
        var perimetroRom = areaRom * 4;
        return perimetroRom
    }

    var diagonal1 = 13;
    var diagonal2 = 15;
    var area5 = areaRombo(diagonal1, diagonal2);
    console.log('Area del rombo : ',area5);

    var perimetro5 = perimetroRombo(area5);
    console.log('Perimetro del rombo : ',perimetro5);
}

ejercicio05();
console.log('//----------------------/////----------------------//')

//------------------------------/////////------------------------------//
//------------------------------/////////------------------------------//
// Ejercicio 6
function ejercicio06(){
    function areaCometa(diagonal1, diagonal2){
        var areaCom = (diagonal1 * diagonal2) / 2;
        return areaCom
    }

    function perimetroCometa(ladoMayor, ladoMenor){
        var perimetroCom = 2 * (ladoMayor + ladoMenor);
        return perimetroCom
    }

    var diagonal1 = 26;
    var diagonal2 = 9;
    var ladoMayor = 18;
    var ladoMenor = 5;

    var area6 = areaCometa(diagonal1, diagonal2);
    console.log('Area de la cometa : ',area6);

    var perimetro6 = perimetroCometa(ladoMayor, ladoMenor);
    console.log('Perimetro de la cometa :',perimetro6);
}

ejercicio06();
console.log('//----------------------/////----------------------//')

//------------------------------/////////------------------------------//
//------------------------------/////////------------------------------//
// Ejercicio 7
function ejercicio07(){
    function areaTrapecio(baseMayor, baseInferior, alturaTrap){
        var areaTrap =((baseMayor + baseInferior) * alturaTrap) / 2;
        return areaTrap
    }

    function perimetroTrapecio(baseMayor, baseInferior, ladoA, ladoB){
        var perimetroTrap = baseMayor + baseInferior + ladoA + ladoB;
        return perimetroTrap
    }

    var baseMayor = 38;
    var baseInferior = 26;
    var alturaTrap = 20;
    var ladoA = 24;
    var ladoB = 24;

    var area7 = areaTrapecio(baseMayor, baseInferior, alturaTrap);
    console.log('Area del trapecio : ',area7);

    var perimetro7 = perimetroTrapecio(baseMayor, baseInferior, ladoA, ladoB);
    console.log('Perimetro del trapecio : ',perimetro7);
}

ejercicio07();
console.log('//----------------------/////----------------------//')

//------------------------------/////////------------------------------//
//------------------------------/////////------------------------------//
// Ejercicio 8
function ejercicio08(){
    function perimetroPoligonoRegular(lados, basePR){
        var perimetroPR = lados * basePR;
        return perimetroPR
    }

    function areaPoligonoRegular(perimetroPR, apotema){
        var areaPR = (perimetroPR * apotema) / 2;
        return areaPR
    }

    var lados = 6;
    var basePR = 19;
    var apotema = 11;

    var perimetro8 = perimetroPoligonoRegular(lados, basePR);
    console.log('Perimetro del poligono regular : ',perimetro8);

    var area8 = areaPoligonoRegular(perimetro8, apotema);
    console.log('Area del poligono regular : ',area8);
}

ejercicio08();
//------------------------------/////////------------------------------//
//------------------------------/////////------------------------------//
