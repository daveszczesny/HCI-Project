import { useState } from "react";
import './Login.css'

const LoginPage = () => {

    const [showLoginForm, setShowLoginForm] = useState(true);
    const [showSignupForm, setShowSignupForm] = useState(false);


    const switchForm = () => {
        let temp = showLoginForm;
        setShowLoginForm(showSignupForm);
        setShowSignupForm(temp);
    }

    return (
        <div>
            <div className="login-heading">
               {showLoginForm? (
                <h1>Login</h1>
               ):(
                <h1>Sign up</h1>
               )}
            </div>


        </div>
    );
}


export default LoginPage;