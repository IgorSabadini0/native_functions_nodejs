//  Ler um vetor A de 10 números. Após, ler mais um número e guardar em uma variável X.
// Armazenar em um vetor M o resultado de cada elemento de A multiplicado pelo valor X.
// Logo após, imprimir o vetor M. 

const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const X = 11;

const M = [];

const AxX = (A, X) => {
    A.forEach(a => {
        let result = a * X;
        M.push(result);
    });
    return M;
}

console.table(AxX(A, X));