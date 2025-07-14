// 11. Verifique se 10 é maior que 7
console.log(10 > 7); // true
// Com o operador > verifiquei se o valor à esquerda é maior que o valor à direita

// 12. Verifique se 5 é menor ou igual a 3
console.log(5 <= 3); // false
// O operador <= verifica se o valor à esquerda é menor ou igual ao da direita

// 13. Verifique se 7 é igual a '7' com == e com ===
console.log(7 == '7'); // true
console.log(7 === '7'); // false
// Com o operador ==, comparei apenas os valores, ignorando o tipo
// === compara valor e tipo (onde 7 é number e '7' é string)

// 14. Verifique se 10 !== '10' e se 10 != '10'
console.log(10 !== '10'); // true (mesmo valor, mas tipos diferentes)
console.log(10 != '10'); // false (valores iguais)
// !== esses operadores verifica se os valores são diferentes OU se os tipos são diferentes
// != já esses verifica se os valores são diferentes, ignorando o tipo

// 15. Avalie (5 > 3) && (8 < 10)
console.log((5 > 3) && (8 < 10)); // true && true => true
// Esse operador && (E lógico) só retorna true se as duas expressões forem verdadeiras

// 16. Avalie (5 < 3) || (8 === 8)
console.log((5 < 3) || (8 === 8)); // false || true => true
// Esse operador || (OU lógico) retorna true se pelo menos uma expressão for verdadeira

// 17. Avalie !(7 > 2)
console.log(!(7 > 2)); // !true => false
// Primeiro avaliei a expressão dentro dos "()" que dá true e ! (negação) inverte o valor lógico da expressão, fica falso

// 18. Faça (4 + 3) * 2 e compare com 4 + 3 * 2
console.log((4 + 3) * 2); // 7 * 2 = 14
console.log(4 + 3 * 2);   // 3 * 2 = 6; 4 + 6 = 10
// Os parênteses mudaram a conta e os seus resultados

// 19. Calcule o resultado de 2 ** 4
console.log(2 ** 4); // 2 elevado a 4 = 16
// Esse ** é o operador de exponenciação (potência)
// Realizei a operação, elevei o número 2 a 4
