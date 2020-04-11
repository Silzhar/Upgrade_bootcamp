// Ejercicio 41
function ejercicio41(){
    function diferenciaCuadrados(num){
    
        var controller = 0;
        var control_max = num;
        var list_num = [];
        var listsumaCuadrados = [];

        for (controller; controller <= control_max; controller++){
            var potencia =  Math.pow(controller, 2);
            listsumaCuadrados.push(potencia);

            list_num.push(controller);
        }

        var totalSumaCuadrados = listsumaCuadrados.reduce((num1, num2) => num1 + num2);
        var totalcuadradosSuma = Math.pow(list_num.reduce((num1, num2) => num1 + num2), 2);
        var resultado = totalcuadradosSuma - totalSumaCuadrados;

        console.log('Total suma de los cuadrados : ',totalSumaCuadrados);
        console.log('Total cuadrado de la suma de los numeros  : ',totalcuadradosSuma);
        console.log('Diferencia entre los cuadrados : ',resultado);

    }
    
    diferenciaCuadrados(100);
    
}

ejercicio41();
console.log('//----------------------/////----------------------//')
//-----------------------------------/////////----------------/////////---------------------------//