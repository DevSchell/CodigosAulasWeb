let cliques = 0;
let on = true;
let index = 0;
const nomes = ["Rodolfo", "Flávio", "Betão", "Madruguinha"];

function Clickb1(){
    document.getElementById("p1").innerHTML = "Hello World!";
}

function Clickb2() {
        document.getElementById("p2").innerHTML = "Contagem: " + cliques;
        cliques++
}

function Clickb3() {
        document.getElementById("p3").innerHTML = nomes[index];
        index++;
        if (index>= nomes.length){
            index = 0;
        }
}

function Clickb4(){
    if (on == true) {
        document.getElementById("p4").innerHTML = " ";
        on = false;
    } else {
        document.getElementById("p4").innerHTML = "quatro";
        on = true;
    }
}

