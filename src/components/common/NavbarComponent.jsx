import React, {Component} from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

class NavbarComponent extends Component {

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <div className="ps-2 pe-1">
                            <Nav.Link>
                                <Link to="/auth" style={{textDecoration: 'none'}}>
                                    Auth
                                </Link>
                            </Nav.Link>
                        </div>
                        <div className="px-1">
                            <Nav.Link>
                                <Link to="/geo" style={{textDecoration: 'none'}}>
                                    Geo
                                </Link>
                            </Nav.Link>
                        </div>
                        <div className="ps-1">
                            <Nav.Link>
                                <Link to="/products" style={{textDecoration: 'none'}}>
                                    Products
                                </Link>
                            </Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavbarComponent;
