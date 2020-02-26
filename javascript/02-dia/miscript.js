console.log("javascrip ejercicios 25/02/2020");

for(var x = 0; x < 5; x++) {
    console.log("X es igual a :",x);
};

var x = 10;
var y = ++x + 5;
console.log(y);
var n = 10;
var z = n++ + 5;
console.log(z);

for(var x = 0; x < 10; x += 2){
    console.log("valor de x :",x);
};

for (var i = 0; i < 20; i++){
    if (i % 2 == 0){
        console.log("par :", i);
    }else{
        console.log("impar :", i);
    }
};

var frutas = ["pera", "manzana", "kiwi", "platano"];
for (var i = 0; i < frutas.length; i++){
    console.log("fruta ", i, " = ",frutas[i]);
};

// Saca el valor.
for (var fruta of frutas){
    console.log("fruta : ",fruta);
};

//  Saca el indice.
for (var fruta in frutas){
    console.log("fruta : ",fruta);
};

var objeto = {color: "azul", fecha:"25-02-2020", total: 20};
for (var propiedad in objeto){
    console.log(propiedad, " = ",objeto[propiedad]);
}