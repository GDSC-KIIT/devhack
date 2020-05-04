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

const loginAndWrite = (email, password, data) => {
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log("Login Successful")
            const uid = auth.currentUser.uid

            db.ref(`teamdata/${uid}`)
                .set(data)
                .then(() => {
                    console.log(`write successful for ${email}`)
                })
                .catch(err => {
                    console.log(err.message + `for ${email}`)
                })
        })
        .catch(err => {
            console.log(err.message + `for ${email}`)
        })
}

const generatePayload = (
    team_name,
    leader_name,
    leader_email,
    number_of_members,
    college_name,
    domain
) => {
    let payload = {
        team_name: team_name,
        leader_name: leader_name,
        leader_email: leader_email,
        number_of_members: number_of_members,
        domain: domain,
        college_name: college_name,
        submission_time_stamp: "",
        git_repo_link: "",
        marks: {
            innovation: "",
            business_model: "",
            scalability: "",
            wow_factor: "",
        },
    }

    return payload
}

const getTeamSize = teamdata => {
    if (teamdata["Teammate 4 :"] == "") {
        return 3
    } else {
        return 4
    }
}

const emailPw = require("./email_and_passwords.json")
const registrations = require("./registrations.json")

//size = 101
for (let i = 0; i < registrations.length; i++) {
    let teamdata = registrations[i]

    let payload = generatePayload(
        teamdata["Team Name :"],
        teamdata["Team Captain (Teammate 1) :"],
        emailPw[i]["email"],
        getTeamSize(teamdata),
        teamdata["College :"],
        teamdata["Domain (cannot be changed later) :"]
    )

    loginAndWrite(emailPw[i]["email"], emailPw[i]["password"], payload)
}
