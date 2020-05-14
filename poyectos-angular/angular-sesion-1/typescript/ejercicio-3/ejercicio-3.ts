/*
Ejercicio 3: Mi función

La siguiente función (myFunction) contendrá parámetros obligatorios,
opcionales y otros serán por defecto si no le pasamos ninguno.

Deberás adaptarlos de la siguiente forma:

1. nombre → obligatorio y tipo `string`.
2. edad → opcional y tipo `number`.
3. arma → por defecto será  'pistola' (adivina el tipo).
*/

function myFunction(nombre, edad, arma) {
  console.log(nombre + ' tiene ' + edad + ' años y usa ' + arma);
}

myFunction('Spiderman', 21, 'telarañas');
myFunction('Viuda Negra', 70);
myFunction('Bucky Barnes');

/*
Cuando lo tengas listo, compila tu TypeScript y comprueba
que al ejecutar el fichero js con node, devuelve un resultado correcto:

node ejercicio3.js

Spiderman tiene 21 años y usa telarañas
Viuda Negra tiene 70 años y usa pistola
Bucky Barnes tiene undefined años y usa pistola
*/
