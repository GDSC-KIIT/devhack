import firebase from 'firebase/app'

// Paste your firebase project config here
const firebaseConfig = {}

const firebaseapp = firebase.initializeApp(firebaseConfig)
export default firebaseapp