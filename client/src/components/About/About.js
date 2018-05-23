import React, { Component } from 'react';
import API from '../../utils/API'
import { Navbar, Header, Brand, Toggle, Collapse, Form, FormGroup, Button, FormControl, Nav, NavItem, Jumbotron, Carousel, Item, Caption, Row, Col, Panel, Grid, NavDropdown, MenuItem, DropdownButton, ButtonToolbar, Image, Thumbnail } from 'react-bootstrap';
import './About.css';

import elk from './images/elk.jpg';
import lynx from './images/lynx.jpg';
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
      <Panel.Title componentClass="h3">About the Whistlr Team</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
    <Grid>
  <Row>
    <Col xs={6} md={3}>
      <Thumbnail src={ elk } className="spiritAnimal" alt="242x200">
        <h3>Elk</h3>
        <p>Great Grazer</p>
        <p>
          The most majestic animal of untamed North America.
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
      <Thumbnail src={ lynx } className="spiritAnimal" alt="242x200">
        <h3>Lynx</h3>
        <p>El Gato Peligroso</p>
        <p>
          Something interesting about eagles.
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail src={ eagle } className="spiritAnimal" alt="242x200">
        <h3>Eagle</h3>
        <p>Description</p>
        <p>
          The feline is the playful, curious, yet harmless animal that runs through your house and claims ownership of alleys throughout the world. The beach is just one large toilet for this animal, which is how we consider security encryption throughout the Internet. 
        </p>
      </Thumbnail>
    </Col>
  </Row>
</Grid>
<Panel bsStyle="primary">
    <Panel.Heading>
      <Panel.Title componentClass="h3">Everything you need to know about Whistlr</Panel.Title>
    </Panel.Heading>
    <Panel.Body> <p className="aboutTxt">The Whistler App was originally created as a simple in-class application for a coding bootcamp. However this application was turned into something that exceeded everyones expectations. With over 500,000,000 users world-wide, Whistler helps keep users all over the world stay aware of what is going on in their local communitities. Our application features real time whistle updates that will allert users of the most resent incidents.</p> </Panel.Body>
  </Panel>
    </Panel.Body>
    <Panel.Footer>Panel footer</Panel.Footer>
  </Panel>
    </div>
    )
}

}

export default About;