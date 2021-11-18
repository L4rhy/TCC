gameState = {}
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
                }
            ],
        "opcoes": [
            "Posso ir visitar minha amiga Amanda, ela é minha melhor amiga e acabou de se mudar",
            "Posso ir visitar minha Avó Ingrid, ela tem o melhor bolo de cenoura do mundo"
        ],
        "numeroDialogos": 4,
        "estados": [1,2],
        "imagem": "img/rua.jpg",
        "personagens": ["img/khalisto.png", "img/personagemVazio.png"]
        
    },{
        "comentario": "cenario 1",
        "falas": [
            {
                        "autor": "Amanda",
                        "frase": "O que ela te fez desta vez?",
                        "posicao-balao": [0, 0]
                    },
                    {
                        "autor": "Khalisto",
                        "frase": "Apenas brigamos porque eu não quis rezar com ela, não foi feio, mas não aguento mais brigas todos os dias",
                        "posicao-balao": [0, 0]
                    }
                ]}
            ]
}
var i = 0
var estadoAtual = 0

Fundo(cenarioFalas, estadoAtual, gameState)
adicionaBalao(cenarioFalas, gameState)
desaparece(cenarioFalas, gameState)

//criaçao de fundo e dialogos

function Fundo(cenarioFalas, estadoAtual, gameState){
    const container = document.querySelector("#container")
    gameState["container"] = container
    const fundo = document.querySelector("#fundo")
    gameState["container"].appendChild(fundo)
    gameState["fundo"] = fundo
    const imagemFundo = document.querySelector("#imagemFundo")
    imagemFundo.src = cenarioFalas["cenario"][estadoAtual]["imagem"]
    gameState["fundo"].style.backgrondimage = imagemFundo
    gameState["fundo"].appendChild(imagemFundo)
    gameState["imagemFundo"] = imagemFundo
    const personagens = document.querySelector("#personagens")
    gameState["imagemFundo"].appendChild(personagens)
    gameState["personagens"] = personagens
    /*const personagemDireita = document.querySelector("personagemDireita")
    personagemDireita.src = cenarioFalas["cenario"][estadoAtual]["personagens"][1]
    gameState["personagens"].appendChild(personagemDireita)
    gameState["personagemDireita"] = personagemDireita
    const personagemEsquerda = document.querySelector("personagemEsquerda")
    personagemEsquerda.src = cenarioFalas["cenario"][estadoAtual]["personagens"][0]
    gameState["personagens"].appendChild(personagemEsquerda)*/
    gameState["personagemEsquerda"] = personagemEsquerda
    const lista = document.querySelector("#opcoes")
    gameState["fundo"].appendChild(lista)
    gameState["lista"] = lista

    const botaoOpcao1 = document.createElement('button')
    botaoOpcao1.setAttribute("id", "opcao1")
    gameState["lista"].appendChild(botaoOpcao1)
    gameState["botaoOpcao1"] = botaoOpcao1
    const botaoOpcao2 = document.createElement('button')
    botaoOpcao2.setAttribute("id", "opcao2")
    gameState["lista"].appendChild(botaoOpcao2)
    gameState["botaoOpcao2"] = botaoOpcao2   
    
    mudaFundo(cenarioFalas, estadoAtual, gameState)
        
    console.log("FUNDO FUNCIONA")
        
}
function adicionaBalao(cenarioFalas, gameState) {
    const containerNovoBalao = document.querySelector("#dialogoBox")
    gameState["container"].appendChild(containerNovoBalao)
    gameState["containerNovoBalao"] = containerNovoBalao
    const novoBalao = document.querySelector("#diagPersonagem")
    gameState["containerNovoBalao"].appendChild(novoBalao)
    gameState["novoBalao"] = novoBalao
    const fraseBalao = document.createElement("p1")
    gameState["novoBalao"].appendChild(fraseBalao)
    gameState["fraseBalao"] = fraseBalao
    const botaoNext = document.createElement("button")
    botaoNext.setAttribute("id", "botaoNext")
    botaoNext.innerHTML = "next"
    gameState["containerNovoBalao"].appendChild(botaoNext)
    gameState["botaoNext"] = botaoNext
    
    atualizaTexto(gameState, cenarioFalas, i)
    gameState["containerNovoBalao"].style.top = cenarioFalas['cenario'][0]['falas'][0]['posicao-balao'][0]
    gameState["containerNovoBalao"].style.top = cenarioFalas['cenario'][0]['falas'][0]['posicao-balao'][1]
        
    
    console.log("ADICIONA BALAO FUNCIONA")
}

//fim criação fundo e dialogos


//funcoes de atualização

function atualizaTexto(gameState, cenarioFalas, i){

    gameState["fraseBalao"].innerHTML = `<b><i>${cenarioFalas['cenario'][estadoAtual]['falas'][i]['autor']} - </i></b>${cenarioFalas['cenario'][estadoAtual]['falas'][i]['frase']}`
    console.log("ATUALIZA TEXTO")
}
function mudaFundo(cenarioFalas, estadoAtual, gameState){
    
    console.log(gameState["imagemFundo"])
    gameState["imgemFundo"].src = cenarioFalas['cenario'][estadoAtual]['imagem']
    gameState["fundo"].style.backgrondimage = gameState["imagemFundo"]
    gameState["personagemDireita"].src = cenarioFalas['cenario'][estadoAtual]['personagem'][0]
    gameState["personagemEsquerda"].src = cenarioFalas['cenario'][estadoAtual]['personagem'][1]
    gameState["botaoOpcao1"].innerHTML = cenarioFalas['cenario'][estadoAtual]['opcoes'][0]
    gameState["botaoOpcao2"].innerHTML = cenarioFalas['cenario'][estadoAtual]['opcoes'][1]
    i=0
    console.log("MUDA FUNDO FUNCIONA")
}
function desaparece(cenarioFalas, gameState){
    if(cenarioFalas['cenario'][estadoAtual]['numeroDialogos'] >= i){
        gameState["botaoOpcao1"].style.opacity = 0
        gameState["botaoOpcao2"].style.opacity = 0
    }
    if(cenarioFalas['cenario'][estadoAtual]['numeroDialogos'] < i){
        gameState["containerNovoBalao"].style.opacity = 0
        gameState["botaoOpcao1"].style.opacity = 1
        gameState["botaoOpcao2"].style.opacity = 1
    }
console.log("DESAPARECE FUNCIONA")
}


//botoes

gameState["botaoNext"].addEventListener("click", function(){
    i++
    atualizaTexto(gameState, cenarioFalas, i ) 
    desaparece(cenarioFalas)
})

gameState["botaoOpcao1"].addEventListener("click", function(){
    estadoAtual = cenarioFalas['cenario'][estadoAtual]['estados'][0]
    mudaFundo(gameState, cenarioFalas, estadoAtual)
    console.log("BOTAO 1 FUNCIONA")
})
gameState["botaoOpcao2"].addEventListener("click", function(){
    estadoAtual = cenarioFalas['cenario'][estadoAtual]['estados'][1]
    mudaFundo(gameState, cenarioFalas, estadoAtual)
    console.log("BOTAO 2 FUNCIONA")
})
