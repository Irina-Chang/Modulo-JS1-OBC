const nomePersonagemA = prompt("Qual o nome do seu personagem de ataque?")
const atackPower= prompt("Qual o poder de ataque dele?")
const nomePersonagemD= prompt("Qual o nome do personagem de defesa?")
const lifePoints = prompt("Insira o pontos de vida do personagem")
const defensePoints = prompt("Insira os pontos de defesa")
const shield = confirm("O personagem tem um escudo?")


const atack = parseFloat(atackPower)
const life = parseFloat(lifePoints)
const defense = parseFloat(defensePoints)


if (atack > defense && shield == false){
    const dano = atack - defense;
    const resultado = life - dano;
    alert("O ataque foi de " + dano + "\nO " + nomePersonagemD +" está com "+resultado + " pontos de vida")}

    else if (atack > defense && shield == true){
        const dano = (atack-defense)/2;
        const resultado = life - dano;
        alert("O ataque foi de " + dano + "\nO " + nomePersonagemD +" está com "+resultado + " pontos de vida")
    }

    else if (atack <= defense){
        const dano = 0;
        const resultado = life - dano;
        alert("O ataque foi de " + dano + "pontos."+"\nO " + nomePersonagemD +" está com "+resultado + " pontos de vida")
    }

