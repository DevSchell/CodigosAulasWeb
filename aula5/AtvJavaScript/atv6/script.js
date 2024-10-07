let valor1 = prompt("Insira um valor inteiro: ")
let valor2 = prompt("Insira outro valor inteiro: ")

let resto = valor1%valor2

if ((valor1%valor2) == 0 || (valor2%valor1) == 0){ // TODO
    alert("Os números são múltiplos")
} else {
    alert("Números não são múltiplos")
}

