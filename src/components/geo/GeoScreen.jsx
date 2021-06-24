import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const GeoScreen = () => {

    const [country1, setCountry1] = useState('');
    const [country2, setCountry2] = useState('');
    const [province, setProvince] = useState('');
    const [ip, setIp] = useState('');
    const [geoResponse, setGeoResponse] = useState('');

    const handleGetAllCountriesSubmit = () => {
        setGeoResponse('');
    };

    const handleGetProvincesSubmit = () => {
        setGeoResponse(country1);
    };

    const handleGetCitiesSubmit = () => {
        setGeoResponse(country2 + " - " + province);
    };

    const handleGetIpLocationSubmit = () => {
        setGeoResponse(ip);
    };

    return (
        <Container fluid className="h-100">
            <Row className="h-100 justify-content-center align-content-center">
                <Col className="w-50">
                    <h1 style={{paddingBottom: "5%"}}>Geo</h1>
                    <div className="mb-3">
                        <span>Get All Countries List</span>
                        <br/>
                        <Button
                            variant="primary"
                            className="mt-1"
                            onClick={handleGetAllCountriesSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                    <hr/>
                    <Form>
                        <Form.Group>
                            <Form.Label>Get Provinces List of Given Country</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Country"
                                value={country1}
                                onChange={e => setCountry1(e.target.value)}
                            />
                            <Button
                                variant="primary"
                                className="mt-1"
                                onClick={handleGetProvincesSubmit}
                            >
                                Submit
                            </Button>
                        </Form.Group>
                        <hr/>
                        <Form.Group>
                            <Form.Label>Get Cities List of Given Province and Country</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Country"
                                value={country2}
                                onChange={e => setCountry2(e.target.value)}
                            />
                            <Form.Control
                                type="text"
                                placeholder="Province"
                                className="mt-1"
                                value={province}
                                onChange={e => setProvince(e.target.value)}
                            />
                            <Button
                                variant="primary"
                                className="mt-1"
                                onClick={handleGetCitiesSubmit}
                            >
                                Submit
                            </Button>
                        </Form.Group>
                        <hr/>
                        <Form.Group>
                            <Form.Label>Get IP Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="IP"
                                value={ip}
                                onChange={e => setIp(e.target.value)}
                            />
                            <Button
                                variant="primary"
                                className="mt-1"
                                onClick={handleGetIpLocationSubmit}
                            >
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col className="w-50 text-center">
                    {
                        geoResponse
                            ?
                            <span className="mt-3">{geoResponse}</span>
                            :
                            <p className="mt-3 fst-italic">Your response will be displayed here</p>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default GeoScreen;
