import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function PageUpload() {
    return (
      <div id = "pageupload">
        <h1 className = "login-titles" id = "uploadhere">UPLOAD HERE</h1>
        <Form.Control type = "file" id = "uploadform">
        </Form.Control>
      </div>
    );
  }
  
  export default PageUpload;