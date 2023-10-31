import { collection, addDoc, getFirestore, setDoc, doc, updateDoc } from "firebase/firestore";

async function FirestoreSetup({
    email,
    medication
}) {

    const db = getFirestore();
   
    const docRef = doc(db, "users", email);
    return await setDoc(docRef, {medications: medication}, {merge: true})
}


export default FirestoreSetup;