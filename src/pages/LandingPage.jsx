import { Container, Button, Accordion } from "react-bootstrap";

export default function LandingPage() {
  return (
    <>
    <div>
      <img src="./landingpagepic.png" alt="boy watching lots of TVs" style={{ width: '100%', }}/>
      <div style={{ 
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translate(-50%, -10%)' }}
        className="d-flex flex-column align-items-center">
        <h2 className="shadow-lg text-center text-white" style={{
          textShadow: '1px 1px #000000',
        }}>Find out where you can stream your watchlist movies and TV shows</h2>
        <div>
          <Button variant="primary" href="/signup">Sign-up</Button>
        </div>
      </div>
    </div>
    <Container>
      <h2 className="my-5">FAQs</h2>
      <Accordion className="my-3" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What countries do you support?</Accordion.Header>
          <Accordion.Body>We currently only support the United Kingdom</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What streaming services can I track?</Accordion.Header>
          <Accordion.Body>Our platform allows you to put in which streaming services you subscribe to, and which movies and TV shows are on your watchlist. It then tells you if they are available / unavailable to watch. We currently support All4/Channel4, AppleTV+, Britbox, Curiosity Stream, Disney+, hotstar, BBC iPlayer, Mubi, Netflix, Paramount+, Prime Video, UKTV+ and YouTube. We only have limited support for NowTV, as this is a packaged based subsciption service.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Do you support AddOns which are available inside different streaming services?</Accordion.Header>
          <Accordion.Body>We have a limited feature-set for AddOns. Our core watchlist tracking functionality does not support AddOns, but if you search for a movie, add it to your watchlist and select 'View show details', you will be able to see all the possible places you can view, rent and buy a movie or TV show, and for what cost.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>When will you expand your service offering?</Accordion.Header>
          <Accordion.Body>StreamSearch management team are planning to roll out to several regions by spring 2024.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>What does StreamSearch cost?</Accordion.Header>
          <Accordion.Body>StreamSearch is currently free to use.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
    </>
  );
}
