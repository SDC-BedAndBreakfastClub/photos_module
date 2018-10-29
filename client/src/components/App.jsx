import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    }
  }

  componentDidMount() {
    axios.get('/api/rooms/100/images')
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .then((data) => {
        this.setState({
          photos: data,
        });
      })
      .catch(e => console.error(e));
  }

  render() {
    const { photos } = this.state;
    return (
      <div>
        Photo Module
      </div>
    );
  }
}

export default App;
