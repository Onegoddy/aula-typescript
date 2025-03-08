// 2. Generics
// Exercício 3
// Crie uma função genérica chamada inverterArray<T>, que recebe um array de qualquer tipo e retorna um novo array com os elementos invertidos.
// Teste a função com um array de números e um array de strings.
function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}
const numeros = [27, 28, 29, 30, 31, 32, 33];
const palavras = ["Kayky", "Natan", "Enzo","Gustavo"];
console.log("Invertido:", inverterArray(numeros));
console.log("Invertido:", inverterArray(palavras));
