import React from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import Weather from './Weather';

export default class MapAndWeatherCard extends React.Component {
  render() {
    return(
      <Card style={{ minWidth: "18rem" }}>
        <Card.Img variant="top" src={this.props.img_url} alt="Map" />
        <Card.Body>
          <Card.Title>{this.props.display_name}</Card.Title>
          <Card.Text>
            lat: {this.props.lat} lon: {this.props.lon}
            <br></br>
          </Card.Text>
          <ListGroup> 
            <Weather forcasts={this.props.forcasts}/>
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}
