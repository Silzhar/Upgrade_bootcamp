<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CALCULADORA</title>
</head>
<body>
    <div>
        <form action="calculadora">
            <input type="number" placeholder="numero1">
            <input type="number" placeholder="numerero2">
        </form>
    </div>
    <?php

    $numero1 = htmlspecialchars("numero1");
    $numero2 = htmlspecialchars("numero2");

    $suma = $numero1 + $numero2;

    $resta = $numero1 - $numero2;

    $producto = $numero1 * $numero2;

    $division = $numero1 / $nuemro2;

    ?> 
</body>
</html> -->

// version 2

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CALCULADORA</title>
</head>
<body>
    <div>
        <form action="calculadora">
            <input type="number1" placeholder="numero1">
            <input type="number2" placeholder="numerero2">
            <input type="text" placeholder="proceso">
        </form>
    </div>
    <?php

    
    $numero1 = $_POST['number1'];
    $numero2 = $_POST['number2'];
    $proceso = "";

    switch($proceso){
        case  "+":
            $suma = $numero1 + $numero2;
            echo "La suma es : $suma";
        case "-":
            $resta = $numero1 - $numero2;
            echo "La resta es : $resta";
        case "*":
            $producto = $numero1 * $numero2;
            echo "El producto es : $producto";
        case "/":
            $division = $numero1 / $nuemro2;
            echo "La división es : $division";
    }

    ?>
</body>
</html>