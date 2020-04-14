// Ejercicio 41
var max = 10;
var totalSumaCuadrados = 0;
var totalcuadradosSuma = 0;
var listsumaCuadrados = [];


function ejercicio41(max){
    function diferenciaCuadrados(){
    
        for (controller; controller <= control_max; controller++){
            var potencia =  Math.pow(controller, 2);
            listsumaCuadrados.push(potencia);

            list_num.push(controller);
        }

        totalSumaCuadrados = listsumaCuadrados.reduce((num1, num2) => num1 + num2);
        totalcuadradosSuma = Math.pow(list_num.reduce((num1, num2) => num1 + num2), 2);
        var resultado = [];
        resultado.push(totalcuadradosSuma - totalSumaCuadrados);

        console.log('Total suma de los cuadrados : ',totalSumaCuadrados);
        console.log('Total cuadrado de la suma de los numeros  : ',totalcuadradosSuma);
        console.log('Diferencia entre los cuadrados : ',resultado);

        return totalcuadradosSuma, totalSumaCuadrados;
    }

    var controller = 0;
    var control_max = max;
    var list_num = [];
    
    diferenciaCuadrados();
       
}

ejercicio41(max);
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 42
function ejercicio42(){
    var max_num = 1000;
    ejercicio41(max_num);
    
}

console.log('Ejercicio 42');
ejercicio42();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 43
function ejercicio43(){
    function diferenciasCuadrados(){
        var num_max = 1000;
        ejercicio41(num_max);
    }
    
    console.log('Ejercicio 43');
    diferenciasCuadrados();

}

ejercicio43();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// ejercicio 44
function ejercicio44(){
    
    console.log('Suma total de los cuadrados :',totalcuadradosSuma);

}

console.log('Ejercicio 44');
ejercicio44();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 45

// repetido 

//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 46
function ejercicio46(){
    function pares(nums){
        return nums % 2 == 0;
    }

    var num_pares = listsumaCuadrados.filter(pares);
    console.log('Lista de exponentes pares :',num_pares);
}

ejercicio46();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 47
function ejercicio47(){
    var list_primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
        31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 , 97];
    
    function lugarPrimo(p){
        var posicionPrimo = list_primos[p];
        console.log('En la posición dada se encuentra el número :',posicionPrimo);
    }

    lugarPrimo(4);
}

ejercicio47();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 48
// function ejercicio48(){
function numeroTriangular(N){
    var inicio = 0;
    var numeros = [];

    while(inicio <= N){
        numeros.push(inicio);
        inicio++;
    };

    suma_num = numeros.reduce((numUno, numDos) => numUno + numDos);
    return numeros;
}

var suma_num = 0;

numeroTriangular(7);
console.log('Valor de triangular :',suma_num);
// }

// ejercicio48();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 49
function numerosTriangulares(){
    var test = numeroTriangular(14);
    console.log('Valores hasta N :',test);

}

numerosTriangulares();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//

