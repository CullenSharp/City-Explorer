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
    this.setState({ location: resp.data[0] });
  };

  render() {
    const img_url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&size=${window.innerWidth}x300&format=jpg&zoom=12`;
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
        
        {this.state.location.place_id && (
          <>
            <img src={img_url} alt="Map" />
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
