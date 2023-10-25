import {doc, getDoc, getFirestore} from 'firebase/firestore';

async function GetDocViaEmail(email){
    const docRef = doc(getFirestore(), 'users', email);
    return await getDoc(docRef);
}

export default GetDocViaEmail;