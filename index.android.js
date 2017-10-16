// Import library to help create component
import React, { Component } from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a Component
export default class App extends Component {
  render() {
    return (
      <Text>Some Text</Text>
    );
  }
}

// Render component to device
AppRegistry.registerComponent('albums', () => App);
