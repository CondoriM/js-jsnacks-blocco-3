const auto = [
    {
        marca: 'Audio',
        modello: '2015',
        alimentazione: 'benzina'
    },
    {
        marca: 'Renault',
        modello: '2015',
        alimentazione: 'metano'
    },
    {
        marca: 'Audio',
        modello: '2015',
        alimentazione: 'diesel'
    },
    {
        marca: 'ford',
        modello: '2020',
        alimentazione: 'gpl'
    },
    {
        marca: 'Audio',
        modello: '2015',
        alimentazione: 'elettrico'
    },
    {
        marca: 'lancia',
        modello: '2012',
        alimentazione: 'benzina'
    },
    {
        marca: 'Audio',
        modello: '2015',
        alimentazione: 'metano'
    },
    {
        marca: 'maserati',
        modello: '2020',
        alimentazione: 'diesel'
    },
    {
        marca: 'nissan',
        modello: '2015',
        alimentazione: 'gpl'
    },
    {
        marca: 'lancia',
        modello: '2015',
        alimentazione: 'elettrico'
    }
]

//metodo con if else
/*
const Abenzina = [];
const Adiesel = [];
const Arest = [];

auto.forEach((element) => {
    if(element.alimentazione == 'benzina'){
        Abenzina.push(element.alimentazione)
    }else if(element.alimentazione == 'diesel'){
        Adiesel.push(element.alimentazione)
    }else{
        Arest.push(element.alimentazione)
    }
})

console.log(Abenzina);
console.log(Adiesel);
console.log(Arest);
*/

const alimentB = auto.filter(function(Abenzina){
    if(Abenzina.alimentazione === 'benzina'){
        return true;
    }else{
        return false;
    }
})

const alimentD = auto.filter(function(Abenzina){
    if(Abenzina.alimentazione === 'diesel'){
        return true;
    }else{
        return false;
    }
})

const alimentF = auto.filter(function(Abenzina){
    if((Abenzina.alimentazione !== 'benzina') & (Abenzina.alimentazione !== 'diesel')){
        return true;
    }else{
        return false;
    }
})

console.log(alimentB)
console.log(alimentD)
console.log(alimentF)