import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBorkJ9EAPo5rCoc4oVVBDgOOzbKH9pDQY',
	authDomain: 'react-june-28cac.firebaseapp.com',
	projectId: 'react-june-28cac',
	storageBucket: 'react-june-28cac.appspot.com',
	messagingSenderId: '527805316335',
	appId: '1:527805316335:web:a138c03f1e9f4c7b88ef1a',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
