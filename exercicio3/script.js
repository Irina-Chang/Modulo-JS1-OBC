const value =parseFloat(prompt("Insira o valor, em metros, a ser convertido: "))

const converse = prompt(
    "Escolha qual medida deve ser convertido:" +
    "\n1. Milímetros (mm)"+ 
    "\n2. Centímetros (cm)" +
    "\n3. Decímetros (dm)" + 
    "\n4. Decâmetros (dam)" +
    "\n5. Hectômetros (hm)" +
    "\n6. Quilômetros (km)"
    )

switch (converse) {

    case "1": 
       let mm = value*1000;
       alert("Resultado é: "+ mm)
    break
    case "2":
        alert("Resultado: "+ value + "m = " + value*100 +"cm")
    break
    case "3":
        alert("Resultado: "+ value + "m = " + value*10 + "dm")
    break
    case "4":
        alert("Resultado: " + value + "m = " + value/10 + "dam")
    break
    case "5":
        alert("Resultado: " + value + "m = " + value/100 + "hm")
    break
    case "6":
        alert("Resultado: " + value + "m = " + value/1000 + "km" )
    break
    default:
        alert("Finalizando")
}