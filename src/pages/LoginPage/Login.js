import { useState } from "react";
import './Login.css'
import SignUp_User from "../../script/auth_signup_password";
import SignIn_User from "../../script/auth_signin_password";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignupForm, setShowSignupForm] = useState(true);

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));

    const SignUp = (e) => {
        e.preventDefault();


        const user = SignUp_User({
            firstName: firstName,
            email: email,
            password: password
        })

        setauthenticated(true);
        localStorage.setItem("authenticated", true);


        navigate("/dashboard");


    }


    const SignIn = () => {
        const user = SignIn_User({
            email: email,
            password: password
        })

        setauthenticated(true);
        localStorage.setItem("authenticated", true);


        navigate("/dashboard");

    }


    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const switchForm = () => {
        let temp = showLoginForm;
        setShowLoginForm(showSignupForm);
        setShowSignupForm(temp);
    }
    if (!authenticated) {
        return (

            <div className="login-page">
                <div className="login-heading">
                    {showLoginForm ? (
                        <h1>Login</h1>
                    ) : (
                        <h1>Sign up</h1>
                    )}
                </div>
                <div className={`form-container signup-form ${showSignupForm ? 'unalt-view' : 'alt-view'}`}>

                    <form>
                        <div className="input-container">
                            <div className="first-name-section">
                                <input type="text" value={firstName} onChange={handleFirstNameChange} placeholder=" " />
                                <label htmlFor="first-name">First Name</label>
                            </div>

                            <div className="email-section">
                                <input type="text" value={email} onChange={handleEmailChange} placeholder=" " />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="password-section">
                                <input type="password" value={password} onChange={handlePasswordChange} placeholder=" " />
                                <label htmlFor="password">Password</label>
                            </div>

                            <div className="signup-button-container">
                                <button type="button" onClick={SignUp}>Sign up</button>
                            </div>

                        </div>
                    </form>

                </div>

                <div className={`switch-forms-container ${showLoginForm ? 'signup-form-hidden-button-container-show' : 'signup-form-hidden-button-container-hide'}`}>
                    <button onClick={switchForm}>Sign up instead</button>
                </div>

                <hr className="separater-line" />

                <div className={`switch-forms-container ${showSignupForm ? 'signup-form-hidden-button-container-show' : 'signup-form-hidden-button-container-hide'}`}>
                    <button onClick={switchForm}>Sign in instead</button>
                </div>

                <div className={`form-container signup-form ${showLoginForm ? 'unalt-view' : 'alt-view'}`}>
                    <form>
                        <div className="input-container">
                            <div className="email-section">
                                <input type="text" value={email} onChange={handleEmailChange} placeholder=" " />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="password-section">
                                <input type="password" value={password} onChange={handlePasswordChange} placeholder=" " />
                                <label htmlFor="password">Password</label>
                            </div>

                            <div className="signup-button-container">
                                <button onClick={SignIn}>Sign In</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        );

    } else {
        <Navigate replace to="/Dashboard" />
    }

}


export default LoginPage;