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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Videoconsola = /** @class */ (function () {
    function Videoconsola(nombre, color, portatil) {
        if (portatil === void 0) { portatil = false; }
        this.nombre = nombre;
        this.color = color;
        this.portatil = portatil;
    }
    return Videoconsola;
}());
var Xbox = /** @class */ (function (_super) {
    __extends(Xbox, _super);
    function Xbox(nombre, color, portatil, modoOnline) {
        var _this = _super.call(this, nombre, color, portatil) || this;
        _this.modoOnline = modoOnline;
        return _this;
    }
    return Xbox;
}(Videoconsola));
var PlayStation = /** @class */ (function (_super) {
    __extends(PlayStation, _super);
    function PlayStation(nombre, color, portatil, modoOnline, precioModoOnline) {
        if (precioModoOnline === void 0) { precioModoOnline = 30; }
        var _this = _super.call(this, nombre, color, portatil) || this;
        _this.modoOnline = modoOnline;
        _this.precioModoOnline = precioModoOnline;
        return _this;
    }
    return PlayStation;
}(Videoconsola));
var GameBoy = /** @class */ (function (_super) {
    __extends(GameBoy, _super);
    function GameBoy(nombre, color, portatil, numPilas) {
        if (portatil === void 0) { portatil = true; }
        var _this = _super.call(this, nombre, color, portatil) || this;
        _this.numPilas = numPilas;
        return _this;
    }
    return GameBoy;
}(Videoconsola));
var xbox = new Xbox('Xbox 360', 'Blanca', false, true);
var playstation2 = new PlayStation('Play Station 2', 'Negra', false, false, 0);
var playstation4 = new PlayStation('Play Station 4', 'Negra', false, true);
var gameboy = new GameBoy('Game Boy Color', 'Roja', undefined, 2);
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
