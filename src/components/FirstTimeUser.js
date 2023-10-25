import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MrDoctor from "../Resources/Images/MrDoctor.png";
import '../pages/FirstLandingPage/FirstLandingPage.css';

let targetText = "Hi I'm <br/> Dr. Quint. I will be your personal specialist to help ya' keep track of your medications!";



const FirstTimeUser = () => {
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        let index = 0;
    
        const typingInterval = setInterval(() => {
            setTypedText(targetText.slice(0, index));
            index++;
    
            if (index > targetText.length) {
                clearInterval(typingInterval);
    
                document.querySelector('.button-container').style.animation = 'flyInFromRight 1s ease-in forwards';
    
            }
    
        }, 80);
    
        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div>
        <div className="welcome-container">
            <div className="h1-container">
                <h1>Welcome to MediGuardian</h1>
            </div>
            <div className="para-container" dangerouslySetInnerHTML={{ __html: typedText }}></div>
        </div>
 
        <div className="image-button-container">
            <img src={MrDoctor} alt="Doctor image" />
            <div className="button-container">
                <Link className="first-link" to="/">Guest</Link>
                <Link className="second-link" to="/Login">Sign up</Link>
            </div>
        </div>


    </div>
    );
}

export default FirstTimeUser;