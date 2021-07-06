// import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


class UpdateForm extends React.Component {
    render() {
        return (

            <>

                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.UpdateData}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>drink name</Form.Label>
                                <Form.Control type="text" placeholder="drink name" defaultValue={this.props.name} />

                            </Form.Group>

                            <Button variant="primary" type='submit'>
                                Save
                            </Button>
                        </Form>
                    </Modal.Body>

                </Modal>
            </>
        )
    }
}

export default UpdateForm;