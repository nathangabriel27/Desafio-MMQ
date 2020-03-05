import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

import { View } from 'react-native';

// import { Container } from './styles';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,


    }
  }
  render() {
    console.log(this.state.item );
    
    return (
      <WebView
      log
        source={{ uri: `https://github.com/${this.state.item.usernameGithub}` }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

