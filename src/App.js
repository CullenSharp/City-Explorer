import React from "react";
import { Container, Form, Button, Card, Navbar, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { faAngry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Weather from "./components/Weather.js";
import Movie from "./components/Movie.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      location: {},
      weather: [],
      movies: [],
      error: {},
      isError: false,
    };
  }

  getLocation = async (e) => {
    try {
      e.preventDefault();

      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
      const resp = await axios.get(API);

      const weatherUrl = `https://city-exporer-api.herokuapp.com/weather/?lat=${resp.data[0].lat}&lon=${resp.data[0].lon}`;
      const weatherResp = await axios.get(weatherUrl);

      const moviesUrl =`https://city-exporer-api.herokuapp.com/movies/?city_name=${this.state.searchQuery}`;
      const moviesResp = await axios.get(moviesUrl);

      this.setState({
        location: resp.data[0],
        weather: weatherResp.data,
        movies: moviesResp.data,
        isError: false,
      });
    } catch (error) {
      this.setState({
        error,
        isError: true,
      });
    }
  };

  render() {
    const img_url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&size=${window.innerWidth}x300&format=jpg&zoom=12`;

    return (
      <Container fluid>
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
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
            <Button
              variant="outline-success"
              type="submit"
              onClick={this.getLocation}
            >
              Explore
            </Button>
          </Form>
        </Navbar>
        {this.state.isError === true && (
          <Card style={{ minWidth: "18rem" }}>
            <Card.Img
              variant="top"
              src={`https://www.placecage.com/gif/${window.innerWidth}/300`}
              alt="Error cage"
            />
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon
                  icon={faAngry}
                  style={{ color: "red" }}
                  className="mr-sm-2"
                />
                Ooops, we're having trouble with your request
              </Card.Title>
              <Card.Text>{this.state.error.message}</Card.Text>
            </Card.Body>
          </Card>
        )}
        {this.state.location.place_id && this.state.isError === false && (
          <Card style={{ minWidth: "18rem" }}>
            <Card.Img variant="top" src={img_url} alt="Map" />
            <Card.Body>
              <Card.Title>{this.state.location.display_name}</Card.Title>
              <Card.Text>
                lat: {this.state.location.lat} lon: {this.state.location.lon}
                <br></br>
              </Card.Text>
              <ListGroup> 
                  <Weather weather={this.state.weather}/>
              </ListGroup>
            </Card.Body>
          </Card>
        )}
        {this.state.movies[0] && this.state.isError === false && (
          <>
            <Navbar 
              bg="light"
              expand="lg"
            >
              <h2>Movies realted to your search</h2>
            </Navbar>
            <Movie movies={this.state.movies}/>
          </>
        )}
      </Container>
    );
  }
}

export default App;
