const data = require('./class-2-data.json')

const males = data.filter(e=> e.sex==="M")
const females = data.filter(e=> e.sex==="F")

const maleAges = males.map(e=> e.age)
const femaleAges = females.map(e=> e.age)

const averageMaleAge = averageAge(maleAges)
const averageFemaleAge = averageAge(femaleAges)


function averageAge(col){
    const sum = col.reduce((p, c)=> p + c)
    const totalItems = col.length

    return Math.round(sum / totalItems)
}

console.log("===========================")
console.log("Average male age: ", averageMaleAge)
console.log("Average female age: ", averageFemaleAge)
console.log("===========================")

