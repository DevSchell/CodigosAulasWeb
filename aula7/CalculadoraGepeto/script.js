// Função para adicionar valores ao display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Função para limpar o display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Função para apagar o último caractere
function deleteLast() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

// Função para calcular o resultado
function calculateResult() {
    let expression = document.getElementById("display").value;
    try {
        let result = eval(expression);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Erro";
    }
}
