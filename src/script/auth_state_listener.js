import { getAuth, onAuthStateChanged } from "firebase/auth";

async function GetCurrentUserEmail() {
    return new Promise((resolve, reject) => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve(user);
            } else {
                reject("User not found");
            }
        })
    })
}


export default GetCurrentUserEmail;