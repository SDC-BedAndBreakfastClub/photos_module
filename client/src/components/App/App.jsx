import React, { Component } from 'react';
import axios from 'axios';

import Photo from '../Photo/Photo';
import PhotoColumn from '../PhotoColumn/PhotoColumn';
import Layout from '../Layout/Layout';
import Modal from '../Modal/Modal';

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
      showModal: false,
    };

    this.toggleHeroHovered = this.toggleHeroHovered.bind(this);
    this.updateCurrentHovered = this.updateCurrentHovered.bind(this);
    this.showModalHandler = this.showModalHandler.bind(this);
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

  showModalHandler(showModal) {
    this.setState({
      showModal,
    });
  }

  render() {
    const {
      photos, loading, isHeroHovered, currentHoveredPhoto, showModal,
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
            showModalHandler={this.showModalHandler}
          />
          <PhotoColumn
            columnType="second_column"
            isHeroHovered={isHeroHovered}
            currentHoveredPhoto={currentHoveredPhoto}
            updateCurrentHandler={this.updateCurrentHovered}
            photos={photos}
            showModalHandler={this.showModalHandler}
          />
          <PhotoColumn
            columnType="third_column"
            isHeroHovered={isHeroHovered}
            currentHoveredPhoto={currentHoveredPhoto}
            updateCurrentHandler={this.updateCurrentHovered}
            photos={photos}
            showModalHandler={this.showModalHandler}
          />
          <Modal
            showModal={showModal}
            showModalHandler={this.showModalHandler}
            currentPhoto={currentHoveredPhoto}
            photos={photos}
          />
        </div>
      );
  }
}

export default App;
