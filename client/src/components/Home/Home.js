import React, { Component } from 'react';
import withAuth from '../withAuth';
import API from '../../utils/API';
//import Footer from "./Footer";
import { Navbar, Header, Brand, Toggle, Collapse, Form, FormGroup, Button, FormControl, Nav, NavItem, Jumbotron, Carousel, Item, Caption, Row, Col, Panel, Grid } from 'react-bootstrap';
// import Favicon from 'react-favicon';
import { Link } from 'react-router-dom';

// create navigation to login and signup
//
import './Home.css';
import silenced from './images/silenced.jpg';
import security from './images/high_security.jpeg';
import guard from './images/guard.jpeg';
import server from './images/server.jpeg';
import brandLogo from "./images/brandLogo.png"


class Home extends Component {
    render() {
        return (
            <div className="home">
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
                                Login
                            </NavItem>
                            <NavItem eventKey={2} href="/signup">
                                Signup
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Jumbotron>
                    <Grid>
                        <Row className="titleDiv">
                            <Col xs={12}>
                                <h1>Welcome to Whistlr!</h1>
                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>
                <Carousel>
                    <Carousel.Item>
                        <img className="caroImage" alt="900x500" src={silenced} />
                        <Carousel.Caption>
                            <h3>Take off the red tape!</h3>
                            <p>Billions of people are silenced everyday by the figurative red tape that is whistleblower harassment in our society.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="caroImage" alt="900x500" src={security} />
                        <Carousel.Caption>
                            <h3>Security is our #1 Priority!</h3>
                            <p>Your information is never recorded and info-seekers are kept out.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="caroImage" alt="900x500" src={server} />
                        <Carousel.Caption>
                            <h3>Your information is secure!</h3>
                            <p>We use the most cutting edge encryption available on the Internet today.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h1">About our Page</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>Whistlr executes several key functions different than anyone else online. We protect your data. Our service is designed to empower witnesses with safety and anonymity. </Panel.Body>
                    <p className="learnBtn">
                            <Button  bsStyle="primary" href="/about" >Learn more</Button>
                        </p>
                        {/* <Footer /> */}
                </Panel>
                {/* <Favicon url="https://github.com/kabdullah9/Whistlr/blob/master/client/public/skull.png" /> */}
            </div>

        )
    }
}



export default Home;
