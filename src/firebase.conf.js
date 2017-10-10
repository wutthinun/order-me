import Firebase from 'firebase'
const apiKey = process.env.apiKey
const authDomain = process.env.authDomain
const databaseURL = process.env.databaseURL
const projectId = process.env.projectId
const storageBucket = process.env.storageBucket
const messagingSenderId = process.env.messagingSenderId

var firebaseApp = Firebase.initializeApp({
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
})

var db = firebaseApp.database()

export default db
