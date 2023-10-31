import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import './Dashboard.css';
import NurseImage from '../../Resources/Images/nurse.png';
import GetCurrentUserEmail from "../../script/auth_state_listener";
import GetDocViaEmail from "../../script/firestore_doc_viaemail";
import Home from "../LandingPage/Home";

const Dashboard = () => {
    const [authenticated, setauthenticated] = useState(null);
    const [isUserNew, setUserNew] = useState(true);
    const navigate = useNavigate();
    
    const [userEmail, setUserEmail] = useState(null);
    const [typedText, setTypedText] = useState('');

    let targetText = "Hi I'm Nurse Kelly. I see that we don't have your medications on record. How about we add them now?"


    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        const loggedInUserEmail = localStorage.getItem("userEmail");


        if (loggedInUser && loggedInUserEmail != null) {
            setauthenticated(loggedInUser);
            setUserEmail(loggedInUserEmail);

        }else{
            console.log("user not found");
        }


    }, []);
   
    useEffect(() => {
        let index = 0;

        const typingInterval = setInterval(() => {
            setTypedText(targetText.slice(0, index));
            index++;

            if (index > targetText.length) {
                clearInterval(typingInterval);
            }
        }, 40);

        return () => clearInterval(typingInterval);
    }, []);


    const AddMedication = () => {
        return navigate('/add-medications?name');
    }

    if(isUserNew)
    {
        return (
            <>
                <div className="nurse-phrase-container" dangerouslySetInnerHTML={{ __html: typedText }}></div>
                <img className="nurse-image" src={NurseImage} />
    
                <button className="add-meds" onClick={AddMedication} >+</button>
            </>
        )
    }else{

        return (
            <Home />
        )
    }

    

}


export default Dashboard;