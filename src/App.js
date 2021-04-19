import React from "react";
import {Container, Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      location: {},
    };
  }

  getLocation = () => {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
  }

  render() {
    return (
      <Container flex>
        <Form>
          <Form.Group>
            <Form.Label>enter a city name to explore</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="City Name"
            onChange={(e) => this.setState({searchQuery:e.target.value})}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Explore
          </Button>
        </Form>
        <img src="https://www.placecage.com/gif/200/300"></img>
      </Container>
    );
  }
}

export default App;
