let palavra = prompt("Está palavra é um palíndromo? \n" + "Insira a palavra: ")

let palindromo = ""
for (let i = palavra.length -1; i >= 0; i--){
    palindromo += palavra[i]
}

if (palavra === palindromo) {
    alert(palavra + " é um palíndromo!")
  } else {
    alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palindromo)
  }
