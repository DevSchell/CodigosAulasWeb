let tasks = [];

function adicionarTarefa(){
    event.preventDefault();
    //Validações
   if (!document.getElementById("nome").value || !document.getElementById("descricao").value) {
        alert("não pode")
        return;    
    }


    criarTarefa();
    resetarInputs();
    mostrarTarefas();
}

function resetarInputs(){
    document.getElementById("nome").value = "";
    document.getElementById("data").value = "";
    document.getElementById("prioridade").value = "";
    document.getElementById("descricao").value = "";
}

function criarTarefa(){
    const obj = {
        nome: document.getElementById("nome").value,
        //data: document.getElementById("data").value,
        //prioridade: document.getElementById("propriedade").value,
        descricao: document.getElementById("descricao").value
    }
    tasks.push(obj);
}

function mostrarTarefas(){
    let lista = document.getElementById("tarefa-lista");
    let i = 0;
    lista.innerHTML = "";

    while (i < tasks.length, i++) {
        lista.innerHTML += tasks[i].nome + "<br>";
    }
}