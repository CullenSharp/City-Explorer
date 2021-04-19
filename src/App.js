import React from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      location: {},
    };
  }

  render() {
    return (
      <Container flex>
        hello, world
      </Container>
    );
  }
}

export default App;
