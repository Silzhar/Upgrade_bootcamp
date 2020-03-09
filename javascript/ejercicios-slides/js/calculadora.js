
var textArea = parseFloat(document.getElementById("resultado").value);
var variables = [];
var salida = 0;
var operadores = ["+","-","/","*"];

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
        
    }else if(variables.length == 1){

    }
    else{
        document.getElementById("resultado").value = "";
        total = (variables.length -2) / (variables.length -1);
        document.getElementById("resultado").value = total;

    }
}


function multiplicar(textArea){
    textArea = parseFloat(document.getElementById("resultado").value);
    variables.push(textArea);
    document.getElementById("resultado").value = "";
    var total = variables[0] * variables[1];
    console.log('multiplicacion ',total);
}


function sumar(textArea){
    textArea = parseFloat(document.getElementById("resultado").value);
    variables.push(textArea);
    document.getElementById("resultado").value = "";
    var total = variables[0] + variables[1];
    console.log('suma ',total);
    document.getElementById("resultado") = total;
    }

function restar(textArea){
    textArea = parseFloat(document.getElementById("resultado").value);
    variables.push(textArea);
    document.getElementById("resultado").value = "";
    var total = variables[0] - variables[1];
    console.log('resta ',total);
    document.getElementById("resultado") = total;
}



function igual(textArea, textArea2){
    textArea2 = parseFloat(document.getElementById("resultado").value);

    if(textArea2.get(0).selectionStart == "/"){
    
        var operando = parseFloat(document.getElementById("resultado").value);
        console.log("array operando", operando);
        console.log('textarea 2',textArea2);

    }
    document.getElementById("resultado").value = "=";
}

function limpiar(variables){
    document.getElementById("resultado").value = " ";
    variables.length = 0;
}