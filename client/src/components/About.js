import React, { Component } from 'react';
import API from '../utils/API'
import { Navbar, Header, Brand, Toggle, Collapse, Form, FormGroup, Button, FormControl, Nav, NavItem, Jumbotron, Carousel, Item, Caption, Row, Col, Panel, Grid, NavDropdown, MenuItem, DropdownButton, ButtonToolbar, Image, Thumbnail } from 'react-bootstrap';
import './About.css';

class About extends Component{
render() {
    return(
        <div>
        <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/">Whistle</a>
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
    <ButtonToolbar>
    <DropdownButton title="Default button" id="dropdown-size-medium">
      <MenuItem href="/profile/:id" eventKey="1">Profile</MenuItem>
      <MenuItem href="/post" eventKey="2">Whistle</MenuItem>
      <MenuItem eventKey="3">TBD</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">TBD</MenuItem>
    </DropdownButton>
  </ButtonToolbar>
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
                    <h1>About Whistlr!</h1>
                </Col>
            </Row>
        </Grid>
    </Jumbotron>
    <Panel>
    <Panel.Heading>
      <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
    </Panel.Heading>
    <Panel.Body>Panel content
    <Grid>
  <Row>
    <Col xs={6} md={3}>
      <Thumbnail src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-R3Aazj9u_SRSz1qA311hcXX4oKGPPWL9k5H7-cqFCuSebumu" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          About development team here.
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRB1FEJAbIqg-_2Jxn8JQ-L5CEbJqSREpj7Kv9gx7-gNGQBSYu" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          About development team here.
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrohXuA9ZEus6AtVED9UEoeHXWLm4H7gA1LSFxmzsAIO6nugolw" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          About development team here.
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKcfVtSeGDqFKNQTXlyw8JwblldE3GrOBevcjnAHWQrjAHkHT6w" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          About development team here.
        </p>
      </Thumbnail>
    </Col>
  </Row>
</Grid>
    </Panel.Body>
    <Panel.Footer>Panel footer</Panel.Footer>
  </Panel>
    </div>
    )
}

}

export default About;