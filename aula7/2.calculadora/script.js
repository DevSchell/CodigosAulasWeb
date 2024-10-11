function AdicionarValor(value){
    document.getElementById("output").innerHTML += value;
}

function Reset(){
    document.getElementById("output").innerHTML = " ";
}

function Resolver(){
    let result = eval(document.getElementById("output").innerHTML);
    document.getElementById("output").innerHTML = result;
}