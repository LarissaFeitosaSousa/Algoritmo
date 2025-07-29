# Algoritmo 
  //7.//

let a = parseFloat(prompt("Digite o lado A do triângulo:"));
let b = parseFloat(prompt("Digite o lado B do triângulo:"));
let c = parseFloat(prompt("Digite o lado C do triângulo:"));

if (a + b > c && a + c > b && b + c > a) {
  if (a === b && b === c) {
    console.log("Triângulo equilátero");
  } else if (a === b || a === c || b === c) {
    console.log("Triângulo isósceles");
  } else {
    console.log("Triângulo escaleno");
  }
} else {
  console.log("Triângulo inválido");
}

   //8.//
let opcao = parseInt(prompt(
  "Escolha um prato:\n1 - Pizza\n2 - Hambúrguer\n3 - Salada\n4 - Macarrão"
));

switch (opcao) {
  case 1:
    console.log("Pizza - R$ 25,00. Deliciosa pizza de queijo com calabresa.");
    break;
  case 2:
    console.log("Hambúrguer - R$ 20,00. Hambúrguer artesanal com batata.");
    break;
  case 3:
    console.log("Salada - R$ 15,00. Salada fresca com molho especial.");
    break;
  case 4:
    console.log("Macarrão - R$ 22,00. Macarrão ao molho branco com frango.");
    break;
  default:
    console.log("Opção inválida.");
}
   //9.//

let peso = parseFloat(prompt("Digite seu peso (em kg):"));
let altura = parseFloat(prompt("Digite sua altura (em metros):"));

let imc = peso / (altura * altura);
console.log("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
  console.log("Classificação: Abaixo do peso");
} else if (imc < 25) {
  console.log("Classificação: Peso normal");
} else if (imc < 30) {
  console.log("Classificação: Sobrepeso");
} else {
  console.log("Classificação: Obesidade");
}

   10.
let numero = parseInt(prompt("Digite um número positivo:"));
let i = 0;

while (i <= numero) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}