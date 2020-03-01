import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

export default class Search extends Component {
  render() {
    return <GooglePlacesAutocomplete
      placeholder='Qual a localização? '
      placeholderTextColor='#333'
      onPress={() => { }}
      query={{
        key: 'AIzaSyBVvpE2A3__qwwnX2vPnD_A1epgVsEKWQ0',
        language: 'pt'
      }}
      textInputProps={{
        autoCapitalize: 'none',
        autoCurrent: false
      }}
      fetchDetails
      eneblePoweredByContainer={false}
    />;
    
  }
}
