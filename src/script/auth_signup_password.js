import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function SignUp_User({ firstName, email, password }) {

  

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      updateProfile(user, {
        displayName: firstName
      });

      return user;

    })

}