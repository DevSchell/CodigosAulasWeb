const senhaCerta = "123"; // Definição da senha correta
let taskList = []; // Array para armazenar as tarefas

function AdicionarTarefa() {
    // Obtendo valores dos campos do formulário
    const nome = document.getElementById("nome").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
    const data = document.getElementById("data").value; // Obtém a data
    const prioridade = document.querySelector('input[name="prioridade"]:checked'); // Obtém a prioridade selecionada
    const senha = document.getElementById("senha").value.trim(); // Obtém a senha

    // Validações
    if (nome === "") {
        alert("O nome da tarefa não pode estar vazio.");
        return;
    }

    if (descricao === "") {
        alert("A descrição não pode estar vazia.");
        return;
    }

    if (!data) { // Não sabia desse cara
        alert("Selecione uma data de vencimento.");
        return;
    }

    if (!prioridade) { // Não sabia desse cara
        alert("Selecione uma prioridade.");
        return;
    }

    if (nome.length <= 4) {
        alert("O nome da tarefa deve ter mais do que 4 caracteres.");
        return;
    }

    if (senha !== senhaCerta) {
        alert("Senha incorreta.");
        return;
    }

    // Se todas as validações passarem, adicionar a tarefa à lista
    taskList.push({
        nome: nome,
        data: data,
        prioridade: prioridade.value,
        descricao: descricao
    });

    // Limpar os campos do formulário
    document.getElementById("nome").value = '';
    document.getElementById("data").value = '';
    document.getElementById("descricao").value = '';
    document.getElementById("senha").value = '';
    prioridade.checked = false; // Limpa a seleção de prioridade

    // Atualizar a exibição das tarefas
    AtualizarTarefas();
}

function AtualizarTarefas() {
    const tarefasContainer = document.getElementById("tarefas");
    const contadorTarefas = document.getElementById("contador-tarefas");

    // Limpa o conteúdo anterior
    tarefasContainer.innerHTML = '';

    // Adiciona cada tarefa ao parágrafo
    taskList.forEach((task, index) => {
        tarefasContainer.innerHTML += `<strong>Tarefa ${index + 1}:</strong> ${task.nome} - ${task.data} - Prioridade: ${task.prioridade}<br>`;
    });

    // Atualiza o contador de tarefas
    contadorTarefas.textContent = taskList.length;
}

function Remover(){
    taskList.pop();
    AtualizarTarefas();
}
