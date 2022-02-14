// Palidroma

// Chiedere all’utente di inserire una parola
let parola = prompt('Inserisci una parola');

// Creare le variebile
let carattere;
let parolaInversa = '';
let i = parola.length - 1;

while (i >= 0) {
  carattere = parola[i];
  parolaInversa += carattere;
  console.log(carattere);
  i--;
}
console.log(parolaInversa);


// Creare una funzione per capire se la parola inserita è palindroma
// function palindroma(word) {
//   while (i >= 0) {
//     carattere = word[i];
//     parolaInversa += carattere;
//     console.log(carattere);
//     i--;
//   }
//   return parolaInversa

// }
// const risultato = palindroma(parola)
// console.log(risultato)

if (parola == parolaInversa) {
  console.log('la parola è palindroma');
} else {
  console.log('la parola non è palindroma');
}



// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.
