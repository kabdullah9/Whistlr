import React, { Component } from 'react';
import API from '../../utils/API'
import { Navbar, Header, Brand, Toggle, Collapse, Form, FormGroup, Button, FormControl, Nav, NavItem, Jumbotron, Carousel, Item, Caption, Row, Col, Panel, Grid, NavDropdown, MenuItem, DropdownButton, ButtonToolbar, Image, Thumbnail } from 'react-bootstrap';
import './About.css';

import elk from './images/elk.jpg';
import cat from './images/cat.jpg';
import eagle from './images/eagle.jpg';
import orca from './images/orca.jpg';

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
      <Thumbnail src={ elk } className="spiritAnimal" alt="242x200">
        <h3>Elk</h3>
        <p>Description</p>
        <p>
          About development team here.
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail src={ orca } className="spiritAnimal" alt="242x200">
        <h3>Orca</h3>
        <p>The Killer Whale</p>
        <p>
          The most lethal predator of the Deep Blue, the Killer Whale is relentless in it's search for food and in the conquest of providing for and maintaining the family unit. Like the Killer Whale, Whistlr is vigilant in feeding its appetite for social justice.
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail src={ eagle } className="spiritAnimal" alt="242x200">
        <h3>Cat</h3>
        <p>El Gato Loco</p>
        <p>
          The feline is the playful, curious, and harmless animal that runs through your house and claims ownership of alleys throughout the world. The beach is just one large toilet for this animal, which is how we consider security encryption throughout the Internet. 
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail src={ cat } className="spiritAnimal" alt="242x200">
        <h3>Cat</h3>
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