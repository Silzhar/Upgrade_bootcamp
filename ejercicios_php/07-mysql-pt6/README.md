# Instrucciones

Este repositorio contiene los ficheros para levantar un par de contenedores con Apache, PHP y MySQL.


# Instrucciones

Para levantar el proyecto:

```
docker-compose up -d
```


Luego entrar en el contenedor de PHP y ejecutar lo siguiente:



```
docker-compose exec webserver bash
composer dump-autoload
php fixtures.php
```


Bastará con entrar a la url: http://localhost:8000/