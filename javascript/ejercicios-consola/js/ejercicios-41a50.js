// Ejercicio 41
var max = 10;

function ejercicio41(max){
    function diferenciaCuadrados(){
    
        for (controller; controller <= control_max; controller++){
            var potencia =  Math.pow(controller, 2);
            listsumaCuadrados.push(potencia);

            list_num.push(controller);
        }

        var totalSumaCuadrados = listsumaCuadrados.reduce((num1, num2) => num1 + num2);
        var totalcuadradosSuma = Math.pow(list_num.reduce((num1, num2) => num1 + num2), 2);
        var resultado = [];
        resultado.push(totalcuadradosSuma - totalSumaCuadrados);

        console.log('Total suma de los cuadrados : ',totalSumaCuadrados);
        console.log('Total cuadrado de la suma de los numeros  : ',totalcuadradosSuma);
        console.log('Diferencia entre los cuadrados : ',resultado);

    }

    var controller = 0;
    var control_max = max;
    var list_num = [];
    var listsumaCuadrados = [];
    
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

ejercicio42();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//