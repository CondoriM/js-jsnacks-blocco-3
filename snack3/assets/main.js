const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]

const mammifero =[]

const mammAnim = animals.filter((animal) => {
    if(animal.classe === 'mammiferi'){
        mammifero.push(animal)
    }else{
        return false;
    }
})

console.log(mammifero);