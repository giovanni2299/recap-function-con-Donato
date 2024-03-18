console.log('ciao mamma')

//creo una funzione che accetti il to-do
//aggiungere l'identificativo delle due liste 

// function addElementsToList(tasks, id){
//     // console.log(task, id);
//     const list = document.getElementById(id)

//     for(let i = 0; i < tasks.length; i++) {
//         const task = tasks[i];
//         list.innerHTML += `<li>${task}</li>`
//     }
// }

// function addElementToList(task, id){
//     // console.log(task, id);
//     const list = document.getElementById(id)
//     list.innerHTML += `<li>${task}</li>`
// }

// addElementsToList(['comprare il giornale', 'comprare il latte', 'vendere horizon'], 'to-do')
// // addElementToList('comprare il latte', 'to-do')

// const doneTasks = [
//     'comprare la farina',
//     'comprare il cibo del cane'
// ];

// for(let i = 0; i < doneTasks.length; i++) {
//     addElementToList(doneTasks[i], 'done');
// }




//creiamo una funzione che dica se l'utente se ha diritto ad uno sconto 
//se è over 65 sarà scontato
//altrimenti no


//nella funzione accetta in insgresso un parametro AGE che rappresenta l' età dell utente
//restiturià un booleano come risposta
const ageUser = parseInt(prompt('inserisci la tua età'));

function isDiscounted(age){
    if(age > 65){
        return true
    }
    return false; //valore booleano
    
}

const isDiscountedAge = isDiscounted(ageUser)
if(isDiscountedAge === true ){
    console.log('prezzo scontato')
} else{
    console.log('niente sconto')
}

// console.log(isDiscounted(18));
// console.log(isDiscounted(70));