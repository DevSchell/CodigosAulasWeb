let opc = confirm("Temos uma pesquisa de satisfação! Teria alguns segundos para realizá-la?")
let sugestao;

if (opc){
    alert("Perfeito!")
    let opc = confirm("Você está satisfeito com os nossos serviços?")
        if (opc){
            alert("Que bom! Ficamos felizes em saber que você está contente com nossos serviços")
        }
    sugestao = prompt("Como podemos melhorar ainda mais?")
    alert("Pesquisa finalizada, muito obrigado por compartilhar conosco!")
}