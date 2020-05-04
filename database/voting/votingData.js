const firebase = require("firebase")

const firebaseConfig = {}

const firebaseapp = firebase.initializeApp(firebaseConfig)

const auth = firebaseapp.auth()
const database = firebaseapp.database()

const vote_data = {
    Health: {
        uid: "vote"
    },
    Transport: {
        uid: "vote"
    },
    Education: {
        uid: "vote"
    },
    Environment: {
        uid: "vote"
    }
}

const writeVoteData = () => {
    auth.signInWithEmailAndPassword("example@example.com", "examplePassword")
    .then(() => {
        database.ref("vote_data").set(vote_data)
            .then(() => {
                console.log("write successful")
                process.exit(0)
            })

    })
    .catch(err => {
        console.log(err);
    })
}

writeVoteData()