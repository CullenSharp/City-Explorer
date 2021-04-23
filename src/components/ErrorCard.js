import React from 'react';
import Card from 'react-bootstrap/Card';
import { faAngry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ErrorCard extends React.Component {
  render() {
    return(
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
          <Card.Text>{this.props.error.message}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
