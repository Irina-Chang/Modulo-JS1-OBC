let numero = parseFloat(prompt("Insira o número a ser multiplicado:"))
let tabuada = " "

let indice = 1
for(indice > 0; indice <= 20 ; indice++ ){
    let produto = parseFloat(indice*numero)
    tabuada += produto + "\n"
}
alert("A tabuada de 1 a 20 do número " + numero + " é:" + ("\n") + tabuada)
