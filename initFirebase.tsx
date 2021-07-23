import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/performance'

const firebaseConfig = {
  apiKey: 'AIzaSyCzGZ3Em4go1TLMcMAWRW4VoEf8SB7kGCA',
  authDomain: 'yourdocent.firebaseapp.com',
  databaseURL: 'https://yourdocent.firebaseio.com',
  projectId: 'yourdocent',
  storageBucket: 'yourdocent.appspot.com',
  messagingSenderId: '576248456563',
  appId: '1:576248456563:web:4226a51dc355300f2dd106',
  measurementId: 'G-P1BP6PF7CW',
}

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const db = app.firestore()
const auth = app.auth()
const GoogleauthProvider = new firebase.auth.GoogleAuthProvider()
const GuestauthProvider = new firebase.auth.EmailAuthProvider()

const Storage = app.storage()
export { db, auth, GoogleauthProvider, GuestauthProvider, Storage }
