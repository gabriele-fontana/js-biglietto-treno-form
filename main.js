const kmPrice = 0.21;
const seniorDiscount = 40;
const youngDiscount = 20;
const btn = document.getElementById('calculate-btn');
const recapSection = document.getElementById('recap')

function calcolaBiglietto() {
    event.preventDefault() /* prevent page refresh */
    const age= document.getElementById('age').value
    const km = document.getElementById('km').value
    const name = document.getElementById('name').value
    let prezzoBase = km * kmPrice;
    let scontoApplicato = 0;


    if (age === 'Giovane') {
        scontoApplicato = youngDiscount;
    } else if (age === 'Anziano') {
        scontoApplicato = seniorDiscount;
    }

    // Calcolo del prezzo finale
    const risparmio = (prezzoBase * scontoApplicato) / 100;
    const prezzoFinale = prezzoBase - risparmio;
    console.log(prezzoFinale)
    recapSection.innerHTML = ` 
        <p class='p-2'>Nome: ${name}</p>
        <p class='p-2'>Km: ${km}</p>
        <p class='p-2'>Età: ${age}</p>
        <p class='p-2'><strong>Prezzo Finale: €${prezzoFinale.toFixed(2)}</strong></p>
    `/* add recap to the page */
    const title = document.getElementById('title')
    title.classList.remove('d-none')
    return prezzoFinale
}
btn.addEventListener('click', calcolaBiglietto)
