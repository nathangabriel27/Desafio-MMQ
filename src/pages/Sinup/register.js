import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, Dimensions, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView } from 'react-native';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'
import { Actions } from 'react-native-router-flux';
import MapView, { Marker, Callout } from 'react-native-maps'


import firebase from "firebase"

var { height, width } = Dimensions.get('window');

import Search from '../components/Search/search'

// import { Container } from './styles';

export default class Sinup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: null,
      deviceWidth: width,
      deviceHeight: height,
      usernameGithub: '',
      avatarGithub: '',
      nameGithub: '',
      bioGitHub: '',
      resGit: [],

    };
  }


  componentDidMount() {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      console.log("Estou logado: ", currentUser.uid)
    }
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
          text: 'OK', onPress: () => this.registerUser(this.state.usernameGithub)
        },
      ],
      { cancelable: false }
    )
  }

  registerUser() {
    fetch(`https://api.github.com/users/nathangabriel27?cliente_id=Iv1.6fb8eedfa7524395&f916990317cfe62292aa217b277130b1bc194904`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          resGit: res | []

        })
        console.log('ffalkj',this.state.resGit);

      })
    const user = {
      usernameGithub: this.state.usernameGithub,
    }
    firebase.database().ref("Users/")
      .push(user)
      .then((snapshot) => {
        Alert.alert(
          'Registrar',
          'Confirma o seu registo?',
          [
            {
              text: 'OK', onPress: () => this.backToHome()
            },
          ],
          { cancelable: false }
        )
      })
  }

  render() {
    return (

      <>
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
          </MapView>

          <TextInput
            type='text'
            style={styles.textInput}
            placeholder="Seu usuario do Github ..."
            placeholderTextColor='rgba(0,0,0,0.75)'
            value={this.state.usernameGithub}
            onChangeText={e => this.setState({ usernameGithub: e })}
          />

          <Search />


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
    top: Platform.select({ ios: 200, android: 180 }),
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
  }


})

