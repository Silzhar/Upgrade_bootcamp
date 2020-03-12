var textArea = parseFloat(document.getElementById("resultado").value);
var variables = [];
var procesos = [];

var totalSuma = 0;
var operadorUno = 0;




function numero(entrada){
    
    if(textArea === 0 ){
        operadorUno = parseFloat(document.getElementById("resultado").value = entrada) ;
           
    }else{
        operadorUno =  parseFloat(document.getElementById("resultado").value += entrada);            
    }
    
}

 function sumar(){
    variables.push(operadorUno);
    procesos.push("+");
    document.getElementById("resultado").value = " ";
}

function restar(){
    variables.push(operadorUno);
    procesos.push("-");
    document.getElementById("resultado").value = " ";
}

function multiplicar(){
    variables.push(operadorUno);
    procesos.push("*");
    document.getElementById("resultado").value = " ";
}

function dividir(){
    variables.push(operadorUno);
    procesos.push("/");
    document.getElementById("resultado").value = " ";
}


function igual(){
    var suma =  procesos[0] === "+";
    var resta =  procesos[0] === "-";
    var division =  procesos[0] === "/";
    var multiplicacion =  procesos[0] === "*";
    console.log("suma ",suma);
    console.log("resta ",resta);
    console.log("div ",division);
    console.log("* ",multiplicacion);

    var procesosMax = procesos.length;

    var operadorDos = parseFloat(document.getElementById("resultado").value);
    variables.push(operadorDos);

    switch(procesosMax > 1){
        case suma == true:
            console.log("switch suma ");
      
            variables.forEach(function(operador){
                totalSuma += operador;
                document.getElementById("resultado").value = totalSuma;
                  
                });
                break;

        case resta == true:
            console.log("switch resta ");
        
            variables.forEach(function(operador){
                totalSuma -= operador;
                document.getElementById("resultado").value = totalSuma;
                   
                });
                break;

        case division == true:
            console.log("switch division ");
        
            variables.forEach(function(operador){
                totalSuma /= operador;
                document.getElementById("resultado").value = totalSuma;
                  
                });
                break;

        case multiplicacion == true:
            console.log("switch multiplicacion ");
        
            variables.forEach(function(operador){
                totalSuma *= operador;
                document.getElementById("resultado").value = totalSuma;
                

                });
                break;

        default:
            console.log("no entra en switch - case");
            }

}     
        
    



function limpiar(){
    document.getElementById("resultado").value = " ";
    variables.length = 0;  
    totalSuma = 0;
}

