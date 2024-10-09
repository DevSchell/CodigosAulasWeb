function Fatorial () {
    let numero = document.getElementById("numero").value;
    let contador = document.getElementById("numero").value - 1;

    while (contador > 0) {
        numero = numero * contador;
        contador--
    }
    document.getElementById("resultado").innerHTML = numero;
}