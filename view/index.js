const apiUrl = 'http://localhost:8000/index.php?endpoint=alunos';

document.getElementById("cadastrar").addEventListener("click", function (event) {

    event.preventDefault();

    const nomeAluno = document.getElementById('nomeAluno').value;
    const nomeResponsavel = document.getElementById('nomeResponsavel').value;
    const idadeAluno = document.getElementById('idadeAluno').value;
    const telefoneResponsavel = document.getElementById('telefoneResponsavel').value;

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

async function showList(){
    const formContainer = document.getElementById("listAndForm");

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    let htmlList  = '<ul>';
    data.forEach(aluno =>{
        htmlList += `<li>${aluno.id}, ${aluno.nome_aluno}, ${aluno.nome_responsavel}, ${aluno.telefone}</li>`;
    });
    htmlList += '</ul>';

    formContainer.innerHTML = htmlList;

    document.getElementById('formulario', 'listar', 'cadastrar').style.display = 'none';
}