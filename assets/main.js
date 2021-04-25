// chiedere all'utente il numero di chilometri che vuole percorrere
    var km = prompt('Quanti kilometri vuoi percorrere?');
    console.log(km);
// l'età del passeggero
    var age = prompt('Quanti anni hai?');
    console.log(age);
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
    var rate = 0.21;
    var price = km * rate;
    console.log(price);
// va applicato uno sconto del 20% per i minorenni    
    var minorsDiscount = ((price * 20 ) / 100);
// va applicato uno sconto del 40% per gli over 65
    var seniorsDiscount = ((price * 40) / 100); 
    var finalprice = price - seniorsDiscount;
    if (age <= 17) {
        finalprice = price - minorsDiscount;
    } else if (age > 65) {
        finalprice = price - seniorsDiscount;
    } else {
        finalprice = price;
    }
// L'output del prezzo finale va messo con massimo due decimali, per indicare centesimi sul prezzo
    var finalpricerounded = Math.round(finalprice * 100) / 100;
    console.log(finalpricerounded);
    document.getElementById('finalpricerounded').innerHTML = "Il prezzo del tuo biglietto è di " + finalpricerounded + "€";