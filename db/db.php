<?php

//configurar banco de dados

$host = 'localhost';
$dbname = 'alunos';
$username = 'root';
$password = 'Kronos@123';

try{
    //erro de sintaxe aqui
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('Conection failed'. $e->getMessage());
}

?>