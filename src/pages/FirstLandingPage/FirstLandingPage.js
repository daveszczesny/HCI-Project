import { Link } from "react-router-dom";
import VisitedCookie from "../../components/VisitedCookie.js";
import MrDoctor from "../../Resources/Images/MrDoctor.png";
import FirstTimeUser from "../../components/FirstTimeUser.js";
import './FirstLandingPage.css';

const FirstLandingPage = () => {

    const hasVisited = VisitedCookie();

    return (

        <div>
            {hasVisited ? (
                <p>Welcome back!</p>
            ) : (
                <FirstTimeUser />
            )}
        </div>

    );

};


export default FirstLandingPage;