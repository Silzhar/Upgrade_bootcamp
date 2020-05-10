var coche = {
    marca: "Audi",
    modelo: "A4"
};
var cocheDos = {
    marca: "Volkswagen",
    modelo: "Golf",
    potencia: 100
};
var imprimirPotencia = function (coche, mensajeInicial) {
    if (mensajeInicial === void 0) { mensajeInicial = "Hola"; }
    console.log(mensajeInicial);
    console.log(coche);
};
