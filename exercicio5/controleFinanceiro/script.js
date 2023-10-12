let saldo = parseFloat(prompt("Olá! Por favor, insira o valor do seu saldo:"))

do{
    opcao = prompt("O seu saldo é de R$" + saldo +
    "\n Escolha a ação desejada: "+
    "\n1 - Adicionar um novo valor." +
    "\n2 - Remover um valor." +
    "\n3 - Sair")

    switch (opcao){
        case "1":
            let valor = parseFloat(prompt("Qual valor deseja adicionar? "))
            saldo += valor
            alert ("O seu saldo final é de R$" + saldo)
            break

        case "2":
            let valor2 = parseFloat(prompt("Qual a quantia que deseja retirar?"))
            saldo -= valor2
            alert("O seu saldo final é de R$" + saldo)
            break

        case "3":
            alert("Finalizando sessão")
            break

        default:
            alert("Opção inválida!")
    }   
}while (opcao !== "3")