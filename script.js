function calcularIMC(peso, altura) {
    if (altura <= 0 || peso <= 0) {
        return "Peso e altura devem ser maiores que zero.";
    }
    var imc = peso / (altura * altura);
    var res = `Seu IMC é ${imc}.`;
    if (imc < 18.5) {
        res += " Você está abaixo do peso ideal.";
    } else if (imc >= 18.5 && imc < 24.9) {
        res += " Você está no peso ideal.";
    } else if (imc >= 25 && imc < 29.9) {
        res += " Você está com sobrepeso.";
    } else {
        res += " Você está com obesidade.";
    }
    return res;
}