let velocidade = 80

while (velocidade > 0) {
    alert("O carro está a " + velocidade + " km/h")
    velocidade -= 20
    alert ("Reduzindo 20km/h")

    if (velocidade === 40){
        break
    }
}
alert ("O carrou parou")