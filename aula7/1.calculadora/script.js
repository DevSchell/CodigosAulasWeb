let comp = document.getElementById("output").innerHTML.value;
let result;

function BotaoAdicao(){
    document.getElementById("output").innerHTML += "+";   
}

function BotaoSubtracao(){
    document.getElementById("output").innerHTML += "-";   
}

function BotaoMultiplicacao(){
    document.getElementById("output").innerHTML += "*";   
}

function BotaoDivisao(){
    document.getElementById("output").innerHTML += "/";   
}

function Botao7(){
    document.getElementById("output").innerHTML += "7";   
}

function Botao8(){
    document.getElementById("output").innerHTML += "8";   
}

function Botao9(){
    document.getElementById("output").innerHTML += "9";   
}

function Botao4(){
    document.getElementById("output").innerHTML += "4";   
}

function Botao5(){
    document.getElementById("output").innerHTML += "5";   
}

function Botao6(){
    document.getElementById("output").innerHTML += "6";   
}

function Botao1(){
    document.getElementById("output").innerHTML += "1";   
}

function Botao2(){
    document.getElementById("output").innerHTML += "2";   
}

function Botao3(){
    document.getElementById("output").innerHTML += "3";   
}

function Botao0(){
    document.getElementById("output").innerHTML += "0";   
}

function BotaoPonto(){
    document.getElementById("output").innerHTML += ".";   
}

function BotaoAC(){
    document.getElementById("output").innerHTML = " ";   
}

function BotaoIgual(){
    let equacao = document.getElementById("output").innerHTML;
    document.getElementById("output").innerHTML = eval(equacao);
}