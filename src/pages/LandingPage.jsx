import NavLanding from "../components/NavBar"
import Button from 'react-bootstrap/Button';



export default function LandingPage() {
  return (
    <>
    <div>
      <img src="./streamsearch-bg-2.png" alt="boy watching lots of TVs" style={{ width: '100%', }}/>
      <div style={{ 
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translate(-50%, -50%)' }}
        className="d-flex flex-column align-items-center">
        <h2 className="shadow-lg text-center text-white">Find out where you can stream your watchlist movies and TV shows</h2>
        <div>
          <Button variant="primary" href="/signup">Sign-up</Button>
        </div>
      </div>
    </div>
    <h1>LandingPage</h1>
    </>
  );
}
