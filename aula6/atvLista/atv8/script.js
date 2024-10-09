function iniciar(){
    const produtos = [document.getElementById("item1").value, document.getElementById("item2").value, document.getElementById("item1").value]
    
    document.getElementById("pos1").innerHTML = produtos[0];
    document.getElementById("pos2").innerHTML = produtos[1];
    document.getElementById("pos3").innerHTML = produtos[2];
}