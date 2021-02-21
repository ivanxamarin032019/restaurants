//como es una verisón nueva de firebase, se tiene q poner esto
import { firebaseApp } from './firebase'
import firebase from 'firebase'
require('firebase/firestore')

// Es para uan versión "antigua" de firebase q no tengo instalada
//import { firebaseApp } from './firebase'
//import * as firebase from 'firebase'
//import 'firebase/firestore'

const db = firebase.firestore(firebaseApp)

export const isUserLogged = () => {
    let isLogged = false
    firebase.auth().onAuthStateChanged((user) => {
        user !== null && (isLogged = true)
    })
    return isLogged
}

export const getCurrentUser = () => {
    return firebase.auth().currentUser
}