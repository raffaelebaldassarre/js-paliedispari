/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti. */

var wordUsers = prompt("Inserisci una parola");

function palindroma(parolaPalindroma) {
    var lunghezzaAnalizzata = Math.floor(parolaPalindroma.length / 2);
    for (var i = 0; i < lunghezzaAnalizzata; i++){
      if (parolaPalindroma[i] === parolaPalindroma[parolaPalindroma.length - i - 1])
        return "Siii questa è una parola palindroma";   
        return "Mi dispiace questa non è un parola palindroma";
    }
  }

var risultato = palindroma (wordUsers);
console.log(risultato);