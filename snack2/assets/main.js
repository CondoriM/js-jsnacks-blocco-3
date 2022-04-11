const nomi =  ['grogu', 'MANDO', 'Luke']

const upper = nomi.map((toupper) => {
    return toupper.charAt(0).toUpperCase() + toupper.substring(1).toLowerCase()
})

console.log(upper);
console.log(nomi);