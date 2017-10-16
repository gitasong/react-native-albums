// Import library to help create component
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a Component
export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

// Render component to device
AppRegistry.registerComponent('albums', () => App);
