

// **************** Pari e Dispari*****************

// Creare le varibile
let numeroUtente;
let numeroPc;
console.log(numeroUtente)

numeroUtente = prompt('Inserisci il numero');
numeroUtente = numeroUtente * 1;
if (numeroUtente < 0) {
  numeroUtente = -numeroUtente;
}
numeroUtente;
while (numeroUtente > 1) {
  numeroUtente = numeroUtente - 2;
}
if (numeroUtente == 0) {
  alert('Il numero è pari');
} else {
  alert('Il numero è dispari');
}

function getRandomInt(1, 5) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.
