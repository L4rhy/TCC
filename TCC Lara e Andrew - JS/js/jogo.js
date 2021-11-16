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
        "personagem": ["img/khalisto.png", " "]
        
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

const container = document.querySelector("#container")
const fundo = document.querySelector("#fundo")
container.appendChild(fundo)
const imagemFundo = document.querySelector("#imagemFundo")
imagemFundo.src = "img/rua.jpg"
fundo.style.backgroundImage = (imagemFundo)
const personagens = document.querySelector("#personagens")
fundo.appendChild(personagens)
const personagemEsquerda = document.querySelector("#personagemEsquerda")
personagemEsquerda.src = "img/khalisto.png"

personagens.appendChild(personagemEsquerda)
/*const personagemDireita = document.querySelector("#personagemDireita")
personagemDireita.src = "img/personagemVazio.png"
personagens.appendChild(personagemDireita)*/
const lista = document.querySelector("#opcoes")
fundo.appendChild(lista)

const botaoOpcao1 = document.createElement("button")
botaoOpcao1.setAttribute("id", "opcao1")
lista.appendChild(botaoOpcao1)
const botaoOpcao2 = document.createElement("button")
botaoOpcao2.setAttribute("id", "opcao2")
lista.appendChild(botaoOpcao2)

console.log("CONSTRUIDO O FUNDO")
mudaFundo(cenarioFalas, estadoAtual)

const caixaDeDialogo = document.querySelector("#caixaDeDialogo")
fundo.appendChild(caixaDeDialogo)
caixaDeDialogo.style.top = cenarioFalas['cenario'][0]['falas'][0]['posicao-balao'][0]
caixaDeDialogo.style.top = cenarioFalas['cenario'][0]['falas'][0]['posicao-balao'][1]
const dialogo = document.querySelector("#dialogo")
caixaDeDialogo.appendChild(dialogo)
const texto = document.querySelector("#texto")
dialogo.appendChild(texto)

const botaoNext = document.createElement("button")
botaoNext.setAttribute("id", "botaoNext")
botaoNext.innerHTML = "NEXT"
caixaDeDialogo.appendChild(botaoNext)


atualizaTexto(cenarioFalas, i)
console.log("CONSTRUIDO DIALOGO")

desaparece(cenarioFalas, i)

function mudaFundo(cenarioFalas, estadoAtual){
    imagemFundo.src = cenarioFalas["cenario"][estadoAtual]["imagem"]
    fundo.style.backgroundImage = imagemFundo
    botaoOpcao1.innerHTML = cenarioFalas["cenario"][estadoAtual]["opcoes"][0]
    botaoOpcao2.innerHTML = cenarioFalas["cenario"][estadoAtual]["opcoes"][1]
    console.log("MUDA FUNDO FUNCIONA")
}
function atualizaTexto(cenarioFalas, i){
    texto.innerHTML = `<b><i>${cenarioFalas['cenario'][estadoAtual]['falas'][i]['autor']} - </i></b>${cenarioFalas['cenario'][estadoAtual]['falas'][i]['frase']}`
    console.log("ATUALIZA TEXTO FUNCIONA")
}
function desaparece(cenarioFalas, i){
    if(cenarioFalas['cenario'][0]['numeroDialogos'] >= i){
        botaoOpcao1.style.opacity = 0
        botaoOpcao2.style.opacity = 0
    }
    if(cenarioFalas['cenario'][0]['numeroDialogos'] < i){
        caixaDeDialogo.style.opacity = 0
        botaoOpcao1.style.opacity = 1
        botaoOpcao2.style.opacity = 1
    }
console.log("DESAPARECE FUNCIONA")
}
botaoNext.addEventListener("click", function(){
    i++
    atualizaTexto(cenarioFalas, i)
    desaparece(cenarioFalas, i)
    console.log("BOTAO NEXT FUNCIONA")
})
botaoOpcao1.addEventListener("click", function(){
    estadoAtual = cenarioFalas['cenario'][estadoAtual]['estados'][0]
    mudaFundo(cenarioFalas, estadoAtual)
    console.log("OPÇAO 1 FUNCIONA")
})
botaoOpcao2.addEventListener("click", function(){
    estadoAtual = cenarioFalas['cenario'][estadoAtual]['estados'][1]
    mudaFundo(cenarioFalas, estadoAtual)
    console.log("OPÇAO 2 FUNCIONA")
})