// Escreva um algoritmo que permita a leitura das notas de uma turma de 20 alunos. Calcular a média da turma e contar quantos alunos obtiveram nota acima desta média calculada. Escrever a média da turma e o resultado da contagem. 

const notas = [5, 2, 6, 7];

const media = (notas) => {
    let soma = 0;

    notas.forEach(nota => { // uma espécie de for reduzido para listagem, assim não precisando *i < array.length*
        soma += nota;
    });

    return soma / notas.length; //divide a soma pela quantidade de notas (tamanho do array)
}

console.log(media(notas));