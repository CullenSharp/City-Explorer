import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      location: {},
      url: "",
    };
  }

  getLocation = async (e) => {
    e.preventDefault();

    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
    const resp = await axios.get(API);
    console.log(resp.data[0]);
    // const url = 
    this.setState({ location: resp.data[0] });
  };

  render() {
    return (
      <Container flex>
        <Form>
          <Form.Group>
            <Form.Label>enter a city name to explore</Form.Label>
            <Form.Control
              type="text"
              placeholder="City Name"
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.getLocation}>
            Explore
          </Button>
        </Form>
        <img src="https://www.placecage.com/gif/200/300" alt="Placecage" />
        {this.state.location.place_id && (
          <>
            <h2>The city is: {this.state.location.display_name}</h2>
            <h2>lat: {this.state.location.lat}</h2>
            <h2>lon: {this.state.location.lon}</h2>
          </>
        )}
      </Container>
    );
  }
}

export default App;
