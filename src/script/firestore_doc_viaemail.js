import {doc, getDoc, getFirestore} from 'firebase/firestore';


async function GetDocViaEmail(email){
    const db = getFirestore();
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        return docSnap;
    }else{
        console.error("Doc not found for user: " + email);
        return null;
    }
}

export default GetDocViaEmail;