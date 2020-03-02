import React, { Component } from 'react';
import { Platform, StyleSheet, TextInput } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

export default class Search extends Component {
  state = {
    searchFocused: false
  }
  render() {
    return <GooglePlacesAutocomplete
      placeholder='Qual a localização? '
      placeholderTextColor='#333'
      onPress={(data, details) => {
        console.log('Data: ', data);
        console.log('details : ', details);

      }}
      query={{
        key: 'AIzaSyBVvpE2A3__qwwnX2vPnD_A1epgVsEKWQ0',
        language: 'pt'
      }}
      textInputProps={{
        autoCapitalize: 'none',
        autoCurrent: false
      }}
      fetchDetails
      enablePoweredByContainer={false}
      styles={{
        container: {
          position: 'absolute',
          top: Platform.select({ ios: 130, android: 110 }),

          width: '100%'
        },
        textInputContainer: {
          flex: 1,
          backgtoudColor: 'transparent',
          height: 54,
          marginHorizontal: 20,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 25
        },
        textInput: {
          height: 54,
          margin: 0,
          borderRadius: 25,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 0,
          marginLeft: 0,
          marginRight: 0,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { x: 0, y: 0 },
          shadowRadius: 15,
          borderWidth: 1,
          borderColor: '#ddd',
          fontSize: 18,
        },
        listView: {
          borderWidth: 1,
          borderColor: '#ddd',
          backgroundColor: '#fff',
          marginHorizontal: 20,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { x: 0, y: 0 },
          shadowRadius: 15,
          marginTop: 10,
          borderRadius: 25
        },
        description: {
          fontSize: 16
        },
        row: {
          padding: 20,
          height: 58
        }
      }}
    />;

  }
}
/* const styles = StyleSheet.create({

}
) */