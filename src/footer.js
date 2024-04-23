import { Col, Container, Row, Stack } from "react-bootstrap";

function Foot(){
    return(
        <footer>
            <Container fluid>
                <Row className="bg-primary p-4">
                    <Col className="mx-5">
                        <Stack>
                            <h1>Softech Infoways</h1>
                            <h3>Directed by Gagan Goyal</h3>
                        </Stack>
                    </Col>
                    <Col>
                        <nav className="flex-column fs-5">
                            Usefull Links
                        </nav>
                    </Col>
                    <Col>
                    <h3>Contact us</h3>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Foot;