const gameState = {}
const container = document.querySelector("#container")
gameState["container"] = container
const fundo = document.querySelector("#fundo")
container.appendChild(fundo)
gameState["fundo"] = fundo
const imagemFundo = document.createElement("img")
gameState["fundo"].appendChild(imagemFundo)
gameState["imagemFundo"] = imagemFundo
const personagens = document.querySelector("#personagens")
gameState["fundo"].appendChild(personagens)
gameState["personagens"] = personagens
const personagemDireita = document.createElement("img")
gameState["personagens"].appendChild(personagemDireita)
gameState["personagemDireita"] = personagemDireita
const personagemEsquerda = document.createElement("img")
gameState["personagens"].appendChild(personagemEsquerda)
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