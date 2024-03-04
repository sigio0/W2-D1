
/*REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

 /*ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino. */

/* SCRIVI QUI LA TUA RISPOSTA */

let numeroProva = 10;  //qua sto dichiarando una variabile mettendo al suo interno un valore numerico
let nome = "Giacomo"; // qua sto dichiarando una variabile mettendo al suo interno un valore di tipo stringa
let varNull = null; // qua sto dichiarando una variabile mettendo al suo interno un valore di tipo null , cioe' questa variabile al suo interno sarà vuota
let varUnderfined; // qua sto solo dichiarando una variabile senza specificare cosa ci sia al suo interno 
let varBoolean = true; //qua sto dichiarando una variabile di tipo booleana , cioè una variabile che puo' contenere solo 2 tipo di valori (true e false)

//testo la stampa di queste variabili nella console
console.log(numeroProva);
console.log(nome);
console.log(varNull);
console.log(varUnderfined);
console.log(varBoolean);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Giovanni";   // ho dichiarato la variabile myname e gli ho dato un assegnazione di tipo stringa ("Giovanni")
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//ho dichiarato le variabili num1 e num2 assegnandogli un valore di tipo numerico a entrambe , poi ho dichiarato una nuova variabile num3 assegnandogli come valore la somma delle due variabili dichiarate in precedenza
let num1 = 12;
let num2 = 20;
let num3 = num1 + num2;
console.log(num3);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// qua ho dichiarato una variabile x assegnandogli un valore di tipo numerico 
let x = 12;
console.log(x);


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Fruci";   // qua ho riassegnato un nuovo valore alla variabile myname , gia dichiarata in precedenza e assegnata come "Giovanni", in un nuovo valore "Fruci"
const costante1 = 3.14; // qua ho dichiarato una costante che non puo' essere modificata 
//costante1 = 5.4; // qua mi darà errore poichè a una costante non puoi modificare il valore al suo interno 
console.log(myName);
console.log(costante1);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num4 = 4;
let num5 = num4 - x;
console.log(num5);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"
let name2 = "John"


// qua la console darà valore false poichè una ha la lettera maiuscola e l altra no
console.log(name1 === name2); 

//ho fatto in modo con la funzione toLowerCase che le variabili siano entrambe con le lettere tutte in minuscolo in modo che nella console dia true 
name1 = name1.toLowerCase();
name2 = name2.toLowerCase();

console.log(name1 === name2);