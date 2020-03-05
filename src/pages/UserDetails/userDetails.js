import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  StatusBar
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import moment from 'moment'

var { height, width } = Dimensions.get('window')

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
      item: props.item,
      region: null,
      latitude: -19.9223687,
      longitude: -43.9423022,
    }
  }
  async componentDidMount() {
    this.codCep(),
      navigator.geolocation.getCurrentPosition(
        () => {
          this.setState({
            region: {
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
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
  codCep = () => {
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=31250320,+BR&key=AIzaSyBJSz-eJVItINRcVGL8XJYSBGLvSTGqYls')
      .then(res => res.json())
      .then(data => {
        data.results.map(item => {
          this.setState({
            latitude: item.geometry.location.lat,
            longitude: item.geometry.location.lng,
          })
        })
      }).catch(err => {
        console.log(err);
      })
  }

  render() {
    const { region } = this.state
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} />

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
            <Text style={styles.scrollViewTitle}>Nome</Text>
            <Text style={styles.scrollViewDesciption}>{this.state.item.name.first} {this.state.item.name.last}</Text>
            <Text style={styles.scrollViewTitle}>Idade</Text>
            <Text style={styles.scrollViewDesciption}>{this.state.item.dob.age}</Text>
            <Text style={styles.scrollViewTitle}>Email</Text>
            <Text style={styles.scrollViewDesciption}>{this.state.item.email}</Text>
            <Text style={styles.scrollViewTitle}>Telefone</Text>
            <Text style={styles.scrollViewDesciption}>{this.state.item.phone}</Text>
            <Text style={styles.scrollViewTitle}>Nascimento</Text>
            <Text style={styles.scrollViewDesciption}>{moment(this.state.item.dob.date).format('DD / MM / YYYY')},  {this.state.item.dob.age} anos. </Text>
            <Text style={styles.scrollViewTitle}>Endereço</Text>
            <Text style={styles.scrollViewDesciption}>
              {this.state.item.location.street.name}, {this.state.item.location.street.number} - {this.state.item.location.city}, {this.state.item.location.state}
            </Text>

            <View style={styles.mapView}>
              <MapView
                style={styles.mapStyle}
                initialRegion={region}
                showsUserLocation
              >
                <Marker.Animated
                  coordinate={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                  }}
                />
              </MapView>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 15 }}>Fixo : latitude {this.state.latitude}  </Text>
                <Text style={{ fontSize: 15 }} maxLength={4}>longitude {this.state.longitude}</Text>
              </View>

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
  scrollViewTitle: {
    fontSize: 21,
    color: '#5c0408',
    fontWeight: 'bold',
    marginLeft: 20
  },
  scrollViewDesciption: {
    fontSize: 18,
    color: '#000',
    marginLeft: 35
  },
  mapView: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '10%',
    marginHorizontal: '5%'
  },
  mapStyle: {
    flex: 1,
    width: 400,
    height: 400,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginHorizontal: 0,
    marginVertical: 0,

  },
  avatar: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '20%',
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
    opacity: 0.3
  },
});