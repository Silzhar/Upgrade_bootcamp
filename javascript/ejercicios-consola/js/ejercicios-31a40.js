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
function ejercicio32(){
    function nPrimos(){
        while(contr < contr_max){
            if(contr % 2 !== 0 & contr % 3 !== 0 & contr % 5 !== 0 & contr % 7 !== 0){
                list_max.push(contr);
            }
            contr++;
        }

    }

    var contr = 7;
    var contr_max = 1000;
    var list_max = [2,3,5,7];

    nPrimos();
    console.log('Lista de numeros primos : ',list_max);
}

ejercicio32();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//