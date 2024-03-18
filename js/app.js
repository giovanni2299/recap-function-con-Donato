console.log('ciao mamma')

//creo una funzione che accetti il to-do
//aggiungere l'identificativo delle due liste 

function addElementsToList(tasks, id){
    // console.log(task, id);
    const list = document.getElementById(id)

    for(let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        list.innerHTML += `<li>${task}</li>`
    }
}

function addElementToList(task, id){
    // console.log(task, id);
    const list = document.getElementById(id)
    list.innerHTML += `<li>${task}</li>`
}

addElementsToList(['comprare il giornale', 'comprare il latte', 'vendere horizon'], 'to-do')
// addElementToList('comprare il latte', 'to-do')

const doneTasks = [
    'comprare la farina',
    'comprare il cibo del cane'
];

for(let i = 0; i < doneTasks.length; i++) {
    addElementToList(doneTasks[i], 'done');
}