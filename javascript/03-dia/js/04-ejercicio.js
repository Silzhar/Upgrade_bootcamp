
//  Factorial 
function fact(n){
    if (n <= 1) return 1;
    else return n * fact(n - 1);
}

console.log("fact(5)", fact(5));

// Fibonacci

function fibo(n){
    if (n <= 1) return 1;
    else return fibo( n - 1) + fibo(n - 2);
}

console.log("fibo(5)", fibo(5));

// callback
function procesarDatos(n, callback) {
    var s = 0;
    for (var i = 1; i < n; i++){
        s += fact(i) + fibo(i);
    }
    callback("Termina y muestra :", + s);
}

procesarDatos(40, function(mensaje){
    alert(mensaje);
});
