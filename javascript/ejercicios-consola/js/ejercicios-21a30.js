// Ejercicio 21
function ejercicio21(){
    function areaPrisma(perimetroBase,alturaPrisma, apotemaBase){
        var areaPr = perimetroBase * (alturaPrisma + apotemaBase);
        return areaPr
    }

    function volumenPrisma(areaBase, alturaPrisma){
        var volumenPr = areaBase * alturaPrisma;
        return volumenPr
    }

    var perimetroBase = 40;
    var areaBase = 67;
    var alturaPrisma = 64;
    var apotemaBase = 15;

    var area21 = areaPrisma(perimetroBase,alturaPrisma, apotemaBase);
    console.log('Area del prisma  : ',area21.toFixed(2));

    var volumen21 = volumenPrisma(areaBase, alturaPrisma);
    console.log('Volumen del prisma : ',volumen21);
}

ejercicio21();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 22
function ejercicio22(){
    function areaPiramide(perBasePiramide, apotemaPi, alturaLado){
        var areaPi =( perBasePiramide * (apotemaPi + alturaLado)) / 2;
        return areaPi
    }

    function volumenPiramide(areaPi, alturaPiramide){
        var volumenPi = (areaPi * alturaPiramide) / 3;
        return volumenPi
    }

    var perBasePiramide = 43;
    var apotemaPi = 16;
    var alturaLado = 31;
    var alturaPiramide = 27;

    var area22 = areaPiramide(perBasePiramide, apotemaPi, alturaLado);
    console.log('El area de la piramide es : ',area22);

    var volumen22 = volumenPiramide(area22, alturaPiramide);
    console.log('El volumen de la piramide es : ',volumen22);
}

ejercicio22();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 23
function ejercicio23(){
    function areaTetraedro(arista){
        var areaT = Math.sqrt(3) * Math.pow(arista, 2);
        return areaT
    }

    function volumenTetraedro(arista){
        var volumenT = (Math.sqrt(2) * Math.pow(arista, 3)) / 12;
        return volumenT
    }

    var arista = 25;
    var area23 = areaTetraedro(arista);
    console.log('Area del tetraedro : ',area23.toFixed(2));

    var volumen23 = volumenTetraedro(arista);
    console.log('Volumen de tetraedro : ',volumen23.toFixed(2));
}

ejercicio23();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 24
function ejercicio24(){
    function areaOctaedro(aristaOc){
        var areaO = 2 * Math.sqrt(3) * Math.pow(aristaOc, 2);
        return areaO
    }

    function volumenOctaedro(aristaOc){
        var volumenO = (Math.sqrt(2) * Math.pow(aristaOc, 3)) / 3;
        return volumenO
    }

    var aristaOc = 12;
    var area24 = areaOctaedro(aristaOc);
    console.log('Area del octaedro : ',area24.toFixed(2));

    var volumen24 = volumenOctaedro(aristaOc);
    console.log('Volumen de octaedro : ',volumen24.toFixed(2));
}

ejercicio24();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 25
function ejercicio25(){
    function areaTroncoPiramide(perBaseInf, perBaseSup, altLado, areaBInf, areaBSup){
        var areaTP = ((perBaseInf + perBaseSup) / 2) * altLado + areaBInf + areaBSup;
        return areaTP
    }

    function volumenTroncoPiramide(areaBInf, areaBSup, alturaTronco){
        var volumenTP = (areaBInf + areaBSup + Math.sqrt(areaBInf * areaBSup) * alturaTronco) / 3;
        return volumenTP
    }

    var perBaseInf = 48;
    var perBaseSup = 36;
    var altLado = 40;
    var areaBInf = 320;
    var areaBSup = 280;
    var alturaTronco = 34;

    var area24 = areaTroncoPiramide(perBaseInf, perBaseSup, altLado, areaBInf, areaBSup);
    console.log('Area del tronco de piramide : ',area24);

    var volumen24 = volumenTroncoPiramide(areaBInf, areaBSup, alturaTronco);
    console.log('Volumen del tronco de piramide :',volumen24.toFixed(2));
}

ejercicio25();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 26
function ejercicio26(){
    function multiplos3(tres){
        while (totalUno < maximo){
            arrayAlmacen3.push(totalUno);
            totalUno += tres;
            }
            console.log('3',arrayAlmacen3); 
            return arrayAlmacen3
        }

    function multiplos5(cinco){
        while (totalDos < maximo){
            arrayAlmacen5.push(totalDos);
            totalDos += cinco;
            }
            console.log('5',arrayAlmacen5); 
            return arrayAlmacen5
        }
    var maximo = 1000; 
    var tres = 3;
    var cinco = 5;
    var arrayAlmacen3 = [];
    var arrayAlmacen5 = [];
    var totalUno = 0;
    var totalDos = 0;

    var multiplosTres = multiplos3(tres);
    var multiplosCinco = multiplos5(cinco);

    var sumaMulTres = multiplosTres.reduce((primerNumero, segundoNumero) => primerNumero + segundoNumero);
    var sumaMulCinco = multiplosCinco.reduce((primerNumero, segundoNumero) => primerNumero + segundoNumero);
    var sumaTotal = sumaMulTres + sumaMulCinco;
    console.log('Suma total de multiplos : ',sumaTotal);
}

ejercicio26();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//