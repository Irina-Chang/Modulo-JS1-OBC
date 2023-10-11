const nome = prompt(" Insira seu nome: ")
let cidades = ""
let contador = 0

let visitou = prompt("Você ja visitou alguma cidade? (Sim/Não)")

while (visitou === "Sim"){
    let cidade = prompt ("Insira o nome da cidade: ")
    cidades += "-" + cidade + "\n"
    contador ++
    visitou = prompt("Visitou alguma outra cidade? (Sim/Não)")
}

alert( "Turista: " + nome + "\nQuantidade de cidades que visitou: " + contador +
"\nCidades visitadas: \n" + cidades)