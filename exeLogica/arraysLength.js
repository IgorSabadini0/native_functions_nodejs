// Faça um algoritmo para ler um valor N qualquer (que será o tamanho dos vetores). Após, ler dois
// vetores A e B (de tamanho N cada um) e depois armazenar em um terceiro vetor Soma a soma dos
// elementos do vetor A com os do vetor B (respeitando as mesmas posições) e escrever o vetor Soma. 

const N = 4;

const A = [1, 4, 6, 7];
const B = [5, 89, 7, 9];
const Soma = [];

const sumArray = (vetor1, vetor2, tamanho) => { // parâmetros não precisam ter necessáriamente os nomes das variáveis, pois eles são apenas como uma "identificação";
    for (let i = 0; i < tamanho; i++) {
        const eachResult = vetor1[i] + vetor2[i];

        Soma.push(eachResult);
    }
}

sumArray(A, B, N); // Relacionando com os parâmetros da função: A => vetor1 ; B => vetor2; N => tamanho;

console.log("Soma: ");
console.table(Soma);