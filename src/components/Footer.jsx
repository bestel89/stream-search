import { Navbar, Container, Nav, Modal, Button } from "react-bootstrap"
import { useState } from "react"

export default function Footer() {
    const [showDisclaimer, setShowDisclaimer] = useState(false)
    const [showCredits, setShowCredits] = useState(false)

    const handleCloseDisclaimer = () => setShowDisclaimer(false)
    const handleShowDisclaimer = () => setShowDisclaimer(true)

    const handleCloseCredits = () => setShowCredits(false)
    const handleShowCredits = () => setShowCredits(true)

    return (
        <>
            <Navbar className="bottom bg-secondary">
                <Container className='d-flex justify-content-start align-items-center'>
                    <Nav.Link href="https://github.com/bestel89" className="text-light" target="_blank">Created by: bestel89</Nav.Link>
                    <Nav.Link onClick={handleShowDisclaimer} className="ms-3 text-light">Disclaimer</Nav.Link>
                    <Nav.Link onClick={handleShowCredits} className="ms-3 text-light">Credits</Nav.Link>
                </Container>
            </Navbar>
            <Modal show={showDisclaimer} onHide={handleCloseDisclaimer} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Disclaimer for using StreamSearch</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h4>Disclaimer for StreamSearch</h4>
                <p>
                    This disclaimer governs your use of the StreamSearch website. By accessing and using this website, you accept and agree to be bound by the terms and conditions of this disclaimer. If you do not agree with any part of this disclaimer, you must not use this website.
                </p>

                <h5>Use at Your Own Risk</h5>
                <p>
                    StreamSearch is a project developed for educational and portfolio purposes only. It is not intended to be a fully functional website and should not be relied upon for any purpose. All content and features provided on this website are for demonstration purposes only. Any actions taken based on the information provided on StreamSearch are at your own risk.
                </p>

                <h5>No Warranties or Representations</h5>
                <p>
                    The information, materials, and functionality provided on StreamSearch are provided "as is" and without warranties of any kind, either express or implied. We make no representations or warranties regarding the accuracy, completeness, reliability, or availability of the content and features on this website. We disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, or any warranties arising from course of dealing or usage of trade.
                </p>

                <h5>No Liability</h5>
                <p>
                    We shall not be liable for any damages, direct or indirect, consequential or incidental, arising out of or in connection with the use or inability to use StreamSearch. This includes, but is not limited to, any errors or omissions in the content, loss of data, or any other loss or damage suffered as a result of your use or reliance on the information and features provided on this website.
                </p>

                <h5>Third-Party Links</h5>
                <p>
                    StreamSearch may contain links to third-party websites or resources. These links are provided for your convenience only, and we do not endorse or assume any responsibility for the content or practices of these websites. Your use of third-party websites is entirely at your own risk, and you should review the terms and conditions and privacy policies of these websites before using them.
                </p>

                <h5>Governing Law</h5>
                <p>
                    This disclaimer shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising from or in connection with this disclaimer, including non-contractual disputes or claims, shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>

                <p>By using StreamSearch, you acknowledge that you have read, understood, and agreed to the terms and conditions of this disclaimer.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDisclaimer}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showCredits} onHide={handleCloseCredits} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Credits</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column">
                        <a href="https://www.midjourney.com/app/" target="_blank" rel="noreferrer">AI art generated by Midjourney</a>
                        <a href="https://www.flaticon.com/free-icons/phone" title="phone icons">Phone icons created by Dave Gandy - Flaticon</a>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCredits}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}