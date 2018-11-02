import React, { Component } from 'react';
import axios from 'axios';

import Photo from '../Photo/Photo';
import PhotoColumn from '../PhotoColumn/PhotoColumn';
import Layout from '../Layout/Layout';

import 'normalize.css';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      loading: true,
      isHeroHovered: false,
      currentHoveredPhoto: 0,
    };

    this.toggleHeroHovered = this.toggleHeroHovered.bind(this);
    this.updateCurrentHovered = this.updateCurrentHovered.bind(this);
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

  toggleHeroHovered(isHovered) {
    this.setState({
      isHeroHovered: isHovered,
    });
  }

  updateCurrentHovered(photoIndex) {
    this.setState({
      currentHoveredPhoto: photoIndex,
    });
  }

  render() {
    const {
      photos, loading, isHeroHovered, currentHoveredPhoto,
    } = this.state;
    return loading
      ? <div>Loading!</div>
      : (
        <div
          className={styles.App}
          onMouseEnter={() => this.toggleHeroHovered(true)}
          onMouseLeave={() => this.toggleHeroHovered(false)}
        >
          <Layout />
          <Photo
            isFirstPhoto
            isHeroHovered={isHeroHovered}
            currentHoveredPhoto={currentHoveredPhoto}
            updateCurrentHandler={this.updateCurrentHovered}
            imageUrl={photos[0].image_url}
            altText={photos[0].alt_text}
            photoIndex={0}
          />
          <PhotoColumn
            columnType="second_column"
            isHeroHovered={isHeroHovered}
            currentHoveredPhoto={currentHoveredPhoto}
            updateCurrentHandler={this.updateCurrentHovered}
            photos={photos}
          />
          <PhotoColumn
            columnType="third_column"
            isHeroHovered={isHeroHovered}
            currentHoveredPhoto={currentHoveredPhoto}
            updateCurrentHandler={this.updateCurrentHovered}
            photos={photos}
          />
        </div>
      );
  }
}

export default App;
