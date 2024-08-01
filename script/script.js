/* 
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Bonus:
Gestire il campo dei chilometri con un input di tipo number
Gestire il campo dell'età con una <select>
Aggiungere un bottone per resettare il form
Aggiungere un campo col nome del passeggero
Randomizzare, nel biglietto, un numero di carrozza casuale
Randomizzare nel biglietto, un Codice Passeggero di 5 cifre che deve iniziare con il numero 9
*/

console.log('ehilà!');

/*
-recupero elementi dal DOM di interesse
-recupero dati da inpunt utente tramite gestione eventi
-elaboro i dati
-elaboro output
-
*/

// Prep

const userAgeField = document.getElementById('userAge');
const userKmField = document.getElementById('userKm');
const btnCalcPrize = document.querySelector('button');
const kmPrice = 0.21;

// Gestiosco Eventi

btnCalcPrize.addEventListener('click', function (e) {
    e.preventDefault()
  //recupero dati da input

    const userAge = parseInt(userAgeField.value);
    const userKm = parseInt(userKmField.value);
    console.log('userAge:', userAge);
    console.log('userKm:', userKm);

    // Valido dati

    // Elaboro dati

    const startPrice = kmPrice * userKm;
    
    let discount;
    if (userAge > 64) discount = 40;
    else if (userAge < 18) discount = 20;
    let finalPrice = startPrice;

    console.log('discount:', discount);
    
    if (discount) {
        
        const priceResult = document.querySelector('span'); // prendo l'elemento che mi interessa

        const discountMessage  = `Hai diritto ad un <strong>${discount}%</strong> di sconto`

        const discountAmount = (startPrice / 100) * discount;

       

        let finalPrice = finalPrice - discountAmount;
        console.log('finalPrice:', finalPrice);
    }

    


})