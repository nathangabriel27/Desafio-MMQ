import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { Ionicons, MaterialIcons,Entypo } from '@expo/vector-icons'


import Search from '../components/Search/search'
var { height, width } = Dimensions.get('window')


export default function Setings({ navigation }) {

  const [currentRegion, setCurrentRegion] = useState(null)
  /*   const [devs, setDevs] = useState([])
    const [techs, setTechs] = useState(''); */



  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        })
        const { latitude, longitude } = coords
        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.07,
          longitudeDelta: 0.07
        })
      }
    }

    loadInitialPosition()
  }, [])

  if (!currentRegion) {
    return null;
  }

  /*   async function loadDevs() {
      const { latitude, longitude } = currentRegion;
   
      const response = await api.get('/search', {
        params: {
          latitude,
          longitude,
          techs
        }
      })
      setDevs(response.data.devs);
    } */
  /*   function handleRegionChanged(region) {
      setCurrentRegion(region)
    } */


  return (
    <>
      <MapView
        initialRegion={{
          latitude: -19.9132301,
          longitude: -43.9565751,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
        showsUserLocation
        loadingEnabled
      //onRegionChangeComplete={handleRegionChanged}
      >
        {/*    <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
        />
 */}

        <Marker
          //usuarios Fixos pra uso  Offline

          coordinate={{
            latitude: -19.9132301,
            longitude: -43.9565751
          }}>

          <Image
            style={styles.avatar}
            source={{ uri: 'https://avatars2.githubusercontent.com/u/43018177?s=460&v=4' }}
          />

          <Callout
            onPress={() => {
              navigation.navigate('Profile', { github_username: 'nathangabriel27' })
            }} >
            <View style={styles.calloutFixed} >
              <Text style={styles.devNameFixed} >Nathan Gabriel</Text>
              <Text style={styles.devfixedFixed} >Fixed</Text>
              <Text style={styles.devBioFixed} >Sem bio</Text>
              <Text style={styles.devtechsFixed} >React, React Native, Node</Text>

            </View>
          </Callout>
        </Marker>

        {/*         {devs.map(dev => (

          //usuarios populados pela API
          <Marker
            key={dev._id}
            coordinate={{
              longitude: dev.location.coordinates[0],
              latitude: dev.location.coordinates[1],
            }}>

            <Image
              style={styles.avatar}
              source={{ uri: dev.avatar_url }}
            />

            <Callout
              onPress={() => {
                navigation.navigate('Profile', { github_username: dev.github_username })
              }} >
              <View style={styles.callout} >
                <Text style={styles.devName} >{dev.name}</Text>
                <Text style={styles.devBio} >{dev.bio}</Text>
                <Text style={styles.devtechs} >{dev.techs.join(', ')}</Text>

              </View>
            </Callout>
          </Marker>

        ))
        } 
      */}
      </MapView >
      <TextInput
        style={styles.textInput}
        placeholder="Seu usuario do Github ..."
        placeholderTextColor='rgba(0,0,0,0.75)'
      />
      <Search />
      <TouchableOpacity style={styles.dataSubmit}>
      <Ionicons name="logo-github" size={25} color="#fff" marginLeft={10} />
        <Text style={styles.dataSubmitTeText}>
          Enviar Git 
          com localização.
        </Text>
        <Entypo name="location" size={25} color="#fff" width={10} />
      </TouchableOpacity>
      <View style={styles.searchForm} >


      </View>
    </>
  );
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

  }


})

