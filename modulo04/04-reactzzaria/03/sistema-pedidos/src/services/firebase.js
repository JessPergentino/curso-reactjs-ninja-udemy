import firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC2tlVmF6k-DF3jf-MLAZzLKRev5zC_2Qo',
  authDomain: 'reactzzaria-e44fa.firebaseapp.com',
  databaseURL: 'https://reactzzaria-e44fa.firebaseio.com',
  projectId: 'reactzzaria-e44fa',
  storageBucket: 'reactzzaria-e44fa.appspot.com',
  messagingSenderId: '616293224432',
  appId: '1:616293224432:web:84f35327f378b7d8e15735'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
