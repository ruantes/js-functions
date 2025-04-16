let peso = Number(prompt("Digite seu peso: "))
let altura = Number(prompt("Digite sua altura: "))

function imc(peso, altura) {

    return (peso / (altura * altura)).toFixed(2)
}

let IMC = imc(peso, altura)
alert(IMC)

function resultadoFinal(IMC) {
    if(IMC < 15) {
        alert("Abaixo do peso")
    }else if(IMC < 25) {
        alert("Peso Ideal")
    }else if(IMC < 29.9) {
        alert("Acima do Peso")
    }else {
        alert("Obesidade")
    }
}

let resFinal = resultadoFinal(IMC)