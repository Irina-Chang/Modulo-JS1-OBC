let opcao = ""

do{
    opcao = prompt("Selecione uma opção abaixo:\n" +
    "\n1" + 
    "\n2" + 
    "\n3" + 
    "\n4" + 
    "\n5")

    
    switch (opcao){
        case "1":
            alert("Você escolheu a opção '1' ")
        break

        case "2":
            alert("Você escolheu a opção '2' ")
        break
        
        case "3":
            alert("Você escolheu a opção '3' ")
        break
        
        case "4":
            alert("Você escolheu a opção '4' ")
        break
        
        case "5":
           alert("Finalizar")
        break
        
        default:
            alert("Está não é uma opção válida")
    }
    
} while(opcao !== "5")

