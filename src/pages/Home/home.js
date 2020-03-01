import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numUsers: 1000,
      loading: true,
      data: [],

    }
  }
  loadUsers = () => {
    // usuarios randomicos 
    fetch(`https://randomuser.me/api/?nat=BR&results=${this.state.numUsers}`)
      // usuarios fixos 
      //fetch(`https://randomuser.me/api/?page=${this.state.numPage}&results=${this.state.numUsers}&nat=br&seed=rdmusr`)

      .then(res => res.json())
      .then(res => {
        this.setState({
          loading: false,
          data: res.results || []
        })
      })
  }

  teste() {
    Alert.alert('teste')
  }
  setings() {
    Actions.setings()
  }

  userDetails(item) {
    Actions.userDetails({ item })
  }

  componentDidMount() {
    this.loadUsers()
  }



  render() {
    if (this.state.loading) {
      return (

        <View style={styles.loading}>
          <ActivityIndicator size='large' color='#fc0303' />
          <Text>Carregando dados da api....</Text>

        </View>
      )
    } else {

      return (
        <>
          <TouchableOpacity style={styles.main}
            onPress={() => this.setings()}

          >
            <Text style={styles.mainText} >Desafio MasterMaq
          </Text>

            <View style={styles.subMain}>
              <Text>Numero de usuarios : {this.state.numUsers}</Text>
            </View>

          </TouchableOpacity>


          <View style={styles.container}>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (

                <TouchableOpacity
                  style={styles.card}
                  onPress={() => this.userDetails(item)}
                >

                  <Image
                    //source={{ uri: item.picture.large }}
                    //source={{ uri: item.picture.thumbnail }}
                    source={{ uri: item.picture.medium }}
                    style={styles.avatar}

                  />

                  <View style={styles.info}>

                    <View style={styles.dataUser}>

                      <Text style={styles.name}>{item.name.first} {item.name.last} </Text>
                      <Text style={styles.email}>{item.email}</Text>
 
                    </View>

                    <View style={styles.containerIcons}>


                      <TouchableOpacity style={styles.icons} onPress={() => { this.teste() }} >
                        <Ionicons name="ios-phone-portrait" size={30} color='#5c060a' />
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.icons} onPress={() => { this.teste() }} >
                        <Ionicons name="ios-mail" size={30} color='#5c060a' />
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.icons} onPress={() => { this.teste() }}>
                        <Ionicons name="ios-pin" size={30} color='#5c060a' />
                      </TouchableOpacity>


                    </View>

                  </View>

                </TouchableOpacity>

              )}
              keyExtractor={item => item.email}
            >

            </FlatList>

          </View >
        </>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: '#edf0',
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  main: {
    marginLeft: 0,
    backgroundColor: '#5c060a',
    alignItems: 'center',

  },
  subMain: {
    flex: 1,
    marginLeft: 0
  },
  subText: {
    backgroundColor: '#3124',
    fontSize: 12,

  },
  mainText: {
    marginTop: 40,

    marginBottom: 10,
    color: '#fff',
    fontSize: 35,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    //borderBottomColor: '#ccc',
    //borderBottomWidth: 15,

    //Estilos de elevacao android e ios
    borderRadius: 10,
    elevation: 4,
    backgroundColor: '#fff',
    shadowOffset: { width: 2, height: 1 },
    shadowColor: '#e9e9e9e9',
    shadowOpacity: 0.1,
    shadowRadius: 4,

    marginHorizontal: 12,
    marginVertical: 10

  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 5,
    alignSelf: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 50,
    borderColor: '#5c0408',
    borderWidth: 3,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 18,
    marginVertical: 10,
    alignItems: 'center',
    //backgroundColor: '#5c06',

  },
  dataUser: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    //backgroundColor: '#5c06',


  },
  containerIcons: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  icons: {
    marginHorizontal: 10
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  email: {
    fontSize: 14,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});