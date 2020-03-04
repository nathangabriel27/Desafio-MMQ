import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

import { View } from 'react-native';

// import { Container } from './styles';

export default class Profile extends Component {
  render() {
    return (
      <WebView
        source={{ uri: `https://github.com/Nathangabriel27` }}
        style={{ marginTop: 0 }}
      />
    );
  }
}

