//Maneira clássica do uso do for:
/*for( let indice =0 ; indice <= 5 ; indice ++){
    alert("Índice "+ indice)
}*/


//Declarando a variável fora do laço, e usando depois dentro dele
/*let indice = 0
for(
    alert("Inicializando o for") ; indice <=3 ; indice++
){
    alert("Índice " + indice)
}*/

//A ação pode ser inserida dentro do bloco ou fora
/*let indice = 0
for ( 
    alert("Inicializando o for"); 
    indice <=3 ; 
    alert("Finalizando bloco de repetição")){
    alert("Índice " + indice)
    indice++
}*/

//Usando outras formas
 let nome = "Irina"

 for (let i =0; i< nome.length; i++){
    console.log(nome[i])
 }
 //se colocarmos <= nome.length , o indice sera de 6casas, com a última sendo undefined
