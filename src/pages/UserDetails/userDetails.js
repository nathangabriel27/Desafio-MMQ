import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

var { height, width } = Dimensions.get('window')


export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
      item: props.item,
      region: null,
      loading: true,
      searchCep: [],

    }
  }

  codCep = () => {
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=31250320,+BR&key=AIzaSyBJSz-eJVItINRcVGL8XJYSBGLvSTGqYls').then(res=>res.json()).then(data=>{
      console.log(data.results.place_id);

    }).catch()


    // usuarios randomicos 
    //fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=31250320&key=AIzaSyBVvpE2A3__qwwnX2vPnD_A1epgVsEKWQ0`)
    // usuarios fixos 
    //fetch(`https://randomuser.me/api/?page=${this.state.numPage}&results=${this.state.numUsers}&nat=br&seed=rdmusr`)

    /*       .then(res => res.json())
          .then(res => {
            this.setState({
              loading: false,
              searchCep: res.results.address_components || []
            })
          }) 
              
          
          
          
          fetch('https://viacep.com.br/ws/01001000/json/').then(res=>res.json()).then(data=>{
      console.log(data);

    }).catch()
          */
  }

  async componentDidMount() {

    navigator.geolocation.getCurrentPosition(
      () => {
        this.setState({
          region: {
            latitude: parseFloat(this.state.item.location.coordinates.latitude),
            longitude: parseFloat(this.state.item.location.coordinates.longitude),
            latitudeDelta: 3,
            longitudeDelta: 3
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

            <TouchableOpacity onPress={this.codCep}>

              <Text style={styles.text}>Sexo:{this.state.item.gender}</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Nome : {this.state.item.name.first} {this.state.item.name.last}</Text>
            <Text style={styles.text}>idade:{this.state.item.dob.age}</Text>
            <Text style={styles.text}>Email: {this.state.item.email}</Text>
            <Text style={styles.text}>Telefone: {this.state.item.phone}</Text>
            <Text style={styles.text}>Aniversario:{this.state.item.dob.date}</Text>

            <Text style={styles.text}>latitude:{parseFloat(this.state.item.location.coordinates.latitude)}</Text>
            <Text style={styles.text}>longitude:{parseFloat(this.state.item.location.coordinates.longitude)}</Text>
            <Text style={styles.text}>Endereco :
            </Text>




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
              >
                <Marker.Animated
                  coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                  }}
                />
              </MapView>

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
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});