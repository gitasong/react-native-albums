// Import library to help create component
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

// Create a Component
export default class App extends Component {
  render() {
    return (
      <Header headerText={'Albums'} />
    );
  }
}

// Render component to device
AppRegistry.registerComponent('albums', () => App);
