import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Alert, Image, Dimensions, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView } from 'react-native';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'
import { Actions } from 'react-native-router-flux';
import MapView, { Marker, Callout } from 'react-native-maps'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import _ from 'lodash'



console.disableYellowBox = true;

import firebase from "firebase"

var { height, width } = Dimensions.get('window');


// import { Container } from './styles';


export default class Sinup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceHeight: height,
      deviceWidth: width,
      usernameGithub: '',
      avatarGithub: '',
      nameGithub: '',
      bioGitHub: '',
      resGit: {},
      searchFocused: false,
      location: {},
      locationDescription: '',
      usersData: [],

    };
  }


  async componentDidMount() {
    this.searchUsers()
    const { currentUser } = firebase.auth();
    if (currentUser) {
      console.log("Estou logado: ", currentUser.uid)
    }
  }
  searchUsers() {
    firebase.database().ref("Users")
      .once("value")
      .then((snapshot) => {
        const usersMaped = _.values(snapshot.val());
        this.setState({ usersData: usersMaped })
        console.log("userdata", this.state.usersData)
      })
  }

  backToHome() {
    Actions.home()
  }
  toRegister() {

    Keyboard.dismiss()
    Alert.alert(
      'Registrar',
      'Confirma o seu registo?',
      [
        { text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        {
          text: 'OK', onPress: () => this.registerUser(
            this.state.usernameGithub,
            this.state.avatarGithub,
            this.state.nameGithub,
            this.state.bioGitHub,
            this.state.location,
            this.state.locationDescription,
          )
        },
      ],
      { cancelable: false }
    )
  }

  registerUser = () => {
    fetch(`https://api.github.com/users/${this.state.usernameGithub}`)
      .then(res => res.json())
      .then(res => {
        //console.log('Res:  ', res.login);
        this.setState({
          resGit: res,
          avatarGithub: res.avatar_url,
          nameGithub: res.name,
          bioGitHub: res.bio,

        })
        let user = {
          usernameGithub: this.state.usernameGithub,
          avatarGithub: this.state.avatarGithub,
          nameGithub: this.state.nameGithub,
          bioGitHub: this.state.bioGitHub,
          locationDescription: this.state.locationDescription,
          Location: {
            latitude: this.state.location.lat,
            longitude: this.state.location.lng
          }
        }
        firebase.database().ref("Users/")
          .push(user)
          .then((snapshot) => {
            Alert.alert(
              'Sucesso !!',
              'Cadastramos você ao nosso banco de dados, agora so conferir na tela que vamos lhe direcionar seu perfil =D',
              [
                {
                  text: 'OK', onPress: () => this.backToHome()
                },
              ],
              { cancelable: false }
            )
          })
      })
  }

  render() {
    const { searchFocused } = this.state
    const devs = this.state.usersData
    console.log('DEVS: ', devs);

    return (

      <>
        <StatusBar  barStyle={'dark-content'} hidden={true}/>
        <KeyboardAvoidingView
          keyboardVerticalOffset={0}
          behavior='padding'
          style={{ flex: 2 }}
          enabled={false}
        >

          <MapView
            initialRegion={{
              latitude: -19.9132301,
              longitude: -43.9565751,
              latitudeDelta: 0.2,
              longitudeDelta: 0.2,
            }}
            style={styles.map}
            showsUserLocation
            loadingEnabled
          //onRegionChangeComplete={handleRegionChanged}
          >


            {devs.map(dev => (
              <Marker
                coordinate={{
                  latitude: dev.Location.latitude,
                  longitude: dev.Location.longitude
                }}>
                <Image
                  style={styles.avatar}
                  source={{ uri: dev.avatarGithub }}
                />
                <Callout
                >
                  <View style={styles.calloutFixed} >
                    <Text style={styles.devNameFixed} >{dev.nameGithub}</Text>
                    <Text style={styles.devtechsFixed} >{dev.usernameGithub}</Text>
                    <Text style={styles.devBioFixed} >{dev.bioGitHub}</Text>
                  </View>
                </Callout>
              </Marker>
            ))}


          </MapView>

          <TextInput
            type='text'
            style={styles.textInput}
            placeholder="Seu usuario do Github ..."
            placeholderTextColor='rgba(0,0,0,0.75)'
            value={this.state.usernameGithub}
            onChangeText={e => this.setState({ usernameGithub: e })}
          />

          <GooglePlacesAutocomplete
            placeholder='Qual a localização? '
            placeholderTextColor='#333'
            onPress={(data, details) => {
              /*   
              console.log("vicinity: ", details.vicinity);
              console.log("data: ", data);
              console.log( "details.geometry.location -- ", details.geometry.location);
              */
              this.setState({
                location: details.geometry.location,
                locationDescription: details.vicinity

              })
              console.log("location :", this.state.locationDescription);
            }}
            query={{
              key: 'AIzaSyBVvpE2A3__qwwnX2vPnD_A1epgVsEKWQ0',
              language: 'pt'
            }}
            textInputProps={{
              onFocus: () => { this.setState({ searchFocused: false }) },
              onblur: () => { this.setState({ searchFocused: false }) },
              autoCapitalize: 'none',
              autoCurrent: false
            }}
            listViewDisplayed={searchFocused}
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
          />

          <TouchableOpacity onPress={() => this.toRegister()} style={styles.dataSubmit}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name="logo-github" style={styles.icon} />
              <Text style={styles.dataSubmitTeText}>
                Enviar Git + localização
              </Text>
              <Entypo name="location" style={styles.icon} />
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </>
    )

  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#140432'
  },
  calloutFixed: {
    width: 260,
    height: 100
  },
  devfixed: {
    color: '#fa4343',
    marginTop: 5
  },
  devNameFixed: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 26
  },
  devBioFixed: {
    color: '#666',
    marginTop: 5
  },
  devtechsFixed: {
    marginTop: 5
  },
  callout: {
    width: 260,
  },
  devName: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 26
  },
  devBio: {
    color: '#666',
    marginTop: 5
  },
  devtechs: {
    marginTop: 5
  },
  searchForm: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row'
  },
  searchInput: {
    flex: 1,
    marginTop: '10%',
    height: 50,
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 18,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 4

  },

  loadButton: {
    width: 50,
    marginTop: '10%',
    height: 50,
    backgroundColor: '#140432',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15

  },
  textInput: {
    flex: 1,
    position: 'absolute',
    height: 50,
    height: 54,
    marginHorizontal: 20,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 25,
    borderColor: '#000',
    borderWidth: 1,
    top: Platform.select({ ios: 60, android: 40 }),
    width: '90%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 18,
    elevation: 5,
    height: 54,
    margin: 0,
    borderRadius: 25,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,

  },
  dataSubmit: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    position: 'absolute',
    height: 50,
    height: 54,
    marginHorizontal: 20,
    borderRadius: 25,
    borderWidth: 3,
    top: Platform.select({ ios: 100, android: 180 }),
    width: '90%',
    backgroundColor: '#000',
    flexDirection: 'row',

  },
  dataSubmitTeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'

  },
  icon: {
    fontSize: 28,
    color: '#fff',
    marginRight: 15,
    marginLeft: 14,
  },
  calloutFixed: {
    width: 260,
    height: 100
  },


})

