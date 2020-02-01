<?php

// querys MySQL

silzhar@picuet:~/Documentos/upgrade_hub/upgrade_bootcamp$ sudo mysql
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 11
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
5 rows in set (0.01 sec)

mysql> use databases Database;
ERROR 1049 (42000): Unknown database 'databases'
mysql> use Database;
ERROR 1049 (42000): Unknown database 'Database'
mysql> describe Database;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'Database' at line 1
mysql> use Database;
ERROR 1049 (42000): Unknown database 'Database'
mysql> use database;
ERROR 1049 (42000): Unknown database 'database'
mysql> use Database;
ERROR 1049 (42000): Unknown database 'Database'
mysql> use bootcamp;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> describe bootcamp;
ERROR 1146 (42S02): Table 'bootcamp.bootcamp' doesn't exist
mysql> describe clentes;
ERROR 1146 (42S02): Table 'bootcamp.clentes' doesn't exist
mysql> show bootcamp;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'bootcamp' at line 1
mysql> describe bootcamp;
ERROR 1146 (42S02): Table 'bootcamp.bootcamp' doesn't exist
mysql> show tables;
+--------------------+
| Tables_in_bootcamp |
+--------------------+
| clientes           |
+--------------------+
1 row in set (0.00 sec)

mysql> describe clentes;
ERROR 1146 (42S02): Table 'bootcamp.clentes' doesn't exist
mysql> describe clientes;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| Id       | varchar(10) | YES  |     | NULL    |       |
| nombre   | varchar(20) | YES  |     | NULL    |       |
| apellido | varchar(40) | YES  |     | NULL    |       |
| edad     | int(2)      | YES  |     | NULL    |       |
| email    | varchar(50) | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
5 rows in set (0.01 sec)

mysql> alter table clientes add primary key(Id);
Query OK, 0 rows affected (0.15 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> create table visitante(
    -> codvisit varchar(10),
    -> codTienda varchar(12),
    -> nombre varchar(30),
    -> edad tinyint unsigned,
    -> sexo char,
    -> domicilio varchar(30),
    -> ciudad varchar(20),
    -> telefono varchar(11),
    -> montocompra float unsigned,
    -> primary key (codvisit),
    -> foreing key (codTienda) references tienda(codigo);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'key (codTienda) references tienda(codigo)' at line 12
mysql> create table pedidos(numPedido varchar(10) primary key, empresa_envio varchar(20), fecha date, precio float(4,2), unidades integer(3));
Query OK, 0 rows affected, 2 warnings (0.08 sec)

mysql> describe pedidos;
+---------------+-------------+------+-----+---------+-------+
| Field         | Type        | Null | Key | Default | Extra |
+---------------+-------------+------+-----+---------+-------+
| numPedido     | varchar(10) | NO   | PRI | NULL    |       |
| empresa_envio | varchar(20) | YES  |     | NULL    |       |
| fecha         | date        | YES  |     | NULL    |       |
| precio        | float(4,2)  | YES  |     | NULL    |       |
| unidades      | int         | YES  |     | NULL    |       |
+---------------+-------------+------+-----+---------+-------+
5 rows in set (0.01 sec)

mysql> alter table pedidos add foreing key(codCliente) refenences clientes(Id);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'key(codCliente) refenences clientes(Id)' at line 1
mysql> alter table codCliende;
ERROR 1146 (42S02): Table 'bootcamp.codCliende' doesn't exist
mysql> alter table add codCliente add varchar(10);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'add codCliente add varchar(10)' at line 1
mysql> alter table add codCliente add varchar(10);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'add codCliente add varchar(10)' at line 1
mysql> alter table codCliente add varchar(10);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'varchar(10)' at line 1
mysql> alter table clientes add codCliente varchar(10);
Query OK, 0 rows affected (0.06 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> describe pedidos;
+---------------+-------------+------+-----+---------+-------+
| Field         | Type        | Null | Key | Default | Extra |
+---------------+-------------+------+-----+---------+-------+
| numPedido     | varchar(10) | NO   | PRI | NULL    |       |
| empresa_envio | varchar(20) | YES  |     | NULL    |       |
| fecha         | date        | YES  |     | NULL    |       |
| precio        | float(4,2)  | YES  |     | NULL    |       |
| unidades      | int         | YES  |     | NULL    |       |
+---------------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

mysql> alter table pedidos  add codCliente varchar(10);
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> describe pedidos;
+---------------+-------------+------+-----+---------+-------+
| Field         | Type        | Null | Key | Default | Extra |
+---------------+-------------+------+-----+---------+-------+
| numPedido     | varchar(10) | NO   | PRI | NULL    |       |
| empresa_envio | varchar(20) | YES  |     | NULL    |       |
| fecha         | date        | YES  |     | NULL    |       |
| precio        | float(4,2)  | YES  |     | NULL    |       |
| unidades      | int         | YES  |     | NULL    |       |
| codCliente    | varchar(10) | YES  |     | NULL    |       |
+---------------+-------------+------+-----+---------+-------+
6 rows in set (0.00 sec)

mysql> alter table pedidos add foreing key(codCliente) refenences clientes(Id);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'key(codCliente) refenences clientes(Id)' at line 1
mysql> drop pedidos codCliente;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'pedidos codCliente' at line 1
mysql> ALTER TABLE pedidos DROP CodCliente;
Query OK, 0 rows affected (0.10 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> alter table pedidos add foreing key(codCliente) refenences clientes(Id);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'key(codCliente) refenences clientes(Id)' at line 1
mysql> describe pedidos;
+---------------+-------------+------+-----+---------+-------+
| Field         | Type        | Null | Key | Default | Extra |
+---------------+-------------+------+-----+---------+-------+
| numPedido     | varchar(10) | NO   | PRI | NULL    |       |
| empresa_envio | varchar(20) | YES  |     | NULL    |       |
| fecha         | date        | YES  |     | NULL    |       |
| precio        | float(4,2)  | YES  |     | NULL    |       |
| unidades      | int         | YES  |     | NULL    |       |
+---------------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

mysql> describe clientes;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| Id         | varchar(10) | NO   | PRI | NULL    |       |
| nombre     | varchar(20) | YES  |     | NULL    |       |
| apellido   | varchar(40) | YES  |     | NULL    |       |
| edad       | int         | YES  |     | NULL    |       |
| email      | varchar(50) | YES  |     | NULL    |       |
| codCliente | varchar(10) | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
6 rows in set (0.00 sec)

mysql> ALTER TABLE pedidos ADD codCliente;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '' at line 1
mysql> alter table pedidos  add codCliente varchar(10);
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> alter table pedidos add foreing key(codCliente) refenences clientes(Id);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'key(codCliente) refenences clientes(Id)' at line 1
mysql> describe pedidos
    -> ;
+---------------+-------------+------+-----+---------+-------+
| Field         | Type        | Null | Key | Default | Extra |
+---------------+-------------+------+-----+---------+-------+
| numPedido     | varchar(10) | NO   | PRI | NULL    |       |
| empresa_envio | varchar(20) | YES  |     | NULL    |       |
| fecha         | date        | YES  |     | NULL    |       |
| precio        | float(4,2)  | YES  |     | NULL    |       |
| unidades      | int         | YES  |     | NULL    |       |
| codCliente    | varchar(10) | YES  |     | NULL    |       |
+---------------+-------------+------+-----+---------+-------+
6 rows in set (0.00 sec)

mysql> describe clietes;
ERROR 1146 (42S02): Table 'bootcamp.clietes' doesn't exist
mysql> describe clientes;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| Id         | varchar(10) | NO   | PRI | NULL    |       |
| nombre     | varchar(20) | YES  |     | NULL    |       |
| apellido   | varchar(40) | YES  |     | NULL    |       |
| edad       | int         | YES  |     | NULL    |       |
| email      | varchar(50) | YES  |     | NULL    |       |
| codCliente | varchar(10) | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
6 rows in set (0.01 sec)

mysql> describe pedidos;
+---------------+-------------+------+-----+---------+-------+
| Field         | Type        | Null | Key | Default | Extra |
+---------------+-------------+------+-----+---------+-------+
| numPedido     | varchar(10) | NO   | PRI | NULL    |       |
| empresa_envio | varchar(20) | YES  |     | NULL    |       |
| fecha         | date        | YES  |     | NULL    |       |
| precio        | float(4,2)  | YES  |     | NULL    |       |
| unidades      | int         | YES  |     | NULL    |       |
| codCliente    | varchar(10) | YES  |     | NULL    |       |
+---------------+-------------+------+-----+---------+-------+
6 rows in set (0.00 sec)

mysql> alter table pedidos add foreing key(codCliente) refenences clientes(codCliente);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'key(codCliente) refenences clientes(codCliente)' at line 1
mysql> alter table pedidos add foreing key(codCliente) references clientes(Id);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'key(codCliente) references clientes(Id)' at line 1
mysql> alter table pedidos add foreign key(codCliente) references clientes(Id);
Query OK, 0 rows affected (0.21 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> insert into clientes values ("0000000001", "Belen", "Portal", 23, "belen@hotmail.com");
ERROR 1136 (21S01): Column count doesn't match value count at row 1
mysql> alter table clientes drop codCliente;
Query OK, 0 rows affected (0.13 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> insert into clientes values ("0000000001", "Belen", "Portal", 23, "belen@hotmail.com");
Query OK, 1 row affected (0.02 sec)

mysql> insert into clientes values ("0000000002", "Donatello", "turttle", 28, "DonatelloNinja@hotmail.com");
Query OK, 1 row affected (0.01 sec)

mysql> insert into clientes values ("0000000003", "Michelanguelo", "turttle", 28, "MichelangueloNinja@hotmail.com");
Query OK, 1 row affected (0.01 sec)

mysql> insert into clientes values ("000000004", "Raphael", "turttle", 28, "RaphaelNinja@hotmail.com");
Query OK, 1 row affected (0.01 sec)

mysql> insert into clientes values ("000000005", "Leonardo", "turttle", 28, "LeonardoNinja@hotmail.com");
Query OK, 1 row affected (0.02 sec)

mysql> select * from clientes;
+------------+---------------+----------+------+--------------------------------+
| Id         | nombre        | apellido | edad | email                          |
+------------+---------------+----------+------+--------------------------------+
| 0000000001 | Belen         | Portal   |   23 | belen@hotmail.com              |
| 0000000002 | Donatello     | turttle  |   28 | DonatelloNinja@hotmail.com     |
| 0000000003 | Michelanguelo | turttle  |   28 | MichelangueloNinja@hotmail.com |
| 000000004  | Raphael       | turttle  |   28 | RaphaelNinja@hotmail.com       |
| 000000005  | Leonardo      | turttle  |   28 | LeonardoNinja@hotmail.com      |
+------------+---------------+----------+------+--------------------------------+
5 rows in set (0.00 sec)

mysql> delete from clientes where nombre="Belen";
Query OK, 1 row affected (0.03 sec)

mysql> select * from clientes;
+------------+---------------+----------+------+--------------------------------+
| Id         | nombre        | apellido | edad | email                          |
+------------+---------------+----------+------+--------------------------------+
| 0000000002 | Donatello     | turttle  |   28 | DonatelloNinja@hotmail.com     |
| 0000000003 | Michelanguelo | turttle  |   28 | MichelangueloNinja@hotmail.com |
| 000000004  | Raphael       | turttle  |   28 | RaphaelNinja@hotmail.com       |
| 000000005  | Leonardo      | turttle  |   28 | LeonardoNinja@hotmail.com      |
+------------+---------------+----------+------+--------------------------------+
4 rows in set (0.00 sec)

mysql> insert into clientes values ("0000000001", "Belen", "Portal", 23, "belen@hotmail.com");
Query OK, 1 row affected (0.02 sec)

mysql> select nombre, apellido from clientes;
+---------------+----------+
| nombre        | apellido |
+---------------+----------+
| Belen         | Portal   |
| Donatello     | turttle  |
| Michelanguelo | turttle  |
| Raphael       | turttle  |
| Leonardo      | turttle  |
+---------------+----------+
5 rows in set (0.00 sec)

mysql> alter table clientes add  categoria varchar(15);
Query OK, 0 rows affected (0.06 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> select * from clientes;
+------------+---------------+----------+------+--------------------------------+-----------+
| Id         | nombre        | apellido | edad | email                          | categoria |
+------------+---------------+----------+------+--------------------------------+-----------+
| 0000000001 | Belen         | Portal   |   23 | belen@hotmail.com              | NULL      |
| 0000000002 | Donatello     | turttle  |   28 | DonatelloNinja@hotmail.com     | NULL      |
| 0000000003 | Michelanguelo | turttle  |   28 | MichelangueloNinja@hotmail.com | NULL      |
| 000000004  | Raphael       | turttle  |   28 | RaphaelNinja@hotmail.com       | NULL      |
| 000000005  | Leonardo      | turttle  |   28 | LeonardoNinja@hotmail.com      | NULL      |
+------------+---------------+----------+------+--------------------------------+-----------+
5 rows in set (0.00 sec)

mysql> update clientes set categoria"usuario";
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '"usuario"' at line 1
mysql> update clientes set=categoria"usuario";
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '=categoria"usuario"' at line 1
mysql> describe pedidos;
+---------------+-------------+------+-----+---------+-------+
| Field         | Type        | Null | Key | Default | Extra |
+---------------+-------------+------+-----+---------+-------+
| numPedido     | varchar(10) | NO   | PRI | NULL    |       |
| empresa_envio | varchar(20) | YES  |     | NULL    |       |
| fecha         | date        | YES  |     | NULL    |       |
| precio        | float(4,2)  | YES  |     | NULL    |       |
| unidades      | int         | YES  |     | NULL    |       |
| codCliente    | varchar(10) | YES  | MUL | NULL    |       |
+---------------+-------------+------+-----+---------+-------+
6 rows in set (0.00 sec)

mysql> select nombre,edad, edad+20 as MAYOR from clientes;
+---------------+------+-------+
| nombre        | edad | MAYOR |
+---------------+------+-------+
| Belen         |   23 |    43 |
| Donatello     |   28 |    48 |
| Michelanguelo |   28 |    48 |
| Raphael       |   28 |    48 |
| Leonardo      |   28 |    48 |
+---------------+------+-------+
5 rows in set (0.01 sec)

mysql> select Nombre, apellido from clientes where apellido like"%por%";
+--------+----------+
| Nombre | apellido |
+--------+----------+
| Belen  | Portal   |
+--------+----------+
1 row in set (0.00 sec)

mysql> sellect * from clientes order by nombre;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'sellect * from clientes order by nombre' at line 1
mysql> select * from clientes order by nombre;
+------------+---------------+----------+------+--------------------------------+-----------+
| Id         | nombre        | apellido | edad | email                          | categoria |
+------------+---------------+----------+------+--------------------------------+-----------+
| 0000000001 | Belen         | Portal   |   23 | belen@hotmail.com              | NULL      |
| 0000000002 | Donatello     | turttle  |   28 | DonatelloNinja@hotmail.com     | NULL      |
| 000000005  | Leonardo      | turttle  |   28 | LeonardoNinja@hotmail.com      | NULL      |
| 0000000003 | Michelanguelo | turttle  |   28 | MichelangueloNinja@hotmail.com | NULL      |
| 000000004  | Raphael       | turttle  |   28 | RaphaelNinja@hotmail.com       | NULL      |
+------------+---------------+----------+------+--------------------------------+-----------+
5 rows in set (0.00 sec)

mysql> update clientes set categoria="usuario";
Query OK, 5 rows affected (0.02 sec)
Rows matched: 5  Changed: 5  Warnings: 0

mysql> update clientes set categoria="usuario" where nombre as Belen="classic";
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'as Belen="classic"' at line 1
mysql> update clientes set categoria="Classic" where Nombre="Belen";
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> describe pedidos;
+---------------+-------------+------+-----+---------+-------+
| Field         | Type        | Null | Key | Default | Extra |
+---------------+-------------+------+-----+---------+-------+
| numPedido     | varchar(10) | NO   | PRI | NULL    |       |
| empresa_envio | varchar(20) | YES  |     | NULL    |       |
| fecha         | date        | YES  |     | NULL    |       |
| precio        | float(4,2)  | YES  |     | NULL    |       |
| unidades      | int         | YES  |     | NULL    |       |
| codCliente    | varchar(10) | YES  | MUL | NULL    |       |
+---------------+-------------+------+-----+---------+-------+
6 rows in set (0.01 sec)

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

mysql> show categoria;

mysql> select distinct(categoria) from clientes;
+-----------+
| categoria |
+-----------+
| Classic   |
| usuario   |
+-----------+
2 rows in set (0.00 sec)


mysql> create table productos( codigo varchar(10), nombre varchar(30), precio float(6,2) unsigned not NULL, fechaALTA date, primary key(codigo));
Query OK, 0 rows affected, 2 warnings (0.08 sec)

mysql> show tables;
+--------------------+
| Tables_in_bootcamp |
+--------------------+
| clientes           |
| pedidos            |
| productos          |
+--------------------+
3 rows in set (0.00 sec)

mysql> describe productos;
+-----------+---------------------+------+-----+---------+-------+
| Field     | Type                | Null | Key | Default | Extra |
+-----------+---------------------+------+-----+---------+-------+
| codigo    | varchar(10)         | NO   | PRI | NULL    |       |
| nombre    | varchar(30)         | YES  |     | NULL    |       |
| precio    | float(6,2) unsigned | NO   |     | NULL    |       |
| fechaALTA | date                | YES  |     | NULL    |       |
+-----------+---------------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

mysql> update clientes set categoria"usuario";

ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'INSERTINTOproductos VALUES('c01','Cepillo abrillantar',2.50,'2017-11-02')' at line 1
mysql> INSERT INTO productos VALUES('c01','Cepillo abrillantar',2.50,'2017-11-02');
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO productos VALUES('r01','Regleta mod. ZAZ',10,'2018-05-03');
Query OK, 1 row affected (0.02 sec)

mysql> INSERT INTO productos VALUES('r02','Regleta mod. XAX',15,'2018-05-03'),('p01','Pegamento rápido',6.50,'2017-11-02');
Query OK, 2 rows affected (0.01 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> INSERT INTO productos VALUES('p02','Pegamento industrial',14.50,'2017-10-06'),('a03','Azada grande 60cm',50.60,'2018-05-03'),('c02','Cepillo birutas',6.20,'2017-10-06'), ('c03','Cepillo jardín',22.35,'2018-05-03'),('a01','Azada pequeña 30cm',25,'2017-10-06'),('a02','Azada mediana 45 cm',37.50,'2017-11-02');
Query OK, 6 rows affected (0.02 sec)
Records: 6  Duplicates: 0  Warnings: 0

mysql> describe * productos;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '* productos' at line 1
mysql> describe productos;
+-----------+---------------------+------+-----+---------+-------+
| Field     | Type                | Null | Key | Default | Extra |
+-----------+---------------------+------+-----+---------+-------+
| codigo    | varchar(10)         | NO   | PRI | NULL    |       |
| nombre    | varchar(30)         | YES  |     | NULL    |       |
| precio    | float(6,2) unsigned | NO   |     | NULL    |       |
| fechaALTA | date                | YES  |     | NULL    |       |
+-----------+---------------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

mysql> select nombre from productos;
+----------------------+
| nombre               |
+----------------------+
| Azada pequeña 30cm   |
| Azada mediana 45 cm  |
| Azada grande 60cm    |
| Cepillo abrillantar  |
| Cepillo birutas      |
| Cepillo jardín       |
| Pegamento rápido     |
| Pegamento industrial |
| Regleta mod. ZAZ     |
| Regleta mod. XAX     |
+----------------------+
10 rows in set (0.00 sec)

mysql> select * from productos;
+--------+----------------------+--------+------------+
| codigo | nombre               | precio | fechaALTA  |
+--------+----------------------+--------+------------+
| a01    | Azada pequeña 30cm   |  25.00 | 2017-10-06 |
| a02    | Azada mediana 45 cm  |  37.50 | 2017-11-02 |
| a03    | Azada grande 60cm    |  50.60 | 2018-05-03 |
| c01    | Cepillo abrillantar  |   2.50 | 2017-11-02 |
| c02    | Cepillo birutas      |   6.20 | 2017-10-06 |
| c03    | Cepillo jardín       |  22.35 | 2018-05-03 |
| p01    | Pegamento rápido     |   6.50 | 2017-11-02 |
| p02    | Pegamento industrial |  14.50 | 2017-10-06 |
| r01    | Regleta mod. ZAZ     |  10.00 | 2018-05-03 |
| r02    | Regleta mod. XAX     |  15.00 | 2018-05-03 |
+--------+----------------------+--------+------------+
10 rows in set (0.00 sec)

mysql> select nombre="cepillo" from productos;
+------------------+
| nombre="cepillo" |
+------------------+
|                0 |
|                0 |
|                0 |
|                0 |
|                0 |
|                0 |
|                0 |
|                0 |
|                0 |
|                0 |
+------------------+
10 rows in set (0.00 sec)

mysql> describe productos;
+-----------+---------------------+------+-----+---------+-------+
| Field     | Type                | Null | Key | Default | Extra |
+-----------+---------------------+------+-----+---------+-------+
| codigo    | varchar(10)         | NO   | PRI | NULL    |       |
| nombre    | varchar(30)         | YES  |     | NULL    |       |
| precio    | float(6,2) unsigned | NO   |     | NULL    |       |
| fechaALTA | date                | YES  |     | NULL    |       |
+-----------+---------------------+------+-----+---------+-------+
4 rows in set (0.01 sec)

mysql> select * from productos;
+--------+----------------------+--------+------------+
| codigo | nombre               | precio | fechaALTA  |
+--------+----------------------+--------+------------+
| a01    | Azada pequeña 30cm   |  25.00 | 2017-10-06 |
| a02    | Azada mediana 45 cm  |  37.50 | 2017-11-02 |
| a03    | Azada grande 60cm    |  50.60 | 2018-05-03 |
| c01    | Cepillo abrillantar  |   2.50 | 2017-11-02 |
| c02    | Cepillo birutas      |   6.20 | 2017-10-06 |
| c03    | Cepillo jardín       |  22.35 | 2018-05-03 |
| p01    | Pegamento rápido     |   6.50 | 2017-11-02 |
| p02    | Pegamento industrial |  14.50 | 2017-10-06 |
| r01    | Regleta mod. ZAZ     |  10.00 | 2018-05-03 |
| r02    | Regleta mod. XAX     |  15.00 | 2018-05-03 |
+--------+----------------------+--------+------------+
10 rows in set (0.00 sec)

mysql> select * from productos where nombre like "%Cepillo%";
+--------+---------------------+--------+------------+
| codigo | nombre              | precio | fechaALTA  |
+--------+---------------------+--------+------------+
| c01    | Cepillo abrillantar |   2.50 | 2017-11-02 |
| c02    | Cepillo birutas     |   6.20 | 2017-10-06 |
| c03    | Cepillo jardín      |  22.35 | 2018-05-03 |
+--------+---------------------+--------+------------+
3 rows in set (0.00 sec)

mysql> alter table productos add categoria varchar(10) not NULL;
Query OK, 0 rows affected (0.04 sec)
Records: 0  Duplicates: 0  Warnings: 0



