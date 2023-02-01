//declarar variaveis
let warpCount = 0
let chosenOption = ""

// nome da nave
let spaceship = prompt("Digite o nome da nave")

//primeira pergunta
chosenOption = prompt("Deseja entrar em dobra espacial?\n1- Sim\n2- Não")

//enquanto a opção for sim, contar +1 dobra
while(chosenOption == "1") {
    warpCount += 1
    chosenOption = prompt("Deseja realizar a próxima dobra?\n1- Sim\n2- Não")
}
//nave: ***
// quantidade de dobras: ***
alert("Nave: " + spaceship + "\nQuantidade de dobras: " + warpCount)
