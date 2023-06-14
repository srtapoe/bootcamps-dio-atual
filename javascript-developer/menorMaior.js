console.log("Digite.....")
let qtde = [5, 3 , 4 , 1 , 10, 8]

let maiorPar = 0;
let menorImpar = 1;

function verificarMenorMaior(qtde){
    
        const maiorNumeroPar = 
        qtde.filter((numero) => numero % 2 === 0)
        .reduce((maiorPar, atual) => (atual > maiorPar ? atual : maiorPar))
        
    
        const menorNumeroImpar = 
        qtde.filter((numero) => numero % 2!== 0)
        .reduce((menorImpar, atual) => (atual < menorImpar ? atual : menorImpar))


    console.log("Maior número par: " + maiorNumeroPar);
    console.log("Menor número ímpar: " + menorNumeroImpar);

}

verificarMenorMaior(qtde)