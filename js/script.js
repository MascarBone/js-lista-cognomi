let listaCognomi = [];  //Array vuoto per contenere la lista cognomi
let input;              //Variabile di appoggio per permettere l'inserimento
let index;              //Variabile di appoggio per salvare l'indice dell'elemento nell'array


//Ciclo 'do-while' per chiedere l'inserimento all'utente di un cognome
//Nel momento in cui il valore sarà 0, si interrompe l'inserimento
do{
    input = prompt ("Inserisci un cognome\nInserire 0 per terminare");
    input = input.toLowerCase();

    // Con questo codice la prima lettera della stringa viene sostituita
    // dalla sua stessa versione in UpperCase
    input = input.charAt(0).toUpperCase() + input.substring(1);
    // console.log (input);

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
    index = i + 1;
    console.log(index +" " + listaCognomi[i]);
}