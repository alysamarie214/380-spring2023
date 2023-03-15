import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import profpic from './profpic.jpg';

const Bio2 = () => {
  return (        
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://icatcare.org/app/uploads/2018/07/Helping-your-new-cat-or-kitten-settle-in-1.png" />
    <Card.Body>
        <Card.Title>Cat</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
  );
}

export default Bio2;
