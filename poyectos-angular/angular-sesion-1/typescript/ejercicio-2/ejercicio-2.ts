/*
Ejercicio 2: El camaleón

Dado el código siguiente, tendremos que crear una interfaz,
que sirva después para tipar y validar el objeto.
*/

const camaleon0 = {
  tipo: "reptil",
  peculiaridad: "camuflarse",
  sizecm: 20
};

console.log('CAMALEON', camaleon0);


// Pista:
interface Animal {
  // XXXX
}

const camaleon1 : Animal = {
  // XXXX
}

console.log('CAMALEON', camaleon1);

/*
Cuando lo tengas listo, compila tu TypeScript y comprueba
que al ejecutar el fichero js con node, devuelve un resultado correcto:

node ejercicio2.js

CAMALEON { tipo: 'reptil', peculiaridad: 'camuflarse', sizecm: 20 }
CAMALEON { tipo: 'reptil', peculiaridad: 'camuflarse', sizecm: 20 }
*/
