let TaskList = [];

function AdicionarTarefa() {
    console.log("Função AdicionarTarefa está sendo chamada");
    
    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const prioridade = document.querySelector('input[name="prioridade"]:checked').value;
    const descricao = document.getElementById("descricao").value;
    const senhaInput = document.getElementById("senha").value;

    alert(nome); // Teste para garantir que o valor do campo "nome" está sendo obtido
}
