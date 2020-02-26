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
        <label action="calculadora" method="POST">
            <input type="number" placeholder="numero1">
            <input type="number" placeholder="numerero2">
            <input  name="proceso" type="text" placeholder="proceso">
            <input type="submit" value="CALCULAR">
        </label>
    </div>
    <?php

    $numero1 = 8;
    $numero2 = 4;
    // $proceso = htmlspecialchars($_POST["proceso"]);
    $proceso = "+";

    // Primer modo.
    switch($proceso){
        case  "+":
            $suma = $numero1 + $numero2;
            echo "La suma es : $suma <br>";
        case "-":
            $resta = $numero1 - $numero2;
            echo "La resta es : $resta <br>";
        case "*":
            $producto = $numero1 * $numero2;
            echo "El producto es : $producto <br>";
        case "/":
            $division = $numero1 / $numero2;
            echo "La división es : $division <br>";
    }
    
    echo "segunda version o segundo ejercicio <br>";
    // Segundo modo.

    if ( $proceso == "+") {
        $suma = $numero1 + $numero2;
        echo "La suma es : $suma <br>";
    } elseif ($proceso == "-") {
        $resta = $numero1 - $numero2;
        echo "La resta es : $resta <br>";
    } elseif ($proceso == "*") {
        $producto = $numero1 * $numero2;
        echo "El producto es : $producto <br>";
    } elseif ($proceso == "/") {
        $division = $numero1 / $numero2;
        echo "La división es : $division <br>";
    }
    ?>
</body>
</html>