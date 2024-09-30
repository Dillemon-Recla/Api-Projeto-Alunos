<?php

header("Content-Type: application/json");

include_once 'C:\php-8.3.7\api\model\model.php';

$method = "";

if (isset($_SERVER['REQUEST_METHOD'])) {
    if (isset($_GET['ENDPOINT']) && $_GET['ENDPOINT'] == 'alunos') {
        $method = $_SERVER['REQUEST_METHOD'];
    }
}

switch ($method) {
    case "GET";
        getAlunos($pdo);
        break;
    case "POST";
        insertAlunos($pdo);
        break;
    case "DELETE";
        break;
    default;
        echo json_encode(['message' => "metodo não suportado"]);
        break;
}


function getAlunos($pdo)
{
    $busca = $pdo->query("SELECT * FROM alunos");
    $alunos = $busca->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($alunos);
}

function insertAlunos($pdo)
{
    $post_data = file_get_contents("php://input");
    $data = json_decode($post_data, true);
    if (
        isset($data['nome_aluno'])
        && isset($data['nome_responsavel'])
        && isset($data['idade_aluno'])
        && isset($data['telefone'])
    ) {
        $stmt = $pdo->prepare("INSERT INTO alunos (
            nome_aluno,
            nome_responsavel,
            idade_aluno,
            telefone
        ) VALUES (?, ?, ?, ?)");
        $stmt->execute([
            $data['nome_aluno'],
            $data['nome_responsavel'],
            $data['idade_aluno'],
            $data['telefone']
        ]);
        echo json_encode(['message' => 'aluno cadastrado com sucesso']);
    } else {
        echo json_encode(['message' => 'Dados inválidos']);
    }
}
