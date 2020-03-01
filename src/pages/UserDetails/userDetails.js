import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

var { height, width } = Dimensions.get('window')


export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
      item: props.item,
      region: null
    }
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.07,
            longitudeDelta: 0.07
          }
        });
      }, //  sucesso
      () => { },
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000
      }
    );
  }

  render() {
    const { region } = this.state
    return (
      <View style={styles.container}>

        <View style={styles.header}>

          <ImageBackground
            source={{ uri: this.state.item.picture.large }}
            style={styles.imageBackground}
          />


          <Image
            source={{ uri: this.state.item.picture.large }}
            //source={{ uri: this.state.item.picture.thumbnail }}
            //source={{ uri: this.state.item.picture.medium }}
            style={styles.avatar}
          />

        </View>

        <View style={styles.main} >

          <ScrollView style={styles.scrollView}>

            <Text style={styles.text}>Sexo:{this.state.item.gender}</Text>
            <Text style={styles.text}>idade:{this.state.item.dob.age}</Text>
            <Text style={styles.text}>Nome : {this.state.item.name.first} {this.state.item.name.last}</Text>
            <Text style={styles.text}>Email: {this.state.item.email}</Text>
            <Text style={styles.text}>Telefone: {this.state.item.phone}</Text>
            <Text style={styles.text}>Aniversario:{this.state.item.dob.date}</Text>
            <Text style={styles.text}>latitude:{this.state.item.location.coordinates.latitude}</Text>
            <Text style={styles.text}>longitude:{this.state.item.location.coordinates.longitude}</Text>


            <View style={styles.mapView}>

              <MapView
                style={styles.mapStyle}
                initialRegion={region}
                /*
                {
                latitude: this.state.item.location.coordinates.latitude,
                longitude: this.state.item.location.coordinates.longitude,

           */
                showsUserLocation
              />

            </View>
          </ScrollView>

        </View>

      </View >
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
  main: {
    width: width * 1,
    height: height * 0.6,
    backgroundColor: '#5c04',
    alignItems: 'center',
    justifyContent: 'center',
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
});