const prompt = require("prompt-sync")();

const numero = Number(prompt("Ingresa un número para calcular el factorial:"));
if (numero < 0) {
    console.log("El número ingresado debe ser un positivo");
} else {
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    console.log(`${numero}! = ${factorial}`);
}