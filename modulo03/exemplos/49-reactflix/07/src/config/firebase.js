import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyDpU9umvLIWGRRNMNQDK8v8j9koQs8JYpM',
  authDomain: 'reactflix-7d424.firebaseapp.com',
  databaseURL: 'https://reactflix-7d424.firebaseio.com',
  projectId: 'reactflix-7d424',
  storageBucket: 'reactflix-7d424.appspot.com',
  messagingSenderId: '742129417422',
  appId: '1:742129417422:web:18894d9248d3d7af10249f'
})

const db = firebase.database()

export { db }
