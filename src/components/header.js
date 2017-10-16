// Import library to help create component
import React from 'react';
import { Text, View } from 'react-native';

// Create a Component
const Header = () => {
  const { textStyle } = styles;

  return (
    <View>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  }
};

// Make component available to rest of app
export default Header;
