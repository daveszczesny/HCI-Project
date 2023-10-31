import { Link } from "react-router-dom";
import VisitedCookie from "../../components/VisitedCookie.js";
import MrDoctor from "../../Resources/Images/MrDoctor.png";
import FirstTimeUser from "../../components/FirstTimeUser.js";
import './FirstLandingPage.css';
import RevisitingUser from "../../components/RevisitingUser.js";
import { useState } from "react";
import { useEffect } from "react";
import GetCurrentUserEmail from "../../script/auth_state_listener.js";
import GetDocViaEmail from "../../script/firestore_doc_viaemail.js";
import Home from "../LandingPage/Home.js";

const FirstLandingPage = () => {

    const [authenticated, setauthenticated] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [isUserNew, setUserNew] = useState(true);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        const loggedInUserEmail = localStorage.getItem("userEmail");
        
        if (loggedInUser && loggedInUserEmail !== null) {
            setauthenticated(loggedInUser);
            setUserEmail(loggedInUserEmail);
        }


    }, []);

    if (!authenticated) {
        return (
            <FirstTimeUser />
        )
    } else {
        return (
            <Home />
        )
    }

};


export default FirstLandingPage;