

    function suma(){
        var s = 0;
        for (var i = 0; i < arguments.length; i++){
            s += arguments[i];
            console.log('argumentos de i :',arguments[i]);
            }
            return s;
    }

    console.log('la suma total es : ',suma(1,2,3,4,5,6,7,8,9,10));
