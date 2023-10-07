
const nomePersonagemA = prompt("Qual o nome do seu personagem de ataque?")
const atackPower= parseFloat(prompt("Qual o poder de ataque dele?"))

const nomePersonagemD= prompt("Qual o nome do personagem de defesa?")
let lifePoints = parseFloat(prompt("Insira o pontos de vida do personagem"))
const defensePoints = parseFloat(prompt("Insira os pontos de defesa"))

const shield = prompt("O personagem tem um escudo? (Sim/Não)")

let dano = 0

if (atackPower > defensePoints && shield === "Não"){
    dano = atackPower - defensePoints;
}
   else if (atackPower > defensePoints && shield === "Sim"){
        dano = (atackPower-defensePoints)/2;
    }

    lifePoints -= dano
   
        alert("O poder de ataque de " + nomePersonagemA + " é de: " + atackPower+ "." +
        "\nE o dano causado foi de: " + dano + "." +
        "\nO " + nomePersonagemD + " possui: " + 
        "\nPontos de vida: " + lifePoints + "," +
        "\nPontos de defesa: " + defensePoints + "."+
        "\nEscudo: " + shield + "." )
    

