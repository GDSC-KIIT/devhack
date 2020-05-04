// Will write up the problem statement data

const firebase = require("firebase")

const firebaseConfig = {}

const firebaseapp = firebase.initializeApp(firebaseConfig)

const auth = firebaseapp.auth()
const database = firebaseapp.database()

const questions = {
    Healthcare: [
        "Due to COVID-19, a huge number of people in our country are on the streets now with no food and shelter. How can you use technology to help the authorities solve this problem ?",
        13, 28
    ],
    Transport: [
        "How to make people use public transport more and also promote carpooling.",
        9,21
    ],
    Environment: [
        "Design a smart waste collection system that allows citizens to segregate the various types of solid waste they want to dispose and the municipal authorities to efficiently collect the same.",
        7,19
    ],
    Education : [
        "Students often feel a huge gap between what is taught in college and what they have to do in the real world. Is there a solution to bridge the gap without them taking help of extra courses online.",
        13,23
    ]
}

const writeProblemStatements = () => {
    auth.signInWithEmailAndPassword("example@example.com", "examplePassword")
    .then(() => {
        database.ref("problem_statements").set(questions)
            .then(() => {
                console.log("write successful")
                process.exit(0)
            })

    })
    .catch(err => {
        console.log(err);
    })
}

const readProblemStatements = () => {
    database.ref("problem_statements").once('value').then((snapshot) => {
        console.log(snapshot.val())
        process.exit(0)
    })
    .catch(err => {
        console.log(err)
    })
}

writeProblemStatements()
//readProblemStatements()