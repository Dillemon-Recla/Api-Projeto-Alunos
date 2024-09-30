document.getElementById("cadastrar").addEventListener("click", function() {
    // Exibe a caixa de confirmação
    const confirmacao = confirm("Tem certeza que deseja continuar?");
    
    // Verifica a resposta do usuário
    if (confirmacao) {
        alert("Cadastro realizado!");
    } else {
        alert("Ação cancelada");
    }
});