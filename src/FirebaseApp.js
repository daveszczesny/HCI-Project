import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "hci-mediguardian.firebaseapp.com",
    projectId: "hci-mediguardian",
    storageBucket: "hci-mediguardian.appspot.com",
    messagingSenderId: "791725451126",
    appId: "1:791725451126:web:fb0bcfe97e0b3b82abfc57"
};

const appFirebase = initializeApp(firebaseConfig);
const firstore = getFirestore(appFirebase);


export default appFirebase;

