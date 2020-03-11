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
    // if (variables.length > 2){  
    //     variables.forEach(function(operador){
    //         totalSuma += operador;
    //         return totalSuma;
    //     });   
    //     }
    }
    

function igual(){
    var suma =  procesos[0] == "+";

    var operadorDos = parseFloat(document.getElementById("resultado").value);
    variables.push(operadorDos);

    switch(procesos.length > 1){
        case suma:
            console.log("switch suma ");
            if (variables.length > 2){  
                variables.forEach(function(operador){
                    totalSuma += operador;
                    return totalSuma;
                });   
            }
            break;
        }     
        // default:
        //     console.log("no entra en switch - case");
    

}

function limpiar(){
    document.getElementById("resultado").value = " ";
}

