// Snack 2
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]


nomi = ['pippo', 'PLUTO', 'Paperino']



const nomiLower = nomi.map(nome => {
    console.log(nome);
    return nome.toLowerCase()
});
console.log(nomiLower);

const firtChart = nomiLower.map(nome => {
    return nome.charAt(0).toUpperCase();
})
console.log(firtChart);

const nomiSlice = nomiLower.map(nome => {
    console.log(nome);
    return nome.slice(1)
});
console.log(nomiSlice);


