// chiedere all'utente il numero di chilometri che vuole percorrere
    var km = prompt('Quanti kilometri vuoi percorrere?');
    console.log(km);
    document.getElementById('km').innerHTML = "La distanza in km è di " + km;

// l'età del passeggero
    var age = prompt('Quanti anni hai?');
    console.log(age);
    document.getElementById('age').innerHTML = "La tua età è " + age + " anni";

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
    var rate = 0.21;
    var price = km * rate;
    console.log(price);
    document.getElementById('price').innerHTML = "Il prezzo iniziale è di " + price;
    
// va applicato uno sconto del 20% per i minorenni    
    var minorsDiscount = ((price * 20 ) / 100);
    console.log(minorsDiscount);

    if (age <= 17) {
        document.getElementById('minorsdiscount').innerHTML = "Hai diritto allo sconto per minorenni"
    }
// va applicato uno sconto del 40% per gli over 65

    var seniorsDiscount = ((price * 40) / 100);
    console.log(seniorsDiscount); 

    if (age > 65) {
        document.getElementById('seniorsdiscount').innerHTML = "Hai diritto allo sconto per anziani"
    }
// Calcolo

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
    document.getElementById('finalpricerounded').innerHTML = "Il prezzo finale del tuo biglietto è di " + finalpricerounded + "€";