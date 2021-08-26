let listaCognomi = [];
let input;
let i = 0;

do{
    input = prompt ("Inserisci un cognome");
    if (input != 0) {
        listaCognomi.push(input);
    }

}while (input != 0)

console.log (listaCognomi);

listaCognomi.sort();

console.log (listaCognomi);