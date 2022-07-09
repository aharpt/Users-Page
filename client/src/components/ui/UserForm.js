import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const UserForm = ({handleSave, submitButtonText}) => {

    return (
      <Form onSubmit={handleSave}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control required={true} type="text" placeholder="First Name..." />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control required={true} type="text" placeholder="Last Name..." />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control required={true} type="email" placeholder="Email..." />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control required={true} type="text" placeholder="Phone number..." />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control required={true} type="text" placeholder="Address..." />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="dob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control required={true} pattern={"[0-9]([0-9]?)[/][0-9]([0-9]?)[/][1-2][0-9][0-9][0-9]"} type="text" placeholder="DOB..." />
          <Form.Text className="text-muted">Required format: '01/21/2000'</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">{submitButtonText}</Button>
      </Form>
    )
  }

  UserForm.propTypes = {
    handleSave: PropTypes.func,
    submitButtonText: PropTypes.string,
  }

export default UserForm;