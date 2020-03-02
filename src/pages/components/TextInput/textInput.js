import React, { Component } from 'react';
import { Platform, StyleSheet, TextInput } from 'react-native'

export default class TextInput extends Component {

  render() {
    const [value, onChangeText] = React.useState('Useless Placeholder');
    return (

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder={'Usuario do Github'}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    )

  }
}
/* const styles = StyleSheet.create({

}
) */
