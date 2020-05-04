const firebase = require("firebase")
const fs = require('fs')

const firebaseConfig = {}

const firebaseapp = firebase.initializeApp(firebaseConfig)

const auth = firebaseapp.auth()
const database = firebaseapp.database()



const getData = () => {
    auth.signInWithEmailAndPassword("example@example.com", "examplePassword")
    .then(() => {
        database.ref("/teamdata").once('value')
            .then((snapshot) => {
                const teamdata = snapshot.val()

                let final_submissions = {}

                Object.keys(teamdata).forEach(k => {
                    if(teamdata[k]["git_repo_link"] !== ""){
                        final_submissions[k] = teamdata[k]
                    }
                })

                console.log(Object.keys(final_submissions).length)
                fs.writeFileSync("final_submissions.json", JSON.stringify(final_submissions))
            })

    })
    .catch(err => {
        console.log(err);
    })
}

getData()