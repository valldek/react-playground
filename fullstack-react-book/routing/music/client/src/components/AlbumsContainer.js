import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Album from './Album';
import VerticalMenu from './VerticalMenu';
import { client } from '../Client';

const ALBUM_IDS = [
  '23O4F21GDWiGd33tFN3ZgI',
  '3AQgdwMNCiN7awXch5fAaG',
  '1kmyirVya5fRxdjsPFDM05',
  '6ymZBbRSmzAvoSGmwAFoxm',
  '4Mw9Gcu1LT7JaipXdwrq1Q',
];

class AlbumsContainer extends Component {
  state = {
    fetched: false,
    albums: [],
  };

  componentDidMount() {
    this.getAlbums();
  }

  getAlbums = () => {
    client.getAlbums(ALBUM_IDS)
      .then((albums) => (
        this.setState({
          fetched: true,
          albums: albums,
        })
       ));
  };

  render() {
    if (!this.state.fetched) {
      return (
        <div className='ui active centered inline loader' />
      );
    } else {
      const matchPath = this.props.match.path;
      return (
        <div className='ui two column divided grid'>
          <div
            className='ui six wide column'
            style={{ maxWidth: 250 }}
          >
            <VerticalMenu albums={this.state.albums} albumsPathname={matchPath} />
          </div>
          <div className='ui ten wide column'>
            <Route
              path={`${matchPath}/:albumId`}
              render={ ({ match }) => {
                const album = this.state.albums.find((val) => {
                  return val.id === match.params.albumId
                });

                return (
                  <Album
                    album={album}
                    albumsPathname={matchPath}
                  />
                )
              }}
            />
            {/* {
              this.state.albums.map((a) => (
                <div
                  className='row'
                  key={a.id}
                >
                  <Album album={a} />
                </div>
              ))
            } */}
          </div>
        </div>
      );
    }
  }
}

export default AlbumsContainer;
