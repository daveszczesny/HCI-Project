import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import './Dashboard.css';
import NurseImage from '../../Resources/Images/nurse.png';
import GetCurrentUserEmail from "../../script/auth_state_listener";
import GetDocViaEmail from "../../script/firestore_doc_viaemail";

const Dashboard = () => {
    const [authenticated, setauthenticated] = useState(null);

    const [isUserNew, setUserNew] = useState(true);
    const navigate = useNavigate();

    

    let targetText = "Hi I'm Nurse Kelly. I see that we don't have your medications on record. How about we add them now?"

    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }

       
        GetCurrentUserEmail().then(async(user) => {
            const docSnap = await GetDocViaEmail(user.email);

            if(docSnap.exists()){
                setUserNew(false);
            }else{
                setUserNew(true);
            }

        })


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


    if (!authenticated) {
        <Navigate replace to="/Login" />
    }


    const AddMedication = () => {
        console.log("sending to add medications");
        return navigate('/add-medications');
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
            <p>This part is not done yet. This means that you should have already entered some of your medications</p>
        )
    }

    

}


export default Dashboard;