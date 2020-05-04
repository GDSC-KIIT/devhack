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
const database = firebaseapp.database()

let finalVotes = {
    "Education": {
        ps1: 0,
        ps2: 0,
        ps3: 0,
        ps4: 0
    },
    "Environment": {
        ps1: 0,
        ps2: 0,
        ps3: 0,
        ps4: 0
    },
    "Healthcare": {
        ps1: 0,
        ps2: 0,
        ps3: 0,
        ps4: 0
    },
    "Transport": {
        ps1: 0,
        ps2: 0,
        ps3: 0,
        ps4: 0
    }
}

auth.signInWithEmailAndPassword(
    "example@example.com",
    "examplePassword"
).then(() => {
    database
        .ref("vote_data")
        .once("value")
        .then((snapshot) => {
            console.log("No. of Votes as per domain")
            console.log("Education: ", Object.keys(snapshot.val()['Education']).length)
            console.log("Environment: ", Object.keys(snapshot.val()['Environment']).length)
            console.log("Healthcare: ", Object.keys(snapshot.val()['Healthcare']).length)
            console.log("Transport: ", Object.keys(snapshot.val()['Transport']).length, '\n')

            let education = snapshot.val()['Education']
            let environment = snapshot.val()['Environment']
            let healthcare = snapshot.val()['Healthcare']
            let transport = snapshot.val()['Transport']

            // education votes
            Object.keys(education).forEach((k) => {
                if (education[k] === 1) {
                    finalVotes['Education']['ps1'] += 1
                } else if (education[k] === 2) {
                    finalVotes['Education']['ps2'] += 1
                } else if (education[k] === 3) {
                    finalVotes['Education']['ps3'] += 1
                } else if (education[k] === 4) {
                    finalVotes['Education']['ps4'] += 1
                }
            })

            // Environment Votes
            Object.keys(environment).forEach((k) => {
                if (environment[k] === 1) {
                    finalVotes['Environment']['ps1'] += 1
                } else if (environment[k] === 2) {
                    finalVotes['Environment']['ps2'] += 1
                } else if (environment[k] === 3) {
                    finalVotes['Environment']['ps3'] += 1
                } else if (environment[k] === 4) {
                    finalVotes['Environment']['ps4'] += 1
                }
            })

            Object.keys(healthcare).forEach((k) => {
                if (healthcare[k] === 1) {
                    finalVotes['Healthcare']['ps1'] += 1
                } else if (healthcare[k] === 2) {
                    finalVotes['Healthcare']['ps2'] += 1
                } else if (healthcare[k] === 3) {
                    finalVotes['Healthcare']['ps3'] += 1
                } else if (healthcare[k] === 4) {
                    finalVotes['Healthcare']['ps4'] += 1
                }
            })

            Object.keys(transport).forEach((k) => {
                if (transport[k] === 1) {
                    finalVotes['Transport']['ps1'] += 1
                } else if (transport[k] === 2) {
                    finalVotes['Transport']['ps2'] += 1
                } else if (transport[k] === 3) {
                    finalVotes['Transport']['ps3'] += 1
                } else if (transport[k] === 4) {
                    finalVotes['Transport']['ps4'] += 1
                }
            })


            console.log(finalVotes)
            process.exit(0)
        })
})
