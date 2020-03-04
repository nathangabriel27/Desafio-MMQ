import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';


// import { Container } from './styles';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {

      resGit: [],

    }
  }

  componentDidMount() {
    this.loadGitUser()
  }

  loadGitUser = () => {
    fetch(`https://api.github.com/users/nathangabriel27`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          resGit: res || []
        })

      })
  }

  render() {
    return (
      <View />


    )

  }
}
