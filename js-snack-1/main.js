// Snack 1:
// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.


const automobili = [
    {
        marca: "Chevrolet",
        modello: "modello 1",
        alimentazione: "benzina"
    },
    {
        marca: "Citroen",
        modello: "modello 2",
        alimentazione: "disel"
    },
    {
        marca: "Ford",
        modello: "modello 1",
        alimentazione: "gpl"
    },
    {
        marca: "Jeep",
        modello: "modello 3",
        alimentazione: "elettrico"
    },
    {
        marca: "Kia",
        modello: "modello 4",
        alimentazione: "metano"
    },
    {
        marca: "Lancia",
        modello: "modello 5",
        alimentazione: "benzina"
    },
    {
        marca: "Skoda",
        modello: "modello 6",
        alimentazione: "disel"
    },
    {
        marca: "Tesla",
        modello: "modello 7",
        alimentazione: "gpl"
    },
    {
        marca: "Volvo",
        modello: "modello 8",
        alimentazione: "elettrico"
    },
    {
        marca: "Seat",
        modello: "modello 9",
        alimentazione: "metano"
    }
]
// Dividi le automobili in 3 array separati:
//nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

// utilizzo .filter per identificare le auto che hanno un certo tipo di alimentazione

// const automobiliBenzina = automobili.filter()
const automobiliBenzina = automobili.filter(function (automobile) {
    console.log((automobile.alimentazione == "benzina"));
    if (automobile.alimentazione == "benzina") {
        return true
    }
    return false
})
console.log(automobiliBenzina);
