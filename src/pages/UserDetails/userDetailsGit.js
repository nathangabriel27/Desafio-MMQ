import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ActivityIndicator, Alert, ScrollView, YellowBox } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import MapView, { Marker } from 'react-native-maps';
var { height, width } = Dimensions.get('window')

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
      item: props.item,
    }
  }

  async componentDidMount() {
    console.log(this.state.item.Location.latitude);

  }
  profileGit(item) {
    Actions.profile({ item })
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.avatar}>
          <Image
            source={{ uri: this.state.item.avatarGithub }}
            //source={{ uri: this.state.item.picture.thumbnail }}
            //source={{ uri: this.state.item.picture.medium }}
            style={styles.imageAvatar}

          />
        </View>

        <View style={styles.name}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{this.state.item.nameGithub}</Text>

        </View>

        <View style={styles.details}>

          <View style={styles.Infor}>
            <Text style={styles.inforTitle}>Username</Text>
            <Text style={styles.inforDescription}>{this.state.item.usernameGithub}</Text>
            <Text style={styles.inforTitle}>Bio</Text>
            <Text style={styles.inforDescription}>{this.state.item.bioGitHub}</Text>
            <Text style={styles.inforTitle}>Endereço </Text>
            <Text style={styles.inforDescription}>{this.state.item.locationDescription}</Text>

          </View>

          <TouchableOpacity style={styles.detailsIcon}>
            <Ionicons name="logo-github" style={styles.icon} />
          </TouchableOpacity>

        </View>

        <View style={styles.mapView}>
          <MapView
            style={styles.mapViewGeolocation}
            initialRegion={{
              latitude: this.state.item.Location.latitude,
              longitude: this.state.item.Location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            showsUserLocation
          /*
          latitude: this.state.item.location.coordinates.latitude,
          longitude: this.state.item.location.coordinates.longitude
     */
          >
            <Marker.Animated
              coordinate={{
                latitude: this.state.item.Location.latitude,
                longitude: this.state.item.Location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            />
          </MapView>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#4a4b4f',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 1,
    height: height * 0.4,
  },
  imageAvatar: {
    width: 230,
    height: 230,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 115,
    borderColor: '#fff',
    borderWidth: 7,
  },

  name: {
    backgroundColor: '#fff',
    //backgroundColor: '#4a4b4f',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 1,
    height: height * 0.05,
    elevation: 5,
    shadowOffset: { width: 2, height: 1 },
    shadowColor: '#fff',
    shadowOpacity: 0.5,
    shadowRadius: 4,

  },
  details: {
    borderColor: '#fff',
    backgroundColor: '#4a4b4f',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 1,
    height: height * 0.3,
    flexDirection: 'row'

  },
  detailsIcon: {
    justifyContent: 'center',
    backgroundColor: '#4a4b4f',
    width: width * 0.2,
    height: height * 0.25,
    marginRight: 15,
    marginLeft: 15,


  },
  icon: {
    color: '#fff',
    fontSize: 100
  },
  Infor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#4a4b4f',
    width: width * 0.8,
    height: height * 0.25,

  },
  inforTitle: {
    fontSize: 21,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 20
  },
  inforDescription: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 35


  },
  mapView: {
    flex: 1,
    backgroundColor: '#4a4b4f',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 1,
    height: height * 0.35,
  },
  mapViewGeolocation: {
    flex: 1,
    width: width * 0.9,
    height: height * 0.35,
  }
})
