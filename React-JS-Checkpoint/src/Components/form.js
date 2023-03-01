import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className = "kntrlnamemain">Full Name</Form.Label>
        <Form.Control className = "kntrlname" type="text" placeholder="Enter your first name" />
        <Form.Control className = "kntrlname" type="text" placeholder="Enter your last name" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className = "kntrl" type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rooom Type</Form.Label>
        {/* <Form.Control className = "kntrl" type="email" placeholder="Please Select" /> */}
        <select id="RoomType" name="Room" form="roomform">
            {/* <option value="select">Please Select</option> */}
            <option value="standard">Standard Room (1-2 People)</option>
            <option value="family">Family Room (1-4 People)</option>
            <option value="private">Private Room (1-3 People)</option>
            <option value="dorm">Dorm Room (6 People)</option>
        </select>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Number of Guests</Form.Label>
        <Form.Control className = "kntrl" type="select" placeholder="0" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Special Requests</Form.Label>
        <Form.Control className = "kntrl" type="email" placeholder="Any additional needs?" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
    <div className = "button">
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
    </Form>
  );
}

export default BasicForm;