
<?php

silzhar@picuet:~/Documentos/upgrade_hub/upgrade_bootcamp$ sudo mysql
[sudo] contraseña para silzhar: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 9
Server version: 8.0.19-0ubuntu0.19.10.3 (Ubuntu)

Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| bootcamp           |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.00 sec)


mysql> use bootcamp;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> show tables;
+--------------------+
| Tables_in_bootcamp |
+--------------------+
| clientes           |
| pedidos            |
| productos          |
+--------------------+
3 rows in set (0.00 sec)

mysql> describe clientes;
+-----------+-------------+------+-----+---------+-------+
| Field     | Type        | Null | Key | Default | Extra |
+-----------+-------------+------+-----+---------+-------+
| Id        | varchar(10) | NO   | PRI | NULL    |       |
| nombre    | varchar(20) | YES  |     | NULL    |       |
| apellido  | varchar(40) | YES  |     | NULL    |       |
| edad      | int         | YES  |     | NULL    |       |
| email     | varchar(50) | YES  |     | NULL    |       |
| categoria | varchar(15) | YES  |     | NULL    |       |
+-----------+-------------+------+-----+---------+-------+
6 rows in set (0.00 sec)


mysql> select * from productos;
+--------+----------------------+--------+------------+-----------+
| codigo | nombre               | precio | fechaALTA  | categoria |
+--------+----------------------+--------+------------+-----------+
| a01    | Azada pequeña 30cm   |  25.00 | 2017-10-06 |           |
| a02    | Azada mediana 45 cm  |  37.50 | 2017-11-02 |           |
| a03    | Azada grande 60cm    |  50.60 | 2018-05-03 |           |
| c01    | Cepillo abrillantar  |   2.50 | 2017-11-02 |           |
| c02    | Cepillo birutas      |   6.20 | 2017-10-06 |           |
| c03    | Cepillo jardín       |  22.35 | 2018-05-03 |           |
| p01    | Pegamento rápido     |   6.50 | 2017-11-02 |           |
| p02    | Pegamento industrial |  14.50 | 2017-10-06 |           |
| r01    | Regleta mod. ZAZ     |  10.00 | 2018-05-03 |           |
| r02    | Regleta mod. XAX     |  15.00 | 2018-05-03 |           |
+--------+----------------------+--------+------------+-----------+
10 rows in set (0.00 sec)


mysql> select apellido from clientes;
+----------+
| apellido |
+----------+
| Portal   |
| turttle  |
| turttle  |
| turttle  |
| turttle  |
+----------+
5 rows in set (0.00 sec)

mysql> select distinct apellido from clientes;
+----------+
| apellido |
+----------+
| Portal   |
| turttle  |
+----------+
2 rows in set (0.01 sec)


mysql> select apellido="turttle" from clientes;
+--------------------+
| apellido="turttle" |
+--------------------+
|                  0 |
|                  1 |
|                  1 |
|                  1 |
|                  1 |
+--------------------+
5 rows in set (0.00 sec)

mysql> select * from clientes;
+------------+---------------+----------+------+--------------------------------+-----------+
| Id         | nombre        | apellido | edad | email                          | categoria |
+------------+---------------+----------+------+--------------------------------+-----------+
| 0000000001 | Belen         | Portal   |   23 | belen@hotmail.com              | Classic   |
| 0000000002 | Donatello     | turttle  |   28 | DonatelloNinja@hotmail.com     | usuario   |
| 0000000003 | Michelanguelo | turttle  |   28 | MichelangueloNinja@hotmail.com | usuario   |
| 000000004  | Raphael       | turttle  |   28 | RaphaelNinja@hotmail.com       | usuario   |
| 000000005  | Leonardo      | turttle  |   28 | LeonardoNinja@hotmail.com      | usuario   |
+------------+---------------+----------+------+--------------------------------+-----------+
5 rows in set (0.00 sec)

mysql> select * from clientes where apellido = 'Portal';
+------------+--------+----------+------+-------------------+-----------+
| Id         | nombre | apellido | edad | email             | categoria |
+------------+--------+----------+------+-------------------+-----------+
| 0000000001 | Belen  | Portal   |   23 | belen@hotmail.com | Classic   |
+------------+--------+----------+------+-------------------+-----------+
1 row in set (0.00 sec)


mysql> select * from clientes where apellido = 'Portal' or apellido = 'turttle';
+------------+---------------+----------+------+--------------------------------+-----------+
| Id         | nombre        | apellido | edad | email                          | categoria |
+------------+---------------+----------+------+--------------------------------+-----------+
| 0000000001 | Belen         | Portal   |   23 | belen@hotmail.com              | Classic   |
| 0000000002 | Donatello     | turttle  |   28 | DonatelloNinja@hotmail.com     | usuario   |
| 0000000003 | Michelanguelo | turttle  |   28 | MichelangueloNinja@hotmail.com | usuario   |
| 000000004  | Raphael       | turttle  |   28 | RaphaelNinja@hotmail.com       | usuario   |
| 000000005  | Leonardo      | turttle  |   28 | LeonardoNinja@hotmail.com      | usuario   |
+------------+---------------+----------+------+--------------------------------+-----------+
5 rows in set (0.00 sec)

mysql> insert into clientes(Id,nombre, apellido, edad, email, categoria) values (6,'Alvaro','Marty',27,'hola@gmail.com','Informatico');
Query OK, 1 row affected (0.02 sec)

mysql> select * from clientes;
+------------+---------------+----------+------+--------------------------------+-------------+
| Id         | nombre        | apellido | edad | email                          | categoria   |
+------------+---------------+----------+------+--------------------------------+-------------+
| 0000000001 | Belen         | Portal   |   23 | belen@hotmail.com              | Classic     |
| 0000000002 | Donatello     | turttle  |   28 | DonatelloNinja@hotmail.com     | usuario     |
| 0000000003 | Michelanguelo | turttle  |   28 | MichelangueloNinja@hotmail.com | usuario     |
| 000000004  | Raphael       | turttle  |   28 | RaphaelNinja@hotmail.com       | usuario     |
| 000000005  | Leonardo      | turttle  |   28 | LeonardoNinja@hotmail.com      | usuario     |
| 6          | Alvaro        | Marty    |   27 | hola@gmail.com                 | Informatico |
+------------+---------------+----------+------+--------------------------------+-------------+
6 rows in set (0.00 sec)

mysql> select * from clientes where apellido = 'Portal' or apellido = 'Marty';
+------------+--------+----------+------+-------------------+-------------+
| Id         | nombre | apellido | edad | email             | categoria   |
+------------+--------+----------+------+-------------------+-------------+
| 0000000001 | Belen  | Portal   |   23 | belen@hotmail.com | Classic     |
| 6          | Alvaro | Marty    |   27 | hola@gmail.com    | Informatico |
+------------+--------+----------+------+-------------------+-------------+
2 rows in set (0.00 sec)



?>