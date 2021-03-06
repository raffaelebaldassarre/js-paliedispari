/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// SOLUZIONE 1
/* var wordUsers = prompt("Inserisci una parola");

function palindroma(parolaPalindroma) {
    var lunghezzaAnalizzata = Math.floor(parolaPalindroma.length / 2);
    for (var i = 0; i < lunghezzaAnalizzata; i++){
        if (parolaPalindroma[i] === parolaPalindroma[parolaPalindroma.length - i - 1]){
        return "Siii questa è una parola palindroma";
        }   
        return "Mi dispiace questa non è un parola palindroma";
    }
}
var risultato = palindroma (wordUsers);
console.log(risultato); */

// SOLUZIONE 2 CICLO FOR
/* var wordUser = prompt("Inserisci una parola").toLowerCase();
var wordReverse = "";
for( var i= wordUser.length - 1; i>=0 ; i--){
  wordReverse += wordUser[i];
}
console.log(wordReverse);
if(wordReverse=wordUser){
  console.log("E' una parola palindroma");
}else{
  console.log("Non è una parola palindroma");
} */

// SOLUZIONE 3 FUNZIONE SENZA RETURN
/* function isPalindrome (word){
  var wordReverse = "";
  for( var i= word.length - 1; i>=0 ; i--){
    wordReverse += word[i];
  }
  if(wordReverse == word){
    console.log("E' una parola palindroma");
  }else{
    console.log("Non è una parola palindroma");
  }
}
var wordUser = prompt("Inserisci una parola").toLowerCase();
isPalindrome(wordUser); */

//SOLUZIONE 4 FUNZIONE CON RETURN
/* function isPalindrome (word){
  var wordReverse = "";
  for( var i= word.length - 1; i>=0 ; i--){
    wordReverse += word[i];
  }
  return wordReverse;
}
var wordUser = prompt("Inserisci una parola").toLowerCase();
var wordReverse = isPalindrome(wordUser);
if(wordReverse == wordUser){
  console.log("E' una parola palindroma");
}else{
  console.log("Non è una parola palindroma");
} */

//SOLUZIONE 5 if con split reverse Join
/* var wordUser = prompt("Inserisci una parola").toLowerCase();
var wordReverse = wordUser.split("").reverse().join("");
if(wordReverse === wordUser){
  console.log("E' una parola palindroma");
}else{
  console.log("Non è una parola palindroma");
} */

//SOLUZIONE 6 FUNZIONE CON split reverse join
var wordUser = prompt("Inserisci una parola").toLowerCase();
function reverseWord(word){
  return word.split("").reverse().join("");
}
var wordReverse = reverseWord(wordUser);
if(wordReverse === wordUser){
  console.log("E' una parola palindroma");
}else{
  console.log("Non è una parola palindroma");
}

/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti. */

/* var pariDispari = prompt("Scegli pari o dispari");
var userNumber = Number(prompt("Segli un numero da 1 a 5"));

    function getRandomNumber(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
  
  var pcNumber = getRandomNumber(1, 5);
  console.log(pcNumber);
  
  var sum = pcNumber + userNumber;
  console.log(sum);

  var message;

    function isEvenOrOdd (sum){
    if (sum % 2 == 0 && pariDispari === "pari"){
      message = "PARI ---> HAI VINTO!!";
    } else if (sum % 2 != 0 && pariDispari === "dispari") {
      message = "DISPARI ---> HAI VINTO!!";
    } else if (sum % 2 != 0 && pariDispari === "pari") {
      message = "DISPARI ---> HAI PERSO!!";
    } else if (sum % 2 == 0 && pariDispari === "dispari") {
      message = "PARI ---> HAI PERSO!!";
    }
  
    return message;
  }
  
  // invoco la funzione e stampo il risultato
  var risultato2 = isEvenOrOdd (sum);
  console.log(risultato2); */