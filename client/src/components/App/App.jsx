import React, { Component } from 'react';
import axios from 'axios';
import Photo from '../Photo/Photo';
import PhotoColumn from '../PhotoColumn/PhotoColumn';
import 'normalize.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios.get('/api/rooms/100/images')
      .then(response => response.data)
      .then((data) => {
        this.setState({
          photos: data,
          loading: false,
        });
      })
      // eslint-disable-next-line no-console
      .catch(e => console.error(e));
  }

  render() {
    const { photos, loading } = this.state;
    const jsx = loading
      ? <div>Loading!</div>
      : (
        <div>
          <Photo
            imageUrl={photos[0].image_url}
            altText={photos[0].alt_text}
            photoIndex={0}
          />
          <PhotoColumn
            columnType="second_column"
            photos={photos}
          />
          <PhotoColumn
            columnType="third_column"
            photos={photos}
          />
        </div>
      );
    return (jsx);
  }
}

export default App;
