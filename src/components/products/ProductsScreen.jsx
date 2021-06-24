import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const ProductsScreen = () => {

    const [productId, setProductId] = useState('');
    const [geoResponse, setGeoResponse] = useState('');

    const handleGetAllProductsSubmit = () => {
        setGeoResponse('');
    };

    const handleGetProductInfoSubmit = () => {
        setGeoResponse(productId);
    };

    return (
        <Container fluid className="h-100">
            <Row className="h-100 justify-content-center align-content-center">
                <Col className="w-50">
                    <h1 style={{marginTop: "-20%", marginBottom: "20%"}}>Products</h1>
                    <div className="my-5">
                        <span>Get All Products List</span>
                        <br/>
                        <Button
                            variant="primary"
                            className="mt-1"
                            onClick={handleGetAllProductsSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                    <hr/>
                    <Form className="mt-5">
                        <Form.Group>
                            <Form.Label>Get Product Info Given its ID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Product ID"
                                value={productId}
                                onChange={e => setProductId(e.target.value)}
                            />
                            <Button
                                variant="primary"
                                className="mt-1"
                                onClick={handleGetProductInfoSubmit}
                            >
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col className="w-50 text-center" style={{marginTop: "-9%"}}>
                    {geoResponse}
                </Col>
            </Row>
        </Container>
    )
}

export default ProductsScreen;
