import VisitedCookie from "../../components/VisitedCookie.js";
import MrDoctor from "../../Resources/Images/MrDoctor.png";


import './FirstLandingPage.css';

const FirstLandingPage = () => {

    const hasVisited = VisitedCookie();

    return (

        <div>
            {hasVisited ? (
                <p>Welcome back!</p>
            ) : (
                <div>
                    <div className="welcome-container">
                        <div className="h1-container">
                            <h1>Welcome to MediGuardian</h1>
                        </div>
                        <div className="para-container">
                            <p>Your personal medical help buddy, to keep ya' on track</p>
                        </div>
                    </div>
                    <img src={MrDoctor} alt="Doctor image" />
                </div>
            )}
        </div>
    );

};


export default FirstLandingPage;