//correcao do exercicio foi adicionado o nome dos veiculos.

const veiculoA = prompt("Qual o nome do primeiro veículo? ")
const speedA = parseFloat(prompt("Insira a velocidade do primeiro veículo: "))

const veiculoB = prompt("Qual o nome do segundo veículo? ")
const speedB = parseFloat(prompt("Insira a velocidade do segundo veículo: "))

if (speedA > speedB){
alert( veiculoA + " é mais rápido que " + veiculoB)
}
else if (speedA === speedB) {
alert("O " + veiculoA + " e o " + veiculoB + " estão na mesma velocidade.")
}
else {alert("O" + veiculoB + " é mais rápido que " + veiculoA)} 
 