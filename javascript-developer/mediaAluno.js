let media = 5.5
let media1 = 8
let media2 = 2

function verificarStatusAluno(media){
    const resultado = 
    media < 5 ? "REPROVADO" :
    media >= 5 && media < 7 ? "RECUPERAÇÃO" : "APROVADO";

    console.log(resultado);
}

verificarStatusAluno(media)
verificarStatusAluno(media1)
verificarStatusAluno(media2)