import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB7oSGseZywGu1QFTpqiJbyLUvqZdenBns',
  authDomain: 'ubereatsclonern-346109.firebaseapp.com',
  projectId: 'ubereatsclonern-346109',
  storageBucket: 'ubereatsclonern-346109.appspot.com',
  messagingSenderId: '147763742506',
  appId: '1:147763742506:web:4ff4c7c77a0a44fa99c053',
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
