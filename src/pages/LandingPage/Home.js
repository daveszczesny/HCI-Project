import { Link } from 'react-router-dom'; 

function Home() {
    return (
        <>
            <p>Hello there</p>
            <Link to="About">About</Link> 
        </>
    );
}

export default Home;