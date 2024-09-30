<?php

include_once "C:\php-8.3.7\api\db\db.php";


function table_create(){
    global $pdo;

    $sql = "
        CREATE TABLE IF NOT EXISTS aluno (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            nome_aluno varchar(255) NOT NULL,
            nome_responsavel varchar(255) NOT NULL,
            idade_aluno INT DEFAULT NULL,
            telefone varchar(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
        )
    ";

    try{
        $pdo->exec($sql);
    } catch (PDOException $e){
        echo "erro ao criar a tabela" . $e->getMessage();
    }
}

//declaramos a função mas não chamamos
table_create();