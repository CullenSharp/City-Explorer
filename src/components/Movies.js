import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Movie from './Movie';

export default class Movies extends React.Component {
  render() {
    return(
      <CardColumns>
        {
          this.props.movies.map((movie, idx) =>
            <Movie movie={movie} key={idx}/>
          )
        }
      </CardColumns>
    );
  }
}
