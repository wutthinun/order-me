import Firebase from 'firebase'
const apiKey = process.env.apiKey || process.conf.apiKey
const authDomain = process.env.authDomain || process.conf.authDomain
const databaseURL = process.env.databaseURL || process.conf.databaseURL
const projectId = process.env.projectId || process.conf.projectId
const storageBucket = ''
const messagingSenderId = process.env.messagingSenderId || process.conf.messagingSenderId

var firebaseApp = Firebase.initializeApp({
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
})

var db = firebaseApp.database().ref('orderme')

export default db
