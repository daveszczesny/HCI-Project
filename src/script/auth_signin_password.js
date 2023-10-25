import { getAuth, signInWithEmailAndPassword } from "firebase/auth"


export default function SignIn_User({ email, password }) {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;


            return user;
        })
        .catch((error) => {
            console.error(error);
            return null;
        });
}