import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBGHFs1cj-S00AIrvX9IN5Nl-7xXuIqqy0",
    authDomain: "restaurants-93884.firebaseapp.com",
    projectId: "restaurants-93884",
    storageBucket: "restaurants-93884.appspot.com",
    messagingSenderId: "849232789797",
    appId: "1:849232789797:web:c72b5e2a2e7a71f2969acc"
  }
  
export const firebaseApp = firebase.initializeApp(firebaseConfig)