import React from 'react';
import {Navbar, Form, Button} from 'react-bootstrap';

export default class SearchBar extends React.Component {
  render() {
    return(
      <Navbar
        bg="light"
        expand="lg"
        className="justify-content-md-space-between-mr-sm-2"
      >
        <Navbar.Brand>City Explorer</Navbar.Brand>
        <Form inline>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="City Name"
              className="mr-sm-2"
              onChange={this.props.queryHandler}
            />
          </Form.Group>
          <Button
            variant="outline-success"
            type="submit"
            onClick={this.props.clickHandler}
          >
            Explore
          </Button>
        </Form>
      </Navbar>
    );
  }
}
