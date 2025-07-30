//questão 7//
let lado a = parseFloat(prompt("Digite o lado A do triângulo:"));
let lado b = parseFloat(prompt("Digite o lado B do triângulo:"));
let lado c = parseFloat(prompt("Digite o lado C do triângulo:")); 

if (lado a + lado b > lado c && lado a + lado c > lado b && lado b + lado c > lado a) {
  if (lado a === lado b && lado b === lado c) {
    console.log("Triângulo equilátero(todos os lados iguais)");
  } else if (lado a === lado b || lado a === lado c || lado b === lado c) {
    console.log("Triângulo isósceles(dois lados iguais)");
  } else {
     console.log("Triângulo escaleno(todos os lados diferentes)");
  }
} else {
   console.log("Triângulo inválido(não satisfaz a desigualdade)");
  }
}

//questão 8//
    let prato = prompt("Escolha um prato: pizza, hamburguer, salada ou macarrao").toLowerCase();

switch (prato) {
  case "pizza":
    console.log("Preço: R$75,00\nDescrição: Pizza de mussarela com borda recheada.");
    break;
  case "hamburguer":
    console.log("Preço: R$35,00\nDescrição: Hambúrguer artesanal com batata.");
    break;
  case "salada":
    console.log("Preço: R$15,00\nDescrição: Salada fresca com molho especial.");
    break;
  case "macarrao":
    console.log("Preço: R$18,00\nDescrição: Macarrão ao molho branco.");
    break;
  default:
    console.log("Opção inválida!");
}

//questão 9//
let peso = parseFloat(prompt("Digite seu peso (kg):"));
let altura = parseFloat(prompt("Digite sua altura (m):"));

let imc = peso / (altura * altura);
let classificacao = "";

if (imc < 18.5) {
  classificacao = "Abaixo do peso";
} else if (imc < 25) {
  classificacao = "Peso normal";
} else if (imc < 30) {
  classificacao = "Sobrepeso";
} else {
  classificacao = "Obesidade";
}

console.log(`Seu IMC é ${imc.toFixed(2)}: ${classificacao}`);

//questão 10//
    let numero = parseInt(prompt("Digite um número positivo:"));
    
    if (numero <= 0) {
        console.log("Por favor, digite um número positivo.");
        return;
    }
    
    console.log(`Números pares de 0 até ${numero}:`);
    let i = 0;
    while (i <= numero) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
}
