/*
Ejercicio 4 → Clases y herencia

Te vamos a dejar declarada la clase `Videoconsola`,
de manera que puedas extender dicha clase en 3 videoconsolas diferentes:
  - Xbox
  - PlayStation
  - GameBoy

Requisitos:
  - La Xbox y la PlayStation deben llevar un atributo booleano que indique si tiene modoOnline
  - La GameBoy debe llevar un atributo numérico que indique el número de pilas para funcionar numPilas
  - La GameBoy es la única videoconsola portátil.
  - La PlayStation tendrá un atributo que indique su precioModoOnline numérico, fijado a 30 por defecto.

Genera las clases necesarias y crea 4 videoconsolas, e imprime mediante 'console.log' cada una de ellas.

*/

class Videoconsola {
  nombre: string;
  color: string;
  portatil: boolean;

  constructor(nombre: string, color: string, portatil: boolean = false) {
    this.nombre = nombre;
    this.color = color;
    this.portatil = portatil;
  }
}

class Xbox extends Videoconsola {
  // XXXX
}

class PlayStation extends Videoconsola {
  // XXXX
}

class GameBoy extends Videoconsola {
  // XXXX
}

const xbox: Xbox = new Xbox('Xbox 360', 'Blanca', false, true);
const playstation2: PlayStation = new PlayStation('Play Station 2', 'Negra', false, false, 0);
const playstation4: PlayStation = new PlayStation('Play Station 4', 'Negra', false, true);
const gameboy: GameBoy = new GameBoy('Game Boy Color', 'Roja', undefined, 2);

console.log(xbox);
console.log(playstation2);
console.log(playstation4);
console.log(gameboy);

/*
Cuando lo tengas listo, compila tu TypeScript y comprueba
que al ejecutar el fichero js con node, devuelve un resultado correcto:

node ejercicio4.js

Xbox {
  nombre: 'Xbox 360',
  color: 'Blanca',
  portatil: false,
  modoOnline: true
}

PlayStation {
  nombre: 'Play Station 2',
  color: 'Negra',
  portatil: false,
  modoOnline: false,
  precioModoOnline: 0
}

PlayStation {
  nombre: 'Play Station 4',
  color: 'Negra',
  portatil: false,
  modoOnline: true,
  precioModoOnline: 30
}

GameBoy {
  nombre: 'Game Boy Color',
  color: 'Roja',
  portatil: true,
  numPilas: 2
}
*/