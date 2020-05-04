let transport = []
let education = []
let healthcare = []
let environment = []


const final = require('./final_submissions.json')
const fs = require('fs')

Object.keys(final).forEach(k => {
    if(final[k]['domain'] === 'Transport'){
        transport.push(final[k])
    } else if(final[k]['domain'] === 'Education'){
        education.push(final[k])
    } else if(final[k]['domain'] === 'Environment'){
        environment.push(final[k])
    } else if(final[k]['domain'] === 'Healthcare'){
        healthcare.push(final[k])
    }
})

console.log(transport.length)
console.log(education.length)
console.log(environment.length)
console.log(healthcare.length)

fs.writeFileSync("sort/final_transport.json", JSON.stringify(transport))
fs.writeFileSync("sort/final_education.json", JSON.stringify(education))
fs.writeFileSync("sort/final_environment.json", JSON.stringify(environment))
fs.writeFileSync("sort/final_healthcare.json", JSON.stringify(healthcare))
