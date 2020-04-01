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