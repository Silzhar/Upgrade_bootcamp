
var textArea = document.getElementById("resultado").value

function cero(){
    if(textArea == ""){
        document.getElementById("resultado").innerHTML = "0";
        console.log('if',textArea);
    }else{
        var incluir = textArea.value + "0";
        document.getElementById("resultado").innerHTML = incluir;
        console.log('else',textArea);

    }
    
}

function uno(){
    document.getElementById("resultado").innerHTML = "1";
}

function dos(){
    document.getElementById("resultado").innerHTML = "2";
}

function tres(){
    document.getElementById("resultado").innerHTML = "3";
}

function cuatro(){
    document.getElementById("resultado").innerHTML = "4";
}

function cinco(){
    document.getElementById("resultado").innerHTML = "5";
}

function seis(){
    document.getElementById("resultado").innerHTML = "6";
}

function siete(){
    document.getElementById("resultado").innerHTML = "7";
}

function ocho(){
    document.getElementById("resultado").innerHTML = "8";
}

function nueve(){
    document.getElementById("resultado").innerHTML = "9";
}

function dividir(){
    document.getElementById("resultado").innerHTML = "/";
}

function multiplicar(){
    document.getElementById("resultado").innerHTML = "*";
}

function sumar(){
    document.getElementById("resultado").innerHTML = "+";
}

function restar(){
    document.getElementById("resultado").innerHTML = "-";
}

function igual(){
    document.getElementById("resultado").innerHTML = "=";
}

function limpiar(){
    document.getElementById("resultado").innerHTML = " ";
}