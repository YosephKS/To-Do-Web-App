import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Forms extends React.Component {
    constructor(prop) {
        super(prop);

        this.handleSubmit = this.handleSubmit.bind();
    }
    
    handleSubmit (event) {
    }

    render() {
    return (
    <Form>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Feedback, comments, or concerns" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick = {this.handleSubmit}>
            Submit
        </Button>
        </Form>
    
)}};

export default Forms;