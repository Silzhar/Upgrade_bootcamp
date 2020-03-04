
var a = ["a", "b", "h", "b", "w", "z"];

// Evitar duplicados .

function sinDuplicados(a){
    var b = [];
    for (var x of a) {
        if (b.indexOf(x) == -1){
            b.push(x);
        }
    }
    return b;
} 

// Guardar sin duplicados en otra variable.
var aSinDuplicados = sinDuplicados(a);

// Borrar duplicados en a .
var a = sinDuplicados(a);
