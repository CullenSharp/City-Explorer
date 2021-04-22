import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
// import CardColumns from 'react-bootstrap/CardColumns'

export default class Movies extends React.Component {
    render() {
        return(
            <CardColumns>
                {
                    this.props.movies.map((movie, index) =>
                        <Card key={index}>
                            <Card.Img src={movie.img_url} alt={movie.title}/>
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>{movie.overview}</Card.Text>
                                <Card.Text>Release date: {movie.released_on}</Card.Text>
                                <Card.Text>Average votes: {movie.average_votes}</Card.Text>
                                <Card.Text>Total votes: {movie.total_votes}</Card.Text>
                                <Card.Text>Popularity: {movie.popularity}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                }
            </CardColumns>
        );
    }
}