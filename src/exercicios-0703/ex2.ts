// Exercício 2
// Crie uma interface Multiplicacao para tipar uma função que recebe dois números e retorna o resultado da multiplicação deles.
// Depois, implemente essa função e teste com diferentes valores.
interface Multiplicacao {
    (a: number, b: number): number;
}
const multiplicar: Multiplicacao = (x, y) => x * y;
console.log("Resultado",multiplicar(9, 5)); // 45
console.log("Resultado", multiplicar(20, 4)); // 80