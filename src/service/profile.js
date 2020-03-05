import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

import { StatusBar } from 'react-native';
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

// import { Container } from './styles';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
    }
  }
  render() {
    return (
      <>
        <StatusBar barStyle={'light-content-content'} hidden={true} />
        <WebView
          
          source={{ uri: `https://github.com/${this.state.item.usernameGithub}` }}
          style={{ marginTop: 0 }}
        />
      </>
    );
  }
}

