var gameState = {}
var  cenarioFalas ={
    "cenario": [
    {
        "comentario": "Primeiro cenario",
            "falas": [
                {
                    "autor": "Khalisto",
                    "frase": "Eu estou cansada daquela casa, meus pais não são ruins, mas as constantes brigas não me deixam mais ter uma boa noite de sono.",
                    "posicao-balao": [0, 0]
                },
                {
                    "autor": "Khalisto",
                    "frase": "Minha mãe não aceita que eu não acredite no deus dela, não suporta que eu diga que não me sinto bem indo a igreja com ela, não gosta que eu me negue a rezar.",
                    "posicao-balao": [0, 0]
                },
                {
                    "autor": "Khalisto",
                    "frase": "Ela me aceita enquanto pessoa trans, mas não aceita que eu não vá a igreja dela por não me sentir aceita lá.",
                    "posicao-balao": [0, 0]
                },
                {
                    "autor": "Khalisto",
                    "frase": "Eu não aguento mais todo dia ter uma intriga diferente, preciso sair de casa, eu tenho como alugar uma casa só minha, vou fazer isso.",
                    "posicao-balao": [0, 0]
                },
                {
                    "autor": "Khalisto",
                    "frase": "Preciso apenas ficar hoje fora de casa e depois planejar isso melhor",
                    "posicao-balao": [0, 0]
                },
                {
                    "autor": "Khalisto",
                    "frase": "------",
                    "posicao-balao": [0, 0]
                },                {
                    "autor": "Khalisto",
                    "frase": "------",
                    "posicao-balao": [0, 0]
                },
            ],
        "opcoes": [
            "Posso ir visitar minha amiga Amanda, ela é minha melhor amiga e acabou de se mudar",
            "Posso ir visitar minha Avó Ingrid, ela tem o melhor bolo de cenoura do mundo"
        ],
        "numeroDialogos": 4,
        "imagem": "<img src=../img/RUA.png>"
        
    }
]
}
var botaoOpcao1 = document.querySelector("#opcao1")
var botaoOpcao2 = document.querySelector("#opcao2")
var i = 0
var fraseBalao  = adicionaBalao(cenarioFalas, gameState)
desaparece(cenarioFalas, gameState)
var botaoNext = document.querySelector("#botaoNext")
botaoNext.addEventListener("click", function(){
    console.log("chamou")
    i++
    atualizaTexto(fraseBalao, cenarioFalas, i ) 
    desaparece(cenarioFalas, gameState)
})
function adicionaBalao(cenarioFalas, gameState) {
    const containerNovoBalao = document.createElement('div')
    containerNovoBalao.classList.add('dialogobox')
    gameState["container"] = containerNovoBalao
    const novoBalao = document.createElement('div')
    novoBalao.classList.add('diagPersonagem')
    const fraseBalao = document.createElement('p1')
    novoBalao.classList.add('botaoDialogo')
    const botaoNext = document.createElement('button')
    botaoNext.setAttribute("id", "botaoNext")
    botaoNext.innerHTML = "next"
    containerNovoBalao.appendChild(botaoNext)
    novoBalao.appendChild(fraseBalao)
    containerNovoBalao.appendChild(novoBalao)
    
    atualizaTexto(fraseBalao, cenarioFalas, i)
    containerNovoBalao.style.top = cenarioFalas['cenario'][0]['falas'][0]['posicao-balao'][0]
    containerNovoBalao.style.top = cenarioFalas['cenario'][0]['falas'][0]['posicao-balao'][1]
    
    const container = document.querySelector('.container')
    container.appendChild(containerNovoBalao)
    console.log(cenarioFalas)
    return  fraseBalao
}
function atualizaTexto(fraseBalao, cenarioFalas, i){

    fraseBalao.innerHTML = `<b><i>${cenarioFalas['cenario'][0]['falas'][i]['autor']} - </i></b>${cenarioFalas['cenario'][0]['falas'][i]['frase']}`
    console.log(cenarioFalas, i)
}
function desaparece(cenarioFalas, gameState){
    if(cenarioFalas['cenario'][0]['numeroDialogos'] >= i){
        botaoOpcao1.style.opacity = 0
        botaoOpcao2.style.opacity = 0
    }
    if(cenarioFalas['cenario'][0]['numeroDialogos'] < i){
        gameState["container"].style.opacity = 0
        botaoOpcao1.style.opacity = 1
        botaoOpcao2.style.opacity = 1
    }
console.log("DESAPARECE FUNCIONA")
}

