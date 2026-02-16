const kmPrice = 0.21;
const seniorDiscount = 40;
const youngDiscount = 20;
const btn = document.getElementById('calculate-btn');

function calcolaBiglietto() {
    
    const age= document.getElementById('age').value
    const km = document.getElementById('km').value
    let prezzoBase = km * kmPrice;
    let scontoApplicato = 0;


    if (age < 18) {
        scontoApplicato = youngDiscount;
    } else if (age >= 65) {
        scontoApplicato = seniorDiscount;
    }

    // Calcolo del prezzo finale
    const risparmio = (prezzoBase * scontoApplicato) / 100;
    const prezzoFinale = prezzoBase - risparmio;
    console.log(prezzoFinale)
    return prezzoFinale
}
btn.addEventListener('click', calcolaBiglietto)
