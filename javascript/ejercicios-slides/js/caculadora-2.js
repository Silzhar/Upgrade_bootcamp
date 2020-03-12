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

    var operadorDos = parseFloat(document.getElementById("resultado").value);
    variables.push(operadorDos);


    if (suma == true){
        console.log("suma ");
    
        variables.forEach(function(operador){
            totalSuma += operador;
            document.getElementById("resultado").value = totalSuma;
                
            });
    }

    else if (resta == true){
        console.log(" resta ");
        totalSuma = variables.reduce((primerNumero, segundoNumero) => primerNumero - segundoNumero);
        document.getElementById("resultado").value = totalSuma;
    }
        
    else if (division == true){
        console.log(" division ");
        totalSuma = variables.reduce((primerNumero, segundoNumero) => primerNumero / segundoNumero);
        document.getElementById("resultado").value = totalSuma;
    }

    else if (multiplicacion == true){
        console.log("multiplicacion ");
        totalSuma = variables.reduce((primerNumero, segundoNumero) => primerNumero * segundoNumero);
        document.getElementById("resultado").value = totalSuma;
    }

    procesos.length = 0;
    variables.length = 0; 
    operadorUno = parseFloat(document.getElementById("resultado").value);
    variables.push(operadorUno);
    operadorUno = 0;
}
        
    
function limpiar(){
    document.getElementById("resultado").value = " ";
    variables.length = 0; 
    procesos.length = 0; 
    totalSuma = 0;
}

