import React, { Component } from 'react';
import { Navbar, Button, Nav, NavItem, Jumbotron, Carousel, Row, Col, Panel, Grid } from 'react-bootstrap';
// import Favicon from 'react-favicon';
import { Link } from 'react-router-dom';

// create navigation to login and signup
//
import './Home.css';
import silenced from './images/silenced.jpg';
import security from './images/high_security.jpeg';
import time from './images/watch.jpg';
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
                            <Col xs={12} className="text-center">
                                <h1>whistlr</h1>
                                <p>Our service is designed to empower witnesses with safety and anonymity. </p>
                                <p className="learnBtn">
                                    <Button bsStyle="primary" href="/login" >Get Started</Button>
                                </p>
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
                        <h3>Your information is secure!</h3>
                            <p>We use the most cutting edge encryption available on the Internet today.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="caroImage" alt="900x500" src={time} />
                        <Carousel.Caption>
                            <h3>Real Time Alerts!</h3>
                            <p>Get all of our users reports as soon as they press submit</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Panel id="aboutPanel">
                                    <Panel.Body>
                                        <h2>The Story</h2>
                                         <p className="aboutTxt">The Whistler App was originally created as a simple in-class application for a coding bootcamp. However this application was turned into something that exceeded everyones expectations. With over 500,000,000 users world-wide, Whistler helps keep users all over the world stay aware of what is going on in their local communitities. Our application features real time whistle updates that will allert users of the most resent incidents.</p> </Panel.Body>
                                         <Panel.Footer className="text-center">&copy; Whistlr 2018</Panel.Footer>
                                </Panel>
                {/* <Favicon url="https://github.com/kabdullah9/Whistlr/blob/master/client/public/skull.png" /> */}
            </div>

        )
    }
}



export default Home;
