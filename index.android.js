// Import library to help create component
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a Component
export default class App extends Component {
  render() {
    return (
      <Header />
    );
  }
}

// Render component to device
AppRegistry.registerComponent('albums', () => App);
