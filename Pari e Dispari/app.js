// **************** Pari e Dispari*****************

// Creare le varibile

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const decisione = prompt('Scegli: pari o dispari?');
const nUtente = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log(nUtente, 'Numero scelto dall nUtente');

// Generiamo un numero random(sempre da 1 a 5) per il computer usando la nostra funzione.
const nComputer = random(1, 5);
function random(min, max) {
  min = parseInt(min);
  max = parseInt(max);
  return parseInt(Math.random() * (max - min) + min);
}
console.log(nComputer, 'Numero generato random dall nComputer');

// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
const risultato = somma(nUtente, nComputer);
function somma(num1, num2) {
  let somma = num1 + num2;
  return somma;
}
console.log(risultato, 'Somma totale (nUtente + nComputer)');

// Dichiariamo chi ha vinto.
if (
  (decisione === 'pari' && risultato % 2 == 0) ||
  (decisione === 'dispari' && risultato % 2 !== 0)
) {
  alert('hai vinto');
} else {
  alert('hai perso');
}
