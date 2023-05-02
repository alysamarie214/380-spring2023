import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PageUpload from './PageUpload';

function MyForm() {
  return (
    <div id = "login">
      <p class = "login-titles" id ="title-login">LOGIN LOGIN LOGIN</p>
      <p class = "login-titles" id = "title-join">JOIN TODAY</p>
      <div id ="form-wrapper">
        <Form id = "form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>USERNAME</Form.Label>
            <Form.Control type="email" placeholder="EMAIL" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>PASSWORD</Form.Label>
            <Form.Control type="password" placeholder="PASSWORD" />
          </Form.Group>
          <Button href="/pageupload" id= "login-btn" variant="primary" type="submit">
            LOGIN
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default MyForm;