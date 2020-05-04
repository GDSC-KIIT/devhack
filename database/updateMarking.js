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
const db = firebaseapp.database()

const emailPw = require("./email_and_passwords.json")

const payload = {
    "practicality":"",
    "business_potential":"",
    "innovation": "",
    "impact_on_society":"",
    "prototype":""
}


for(let i=90; i<emailPw.length; i++){
  let user = emailPw[i]
  auth.signInWithEmailAndPassword(user["email"], user["password"]).then(
      () => {
          console.log("logged in")
          const uid = auth.currentUser.uid
  
          db.ref(`teamdata/${uid}/marks`)
              .set(payload)
              .then(() => {
                  console.log(`Edited ${uid}`)
              })
      }
  )
}

