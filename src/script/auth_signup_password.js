import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const SignUp_Password = (firstName, email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            console.log(error.code);
            return null;
        })
}


export default SignUp_Password;