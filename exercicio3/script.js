const value =parseFloat(prompt("Insira o valor, em metros, a ser convertido: "))

const converse = prompt("Escolha qual medida deve ser convertido: \nmm) \ncm) \ndm) \ndam) \nhm) \nkm)")

switch (resultado) {

    case "mm":
       let mimiletros = value*1000 ;
       alert("O valor em milimetros é de " + mimiletros + "mm")
    break
    case "cm":
        let centrimetros = value*100
        alert("O valor em centímetros é de " + centrimetros)
    break
    case "dm":
        let dm = value*10
        alert("O valor em decímetros é de 'dm'")
    break
    case "dam":
        let dam = value/10
        alert("O valor em decâmetros é de 'dam'")
    break
    case "hm":
        let hm = value/100
        alert("O valor em hectômetros é de 'hm'")
    break
    case "km":
        let km = value/1000
        alert("O valor em quilômetros é de 'km'")
    break
    default:
        alert("Finalizando")
}