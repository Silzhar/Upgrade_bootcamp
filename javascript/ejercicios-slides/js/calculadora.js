
var textArea = parseFloat(document.getElementById("resultado").value);
var variables = [];
var totalSuma = 0;

function numero(entrada){
    if(textArea === 0 ){
        document.getElementById("resultado").value = entrada ;
        console.log('if',textArea);
    }else{
        salida =  document.getElementById("resultado").value += entrada;
        
    }
    
}

function dividir(textArea){
    textArea = parseFloat(document.getElementById("resultado").value);
    variables.push(textArea);
    document.getElementById("resultado").value = "";
    
    if(variables.length == 2){
        var total = variables[0] / variables[1];
        document.getElementById("resultado").value = total;
        console.log('division ',total);
        variables.length = 0;   
    }
}


function multiplicar(textArea){
    textArea = parseFloat(document.getElementById("resultado").value);
    variables.push(textArea);
    document.getElementById("resultado").value = "";
    
    if(variables.length == 2){
        var total = variables[0] * variables[1];
        document.getElementById("resultado").value = total;
        console.log('multiplicar ',total);
        variables.length = 0;   
    }
}


function sumar(textArea){
    textArea = parseFloat(document.getElementById("resultado").value);
    variables.push(textArea);
    document.getElementById("resultado").value = "";
    
    if(variables.length == 2){
        totalSuma = variables[0] + variables[1];
        document.getElementById("resultado").value = totalSuma;
        console.log('suma ',totalSuma);
        variables.length = 0; 
          
    }
    return totalSuma;
}

function restar(textArea){
    textArea = parseFloat(document.getElementById("resultado").value);
    variables.push(textArea);
    document.getElementById("resultado").value = "";
    
    if(variables.length == 2){
        var total = variables[0] - variables[1];
        document.getElementById("resultado").value = total;
        console.log('division ',total);
        variables.length = 0;   
    }
}


function igual(){
    document.getElementById("resultado").value = totalSuma;

}

function limpiar(){
    document.getElementById("resultado").value = " ";
}