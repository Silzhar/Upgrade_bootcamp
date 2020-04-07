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