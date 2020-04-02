// Ejercicio 11
function ejercicio11(){
    function porcionArea(radio, grados){
        var porcion = (Math.PI * Math.pow(radio, 2) * grados) / 360;
        return porcion
    }

    var radio = 40;
    var grados = 34;
    var area11 = porcionArea(radio, grados);
    console.log('Porcion del area con los grados proporcionados : ',area11.toFixed(2));
}

ejercicio11();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 12
function ejercicio12(){
    function areaCilindro(radio, altura){
        var areaCil = Math.pow(Math.PI, 2) * radio * (altura + radio);
        return areaCil
    }

    function volumenCilindro(radio, altura){
        var volumen = Math.PI * Math.pow(radio, 2) * altura;
        return volumen
    }

    var radio = 6;
    var altura = 14;

    var area12 = areaCilindro(radio, altura);
    console.log('Area del cilindro : ',area12.toFixed(2));

    var volumen12 = volumenCilindro(radio, altura);
    console.log('Volumen del cilindro : ',volumen12.toFixed(2));
}

ejercicio12();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercio 13
function ejercicio13(){
    function areaCono(radioBase , generatriz){
        var areaCon = Math.PI * radioBase * (radioBase + generatriz);
        return areaCon
    }

    function volumenCono(radioBase, altura){
        var volumenC = (Math.PI * Math.pow(radioBase, 2) * altura) / 3;
        return volumenC
    }

    var radioBase = 18;
    var generatriz = 32;
    var altura = 27;

    var area13 = areaCono(radioBase, generatriz);
    console.log('Area del cono : ',area13.toFixed(2));

    var volumen13 = volumenCono(radioBase, altura);
    console.log('Volumen del cono : ',volumen13.toFixed(2));
}   

ejercicio13();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercio 14
function ejercicio14(){
    function areaTroncoCono(radioBaseInferior ,radioBaseSuperior, generatriz){
        var areatronco = Math.PI * (generatriz * 
            (radioBaseInferior + radioBaseSuperior) + Math.pow(radioBaseInferior, 2) + Math.pow(radioBaseSuperior, 2));
        return areatronco
    }

    function volumenTroncoCono(radioBaseInferior, radioBaseSuperior, alturaTronco){
        var volumenTC = Math.PI * alturaTronco * 
        (Math.pow(radioBaseInferior, 2) + Math.pow(radioBaseSuperior, 2) + radioBaseInferior * radioBaseSuperior) / 3;
        return volumenTC
    }

    var radioBaseSuperior = 12;
    var radioBaseInferior = 16
    var generatriz = 24;
    var alturaTronco = 29;

    var area14 = areaTroncoCono(radioBaseInferior ,radioBaseSuperior, generatriz);
    console.log('Area del cono : ',area14.toFixed(2));

    var volumen14 = volumenTroncoCono(radioBaseInferior, radioBaseSuperior, alturaTronco);
    console.log('Volumen del cono : ',volumen14.toFixed(2));
}   

ejercicio14();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 15
function ejercicio15(){
    function areaEsfera(radioEsfera){
        var areaE = 4 * Math.PI * Math.pow(radioEsfera, 2);
        return areaE
    }

    function volumenEsfera(radioEsfera){
        var volumenE = (4 * Math.PI * Math.pow(radioEsfera, 2)) / 3;
        return volumenE
    }

    var radioEsfera = 30;
    var area15 = areaEsfera(radioEsfera);
    console.log('Area de la esfera :', area15.toFixed(2));

    var volumen15 = volumenEsfera(radioEsfera);
    console.log('Volumen de la esfera :',volumen15.toFixed(2));
}

ejercicio15();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 16
function ejercicio16(){
    function areaCasco(radioEs, alturaCasco){
        var areaCa = Math.pow(Math.PI, 2) * radioEs * alturaCasco;
        return areaCa
    }

    function volumenCasco(radioEs, alturaCasco){
        var volumenCa = (Math.PI * Math.pow(alturaCasco, 2) *
            (Math.pow(radioEs, 3) - alturaCasco)) / 3;
        return volumenCa
    }

    var radioEs = 32;
    var alturaCasco = 15;

    var area16 = areaCasco(radioEs, alturaCasco);
    console.log('Area del casco : ',area16.toFixed(2));

    var volumen16 = volumenCasco(radioEs, alturaCasco);
    console.log('Volumen del casco : ',volumen16.toFixed(2));
}

ejercicio16();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 17
function ejercicio17(){
    function areaHuso(radioTotal, gradosHuso){
        var areaH = (4 * Math.PI *Math.pow(radioTotal, 2) * gradosHuso) / 360;
        return areaH
    }

    function volumenHuso(radioTotal, gradosHuso){
        var volumenH = (4 * Math.PI *Math.pow(radioTotal, 3) * gradosHuso) / ( 3 * 360);
        return volumenH
    }

    var radioTotal = 18;
    var gradosHuso = 8;

    var area17 = areaHuso(radioTotal, gradosHuso);
    console.log('Area del huso : ',area17.toFixed(2));

    var volumen17 = volumenHuso(radioTotal, gradosHuso);
    console.log('Volumen del huso : ',volumen17.toFixed(2));
}

ejercicio17();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 18
function ejercicio18(){
    function areaSegmento(radioEsfera, alturaSegmento){
        var areaS = Math.pow(Math.PI, 2) * radioEsfera * alturaSegmento;
        return areaS
    }

    function volumenSegmento(alturaSegmento, radioSegInferior, radioSegSuperior){
        var volumenS = Math.PI * alturaSegmento * 
            (Math.pow(alturaSegmento, 2) + 3*(Math.pow(radioSegInferior, 2)) + 3*(Math.pow(radioSegSuperior, 2))) / 6;
        return volumenS
    }

    var radioEsfera = 10;
    var alturaSegmento = 2;
    var radioSegInferior = 4;
    var radioSegSuperior = 2;

    var area18 = areaSegmento(radioEsfera, alturaSegmento);
    console.log('Area del segmento : ',area18.toFixed(2));

    var volumen18 = volumenSegmento(alturaSegmento, radioSegInferior, radioSegSuperior);
    console.log('Volumen del segmento',volumen18.toFixed(2));
}

ejercicio18();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 19 
function ejercicio19(){
    function areaCubo(alturaLado){
        var areaC = 6 * Math.pow(alturaLado, 2);
        return areaC
    }

    function volumenCubo(alturaLado){
        var volumenC = Math.pow(alturaLado, 3);
        return volumenC
    }

    var alturaLado = 3;
    var area19 = areaCubo(alturaLado);
    console.log('Area del cubo : ',area19);

    var volumen19 = volumenCubo(alturaLado);
    console.log('Volumen del cubo : ',volumen19);
}

ejercicio19();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 20
function ejercicio20(){
    function areaOrtoedro(largo, ancho, alto){
        var areaO = 2 * ((largo * ancho) + (largo * alto) + (ancho * alto));
        return areaO
    }

    function volumenortoedro(largo, ancho, alto){
        var volumenO = largo * ancho * alto;
        return volumenO
    }

    var largo = 12;
    var ancho = 8;
    var alto = 10;

    var area20 = areaOrtoedro(largo, ancho, alto);
    console.log('Area del ortoedro : ',area20);

    var volumen20 = volumenortoedro(largo, ancho, alto);
    console.log('Volumen del ortoedro  : ',volumen20);
}

ejercicio20();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//