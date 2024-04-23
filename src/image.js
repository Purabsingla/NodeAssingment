import './chk.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import image from './Imagetest.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Img() {
  return (
    <Container fluid>
      <Row>
        <Col className='text-center'>
          <Image rounded fluid src={image} alt='me' width="30%"/>
        </Col>
      </Row>
    </Container>
  );
}

export default Img;

export function Crd(){
    return(
        <div >
            <Card  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        </div>
    )
}