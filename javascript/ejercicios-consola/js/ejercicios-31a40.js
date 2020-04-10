// Ejercicio 31
function ejercicio31(){
    function n_primos(){  
        for (controller of list_primos){
            if(controller < control_max){
                console.log('Encontrado numero primo : ',controller);
                controller++;
            }
        }   
    }

    var controller = 0;
    var control_max = 10;
    var list_primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
        31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 , 97];

    n_primos();
}

ejercicio31();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 32
function ejercicio32(num){
    function nPrimos(){
        while(contr < contr_max){
            if(contr % 2 !== 0 & contr % 3 !== 0 & contr % 5 !== 0 & contr % 7 !== 0){
                list_max.push(contr);
            }
            contr++;
        }

    }

    var contr = 7;
    var contr_max = num;
    var list_max = [2,3,5,7];

    nPrimos();
    return list_max;
    // console.log('Lista de numeros primos : ',list_max);
}

// ejercicio32();
// console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio
function ejercicio33(param){
    function factoresN(){
        while(inicialize < n_tester){
            if (n_tester % inicialize == 0){
                factores_n.push(inicialize);
            }
            inicialize++;
        }
        factores_n.push(n_tester);  
    }
    
    var inicialize = 0;
    var n_tester = param;
    var factores_n = [];
    
    factoresN();
    // Set : si entra en varios elimina valores repetidos .
    // var clear_factores_n = new Set(factores_n);
    // console.log('Factores :',factores_n);
    return factores_n; 
}

// ejercicio33();
// console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 34
// function ejercicio34(){
//     var total_factores = ejercicio33()
//     var resultado = total_factores.reduce((num1, num2) => num1 + num2);
//     console.log('Reducción del array :',resultado);

// }

// ejercicio34();
// console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 35
// function ejercicio35(){
//     var arrayPares = ejercicio33()
//     var pares = arrayPares.filter(elemento => elemento % 2 == 0);
//     console.log('Lista de numeros pares :',pares);
// }

// ejercicio35();
// console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 36
// function ejercicio36(){
//     var parametro = 600851475143;
//     var nPrimos = ejercicio32(parametro);
//     var nFactores = ejercicio33(parametro);
//     var factoresPrimos = ejercicio33(nPrimos);

//     var suma = factoresPrimos.reduce((numUno, numDos) => numUno + numDos);
//     var sumaTotal = suma.reduce((numUno, numDos) => numUno + numDos);

//     console.log('N primos',nPrimos);
//     console.log('N factores',nFactores);
//     console.log('Factores primos ',factoresPrimos);
//     console.log('Resultado : ',sumaTotal);
// }

// ejercicio36();
// console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
// Ejercicio 37
function ejercicio37(){
    function num_mayor(numero){
        if (numero > numMayor){
            numMayor = numero;
        }
        return numMayor;
    }
    var arrayTest = [3,12,11,56,2,78,37];
    var numMayor = 0;

    arrayTest.forEach(num_mayor);
    console.log('Numero más alto :',numMayor);
}

ejercicio37();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//
