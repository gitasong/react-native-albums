// Import library to help create component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a Component
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

// Render component to device
AppRegistry.registerComponent('albums', () => App);
