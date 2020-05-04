const generatePassword = require('./passwordGenerator')
const registration = require('./registrations.json')

const fs = require('fs')

let emailPW = []

registration.forEach((team) => {
    let p = {
        email: team['E-mail (Teammate 1) :'], 
        password: generatePassword()
    }
    
    emailPW.push(p)
})

console.log(registration.length)
fs.writeFileSync('email_and_passwords.json', JSON.stringify(emailPW))