console.log("javascrip ejercicios 25/02/2020 parte 2");

// Para ver indice y valor.
var frutas = ["pera", "manzana", "kiwi", "platano", "limon"];
for (var x in frutas){
    console.log(x, frutas[x]);
};

var i = 0;
while (i < 5){
    console.log("i = ",i);
    i++;
};

var n = 0;
while (frutas[n]){
    console.log("fruta ", n, " = ", frutas[n]);
    n++;
};

var y = 0;
while (frutas[y]){
    if (frutas[y] == "kiwi" || frutas[y] == frutas[y] == "limon"){
        console.log("frutas ácidas : kiwi y limón");
        break;
    }
    console.log("futras no ácidas ", y," = ",frutas[y]);
    y++;
}

