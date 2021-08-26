let listaCognomi = [];  //Array vuoto per contenere la lista cognomi
let input;              //Variabile di appoggio per permettere l'inserimento
let index;              //Variabile di appoggio per salvare l'indice dell'elemento nell'array


//Ciclo 'do-while' per chiedere l'inserimento all'utente di un cognome
//Nel momento in cui il valore sarà 0, si interrompe l'inserimento
do{
    input = prompt ("Inserisci un cognome\nInserire 0 per terminare");
    if (input != 0) {
        listaCognomi.push(input);
    }
}while (input != 0)

// Console log per verificare i dati all'interno dell'array
console.log (listaCognomi);
listaCognomi.sort();
console.log (listaCognomi);

// Ciclo 'for' per trovare l'indice corrispondente al cognome
for (let i = 0; i < listaCognomi.length; i++) {
    index = (listaCognomi.indexOf(listaCognomi[i]) + 1);
    console.log(index +" " + listaCognomi[i]);
}