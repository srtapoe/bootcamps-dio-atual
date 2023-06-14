let salarioASerPago;

function calculaPercImpostoRetirado(salario, adicional){
    let aliquota1 = salario * 0.05;
    let aliquota2 = salario * 0.10;
    let aliquota3 = salario * 0.15;

    if(salario >= 0 && salario <= 1100){
        salarioASerPago = (salario - aliquota1) + adicional;
    }else if(salario > 1100 && salario < 2500){
        salarioASerPago = (salario - aliquota2) + adicional;
    }else{
        salarioASerPago = (salario - aliquota3) + adicional;
    }

    console.log(salarioASerPago.toFixed(2)) ;
}

///////TESTES
console.log("=======TESTANDO=========")
let salario = 2000;
let adicional = 250;

console.log("TESTE 1")
calculaPercImpostoRetirado(salario, adicional)
console.log("==========================================")

let salario1 = 1100;
let adicional1 = 50;

console.log("TESTE 2")
calculaPercImpostoRetirado(salario1, adicional1)

console.log("==========================================")

let salario3 = 3000;
let adicional3 = 400;

console.log("TESTE 3")
calculaPercImpostoRetirado(salario3, adicional3)