const firebase = require("firebase")

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
}

const firebaseapp = firebase.initializeApp(firebaseConfig)
const auth = firebaseapp.auth()

const signup = (e, p) => {
    auth.createUserWithEmailAndPassword(e, p)
        .then(() => {
            console.log(`Signup Successful for ${e}`)
        })
        .catch(err => {
            console.log(err.message + `for ${e}`)
        })
}

const emailPW = require("./email_and_passwords.json")

console.log(emailPW.length)

for(let i=80; i<emailPW.length; i++){
  let teamLead = emailPW[i]
  signup(teamLead['email'], teamLead['password'])
}

