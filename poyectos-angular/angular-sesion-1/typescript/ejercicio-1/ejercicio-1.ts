/*
Ejercicio 1: El rectángulo

Debes crear una clase para definir un rectángulo con dos propiedades:

1. Base
2. Altura

También debe tener un método para calcular el área (Base * Altura),
este método deberá devolver un valor numérico.

Vamos a dejarte una base para que la completes,
debes completar aquellos sitios donde se indique XXXX:
*/

class Rectangulo {
  private XXXX: XXXX = XXXX;
  private XXXX: XXXX = XXXX;

  constructor(XXXX: XXXX, XXXX: XXXX) {
    this.XXXX = XXXX;
    this.XXXX = XXXX;
  }

  public calcularArea(): XXXX {
    return this.XXXX * this.XXXX;
  }
}

console.log('Base del RECTANGULO-1', new Rectangulo(2, 6).calcularArea());
console.log('Base del RECTANGULO-2', new Rectangulo(3, 9).calcularArea());

/*
Cuando lo tengas listo, compila tu TypeScript y comprueba
que al ejecutar el fichero js con node, devuelve un resultado correcto:

node ejercicio1.js

Base del RECTANGULO-1 12
Base del RECTANGULO-2 27
*/
