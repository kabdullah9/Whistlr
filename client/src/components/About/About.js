import React, { Component } from 'react';
import API from '../../utils/API'
import { Navbar, Header, Brand, Toggle, Collapse, Form, FormGroup, Button, FormControl, Nav, NavItem, Jumbotron, Carousel, Item, Caption, Row, Col, Panel, Grid, NavDropdown, MenuItem, DropdownButton, ButtonToolbar, Image, Thumbnail } from 'react-bootstrap';
import './About.css';
import { Link } from 'react-router-dom';

import elk from './images/elk.jpg';
import lynx from './images/lynx.jpg';
import eagle from './images/eagle.jpg';
import orca from './images/orca.jpg';
import brandLogo from "./../Home/images/brandLogo.png"

class About extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/"><img alt="logo" src={brandLogo} id="brandlogo" /></Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="/login">
                                login
                </NavItem>
                            <NavItem eventKey={2} href="/signup">
                                signup
                </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Panel id="mainPanel">
                    <Panel.Body>
                        <Grid>
                            <Row>
                                <Panel id="aboutPanel">
                                    <Panel.Body>
                                        <h2>The Story</h2>
                                         <p className="aboutTxt">The Whistler App was originally created as a simple in-class application for a coding bootcamp. However this application was turned into something that exceeded everyones expectations. With over 500,000,000 users world-wide, Whistler helps keep users all over the world stay aware of what is going on in their local communitities. Our application features real time whistle updates that will allert users of the most resent incidents.</p> </Panel.Body>
                                </Panel>
                            </Row>
                            <Row>
                                <h2>The Team</h2>
                            </Row>
                            <Row>
                                <Col xs={6} md={3}>
                                    <Thumbnail src={elk} className="spiritAnimal" alt="242x200">
                                        <h3>Elk</h3>
                                        <p>Great Grazer</p>
                                        <p>
                                            The most majestic animal of untamed North America.
        </p>
                                    </Thumbnail>
                                </Col>
                                <Col xs={6} md={3}>
                                    <Thumbnail src={orca} className="spiritAnimal" alt="242x200">
                                        <h3>Orca</h3>
                                        <p>The Killer Whale</p>
                                        <p>
                                            The most lethal predator of the Deep Blue, the Killer Whale is relentless in it's search for food and in the conquest of providing for and maintaining the family unit. Like the Killer Whale, Whistlr is vigilant in feeding its appetite for social justice.
        </p>
                                    </Thumbnail>
                                </Col>
                                <Col xs={6} md={3}>
                                    <Thumbnail src={lynx} className="spiritAnimal" alt="242x200">
                                        <h3>Lynx</h3>
                                        <p>El Gato Peligroso</p>
                                        <p>
                                            The feline is the playful, curious, yet harmless animal that runs through your house and claims ownership of alleys throughout the world. The beach is just one large toilet for this animal, which is how we consider security encryption throughout the Internet.
        </p>
                                    </Thumbnail>
                                </Col>
                                <Col xs={6} md={3}>
                                    <Thumbnail src={eagle} className="spiritAnimal" alt="242x200">
                                        <h3>Eagle</h3>
                                        <p>Description</p>
                                        <p>
                                            Something interesting about eagles.
        </p>
                                    </Thumbnail>
                                </Col>
                            </Row>
                        </Grid>
                    </Panel.Body>
                    <Panel.Footer className="text-center">&copy; Whistlr 2018</Panel.Footer>
                </Panel>
            </div>
        )
    }

}

export default About;