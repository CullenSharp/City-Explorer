import React from 'react';
import { Container, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import MapAndWeatherCard from './components/MapAndWeatherCard';
import Movies from './components/Movies';
import ErrorCard from './components/ErrorCard';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ',
      location: {},
      forcasts: [],
      movies: [],
      error: {},
      isError: false,
    };
  }

  getLocationData = async (e) => {
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
        forcasts: weatherResp.data,
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

  queryHandler = (e) => this.setState({ searchQuery: e.target.value });

  render() {
    const img_url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&size=${window.innerWidth}x300&format=jpg&zoom=12`;

    return (
      <Container fluid>
        <SearchBar clickHandler={this.getLocationData} queryHandler={this.queryHandler}/>
        {this.state.isError === true && (
          <ErrorCard error={this.state.error}/>
        )}
        {this.state.location.place_id && this.state.isError === false && (
          <MapAndWeatherCard
            img_url={img_url}
            display_name={this.state.location.display_name}
            lat={this.state.location.lat}
            lon={this.state.location.lon}
            forcasts={this.state.forcasts}
          />
        )}
        {this.state.movies[0] && this.state.isError === false && (
          <>
            <Navbar
              bg='light'
              expand='lg'
            >
              <h2>Movies realted to your search</h2>
            </Navbar>
            <Movies movies={this.state.movies}/>
          </>
        )}
      </Container>
    );
  }
}

export default App;

