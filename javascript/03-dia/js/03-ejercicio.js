
     function cuadrado (x){
        return x * x;
    }

    function cubo (x){
        return 3**3;
    }

    function map(datos, funcion) {
        var nuevosDatos = [];
        for (var dato of datos){
            nuevosDatos.push(funcion(dato));
        }
        return nuevosDatos;
    }

    function cuadrado (x){
        return x * x;
    }

    function map(datos, funcion) {
        var nuevosDatos = [];
        for (var dato of datos){
            nuevosDatos.push(funcion(dato));
        }
        return nuevosDatos;
    }

    console.log('funcion cuadrado',map([1,2,3,4,5,6], cuadrado));
    console.log('funcion cubo',map([1,2,3,4,5,6], cubo));

    console.log('funcion anónima',map([1,2,3,4,5,6], function(x){
        return x ** 5;
    }));
