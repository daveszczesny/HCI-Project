import { Link } from 'react-router-dom'; 
import './Home.css'
// import thumbsUpBtn from '../../img/ThumbsUpBtn.png';

function Home() {
    return (
        <>
        {/* Div for the header */}
        <div className='header'>
            <h1>MediGuardian</h1>
        </div>

        {/* Div to welcome the user to the landing page */}
        <div className='welcomeUser'>
            <h3>
                Hello user
            </h3>
        </div>

        {/* Div to let the user input if they have taken their meds today */}
        <div className='haveTheyTakenMedsDiv'>
            <div className='takenMedsPrompt'>
                Have you taken your Meds Today?
            </div>
            <div className='takenMedsButtons'>
                <button>Yes</button>
                <button>No</button>
            </div>
        </div>

        {/* Div for the Stats */}
        <div className='StatsDiv'>
            <div className='StatsTitle'>
                Your Progress So Far
            </div>
            <div className='StatsGraphDiv'>
                Graph is inserted here 
            </div>
        </div>



            <Link to="About">About</Link>
         
        </>
    );
}

export default Home;