import React, { Component } from 'react';
import withAuth from './withAuth';
import API from '../utils/API';
import { Navbar, Header, Brand, Toggle, Collapse, Form, FormGroup, Button, FormControl, Nav, NavItem, Jumbotron, Carousel, Item, Caption, Row, Col, Panel, Grid } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// create navigation to login and signup
//
import './Home.css';

class Home extends Component {
    render() {

        return (
            <div className="home">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Whistlr</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" />
                            </FormGroup>{' '}
                            <Button type="submit">Submit</Button>
                        </Navbar.Form>
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
                <Jumbotron>
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12}>
                                <h1>Welcome to Whistlr!</h1>
                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>
                <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="https://files.slack.com/files-pri/T96BXT5RT-FANDHQM8T/image.png" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="https://files.slack.com/files-pri/T96BXT5RT-FANDFANP5/image.png" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="https://files.slack.com/files-pri/T96BXT5RT-FAR4Z03V0/image.png" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h1">About our Page</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Panel.Body>
                    <p className="learnBtn">
                            <Button  bsStyle="primary" href="/about" >Learn more</Button>
                        </p>
                        <Panel.Footer>Panel footer</Panel.Footer>
                </Panel>
            </div>

        )
    }
}



export default Home;