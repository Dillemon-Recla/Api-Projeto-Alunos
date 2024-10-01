document.getElementById("cadastrar").addEventListener("click", function (event) {

    event.preventDefault();

    const nomeAluno = document.getElementById('nomeAluno').value;
    const nomeResponsavel = document.getElementById('nomeResponsavel').value;
    const idadeAluno = document.getElementById('idadeAluno').value;
    const telefoneResponsavel = document.getElementById('telefoneResponsavel').value;

    const apiUrl = 'http://localhost:8000/index.php?endpoint=alunos'
    const confirmacao = confirm("Tem certeza que deseja continuar?");
    if (confirmacao) {

        const data = {
            nome_aluno: nomeAluno,
            nome_responsavel: nomeResponsavel,
            idade_aluno: idadeAluno,
            telefone: telefoneResponsavel
        };
       
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Sucesso:', data);
                alert('Cadastro realizado com sucesso!');
            })
            .catch(error => {
                console.error('Erro ao fazer a chamada', error)
            });
    }

})