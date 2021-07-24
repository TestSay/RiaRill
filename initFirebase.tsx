import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/performance'

const firebaseConfig = {
  apiKey: 'AIzaSyBgVNrhaUG_EFOExO7_9knnKGuYx_PGIo8',
  authDomain: 'perrychriss-e3b80.firebaseapp.com',
  projectId: 'perrychriss-e3b80',
  storageBucket: 'perrychriss-e3b80.appspot.com',
  messagingSenderId: '951775111575',
  appId: '1:951775111575:web:ea449b3df16f0db367bcd2',
  measurementId: 'G-TN2MB1CTC4',
}

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const db = app.firestore()
const auth = app.auth()
const GoogleauthProvider = new firebase.auth.GoogleAuthProvider()
const GuestauthProvider = new firebase.auth.EmailAuthProvider()

const Storage = app.storage()
export { db, auth, GoogleauthProvider, GuestauthProvider, Storage }
