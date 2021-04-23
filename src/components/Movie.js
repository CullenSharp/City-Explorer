import React from 'react';
import Card from 'react-bootstrap/Card';

export default class Movie extends React.Component {
  render() {
    return (
      <Card key={this.props.idx}>
        <Card.Img src={this.props.movie.img_url} alt={this.props.movie.title}/>
        <Card.Body>
          <Card.Title>{this.props.movie.title}</Card.Title>
          <Card.Text>{this.props.movie.overview}</Card.Text>
          <Card.Text>Release date: {this.props.movie.released_on}</Card.Text>
          <Card.Text>Average votes: {this.props.movie.average_votes}</Card.Text>
          <Card.Text>Total votes: {this.props.movie.total_votes}</Card.Text>
          <Card.Text>Popularity: {this.props.movie.popularity}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
