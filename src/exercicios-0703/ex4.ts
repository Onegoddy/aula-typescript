// Exercício 4
// Crie uma interface genérica chamada Repositorio<T>, que tenha um método salvar(dado: T): void e um método obterTodos(): T[].
// Depois, crie uma implementação dessa interface para armazenar uma lista de usuários (com nome e email).
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
class UserRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];
    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }
    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}
const repo = new UserRepositorio();
repo.salvar({ nome: "Kayky", email: "kayky@email.com" });
repo.salvar({ nome: "Natan", email: "natan@email.com" });
repo.salvar({ nome: "Enzo", email: "enzo@email.com" });
repo.salvar({ nome: "Gustavo", email: "gustavo@email.com" });
console.log("Lista de usuários:", repo.obterTodos());