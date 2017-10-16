// Import library to help create component
import React from 'react';
import { Text, View } from 'react-native';

// Create a Component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f4f4f4'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make component available to rest of app
export default Header;
