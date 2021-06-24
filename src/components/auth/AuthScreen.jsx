import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const AuthScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authResponse, setAuthResponse] = useState('');

    const handleSubmit = () => {
        setAuthResponse(username + " - " + password);
    };

    return (
        <Container fluid className="h-100">
            <Row className="h-100 justify-content-center align-content-center">
                <Col className="w-25">&nbsp;</Col>
                <Col className="w-50 text-center">
                    <h1 style={{paddingBottom: "25%"}}>Auth</h1>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            className="mt-5"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                        {
                            authResponse
                                ?
                                <h6 className="mt-5">{authResponse}</h6>
                                :
                                <p className="mt-5 fst-italic">Your response will be displayed here</p>
                        }
                    </Form>
                </Col>
                <Col className="w-25">&nbsp;</Col>
            </Row>
        </Container>
    )
}

export default AuthScreen;
