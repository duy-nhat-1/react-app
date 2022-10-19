import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Login = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const stylebuton = {
        fontSize: 24,
        background: 'none',
        border: 1,
        borderStyle: 'solid',
        borderColor: '#00b6c3',
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow} style= {stylebuton}>
                Login
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control type='password'
                            placeholder='yourpassword'
                            autoFocus/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='justify-content-center'>
                    <Button variant="primary" onClick={handleClose}>
                       Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Login