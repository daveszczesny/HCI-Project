import { getAuth, onAuthStateChanged } from "firebase/auth";

async function GetCurrentUserEmail() {
    return new Promise((resolve, reject) => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setTimeout(()=>{
                    resolve(user);
                }, 40)
            } else {
                setTimeout(() => {
                    reject("User not found");
                }, 40)
            }
        })
    })
}



export default GetCurrentUserEmail;