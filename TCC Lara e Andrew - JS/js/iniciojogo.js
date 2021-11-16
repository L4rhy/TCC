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
        "imagem": "../img/RUA.png",
        "personagem": ""
        
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

var fundo = Fundo(cenarioFalas, estadoAtual)
desaparece(cenarioFalas)

var fraseBalao  = adicionaBalao(cenarioFalas)
    var botaoNext = document.querySelector("#botaoNext")
    botaoNext.addEventListener("click", function(){
        console.log("chamou")
        i++
        atualizaTexto(fraseBalao, cenarioFalas, i ) 
        desaparece(cenarioFalas)
    })
    var botaoOpcao1 = document.querySelector("#opcao1")
    botaoOpcao1.addEventListener("click", function(){
        estadoAtual = cenarioFalas['cenario'][estadoAtual]['estados'][0]
        mudaFundo(fundo, cenarioFalas, estadoAtual)
        console.log("BOTAO 1 FUNCIONA")
    })
    var botaoOpcao2 = document.querySelector("#opcao2")
    botaoOpcao2.addEventListener("click", function(){
        estadoAtual = cenarioFalas['cenario'][estadoAtual]['estados'][1]
        mudaFundo(fundo, cenarioFalas, estadoAtual)
        console.log("BOTAO 2 FUNCIONA")
    })

function adicionaBalao(cenarioFalas) {
    const containerNovoBalao = document.createElement('div')
    containerNovoBalao.classList.add('dialogobox')
    const novoBalao = document.createElement('div')
    novoBalao.classList.add('diagPersonagem')
    const fraseBalao = document.createElement('p1')
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

    fraseBalao.innerHTML = `<b><i>${cenarioFalas['cenario'][estadoAtual]['falas'][i]['autor']} - </i></b>${cenarioFalas['cenario'][estadoAtual]['falas'][i]['frase']}`
    console.log(cenarioFalas, i)
}
function Fundo(cenarioFalas, estadoAtual){
    const fundo = document.createElement('div')
    fundo.classList.add('box')
    fundo.setAttribute("id", "fundo")
    const personagens = document.createElement('div')
    personagens.classList.add('personagens')
    personagens.setAttribute("id", "personagens")
    fundo.appendChild(personagens)
    const lista = document.createElement("ol")
    lista.setAttribute("id","opcoes")
    fundo.appendChild(lista)

        const botaoOpcao1 = document.createElement('button')
        botaoOpcao1.setAttribute("id", "opcao1")
        lista.appendChild(botaoOpcao1)
        const botaoOpcao2 = document.createElement('button')
        botaoOpcao2.setAttribute("id", "opcao2")
        
        lista.appendChild(botaoOpcao2)
        
        mudaFundo(fundo, cenarioFalas, estadoAtual)
        
        console.log("FUNDO FUNCIONA")
    }
    function mudaFundo(fundo, cenarioFalas, estadoAtual){
        fundo.style.backgroundImage = cenarioFalas['cenario'][estadoAtual]['imagem']
        personagens.style.backgroundImage = cenarioFalas['cenario'][estadoAtual]['personagem']
        personagens.style.backgroundImage = cenarioFalas['cenario'][estadoAtual]['personagem']
        
    botaoOpcao1.innerHTML = cenarioFalas['cenario'][estadoAtual]['opcoes'][0]
    botaoOpcao2.innerHTML = cenarioFalas['cenario'][estadoAtual]['opcoes'][1]
   
    i=0
 console.log("MUDA FUNDO FUNCIONA")
}
function desaparece(cenarioFalas){
    if(cenarioFalas['cenario'][estadoAtual]['numeroDialogos'] >= i){
        botaoOpcao1.style.opacity = 0
        botaoOpcao2.style.opacity = 0
    }
    if(cenarioFalas['cenario'][estadoAtual]['numeroDialogos'] < i){
        containerNovoBalao.style.opacity = 0
        botaoOpcao1.style.opacity = 1
        botaoOpcao2.style.opacity = 1
    }
    console.log("DESAPARECE FUNCIONA")
}

