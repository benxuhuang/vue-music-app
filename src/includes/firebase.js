import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDgNhmugDxQUInri8o4xPNuvq3g2DLbkhw',
  authDomain: 'vue-music-app-6c430.firebaseapp.com',
  projectId: 'vue-music-app-6c430',
  storageBucket: 'vue-music-app-6c430.appspot.com',
  appId: '1:374943611513:web:6d1ccf7fcd44c9944c32a8',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth, db, usersCollection, storage, songsCollection, commentsCollection,
};
