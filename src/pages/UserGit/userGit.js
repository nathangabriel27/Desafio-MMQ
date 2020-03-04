import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

var { height, width } = Dimensions.get('window')


export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
      githubUsername: 'nathangabriel27',
      data: []

    }
  }

  loadGitUser = () => {
    fetch(`https://api.github.com/users/nathangabriel27`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results || []
        })
      })


  }

  componentDidMount() {
    this.loadGitUser()
  }
  render() {
    return (

      <>
        <Text>tawkfalkjkjl</Text>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View>
              <Image
                //source={{ uri: item.picture.large }}
                //source={{ uri: item.picture.thumbnail }}
                source={{ uri: item.avatar_url }}
                style={{ flex: 1 }}

              />
              <View>
                <Text></Text>
              </View>
            </View>

          )}
          keyExtractor={item => item.login}
        />

      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 1,
    height: height * 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flex: 1,
    width: width * 1,
    height: height * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

  },

  scrollView: {
    flex: 1,
    width: width * 1,
    height: height * 1,
    backgroundColor: '#fff',


  },

  text: {
    //color: '#fff',
    color: '#000',
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginLeft: '10%',

  },
  mapView: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '10%',
    marginHorizontal: '5%'
  },
  mapStyle: {
    flex: 1,
    width: 400,
    height: 400,
    borderRadius: 4000
  },
  avatar: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 0,
    marginBottom: '25%',
    marginHorizontal: 0,
    marginVertical: 0,
    borderRadius: 100,
    borderColor: '#5c0408',
    borderWidth: 7,
  },
  imageBackground: {
    flex: 1,
    width: width * 1,
    height: height * 0.45,
    justifyContent: 'center',
    opacity: 0.3
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});