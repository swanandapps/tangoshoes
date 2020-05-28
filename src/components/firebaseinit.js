import firebase from 'firebase';
import 'firebase/firestore';
import firebaseconfig from './firebaseconfig'

const firebaseapp = firebase.initializeApp(firebaseconfig)
const firestore = firebase.firestore()
var storage = firebase.storage()

export default firebaseapp.firestore()