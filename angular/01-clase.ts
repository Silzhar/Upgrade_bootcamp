interface Vehiculo {
    marca: string;
    modelo: string;
    potencia?: number;
}
let coche: Vehiculo = {
    marca: "Audi",
    modelo: "A4"
}
let cocheDos: Vehiculo = {
    marca: "Volkswagen",
    modelo: "Golf",
    potencia: 100
}
let imprimirPotencia = (coche: Vehiculo, mensajeInicial: string = "Hola") => {
    console.log(mensajeInicial);
    console.log(coche);
}