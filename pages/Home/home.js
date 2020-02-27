import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numUsers: 1000,
      loading: true,
      name: 'nathan',
      data: [],

    }
  }
  loadUsers = () => {
    // usuarios randomicos 
    fetch(`https://randomuser.me/api/?results=${this.state.numUsers}`)
      // usuarios fixos 
      //fetch(`https://randomuser.me/api/?page=${this.state.numPage}&results=${this.state.numUsers}&nat=us&seed=rdmusr`)

      .then(res => res.json())
      .then(res => {
        this.setState({
          loading: false,
          data: res.results || []
        })
      })
  }

  userDetails(item) {
    Actions.userDetails({ item })
  }

  componentDidMount() {
    this.loadUsers()
    //console.log('aqui é o data: ',data);

  }

  render() {
    if (this.state.loading) {
      return (

        <View style={styles.loading}>
          <ActivityIndicator size='large' color='#f1c40f' />
          <Text>Carregando dados da api....</Text>

        </View>
      )
    } else {


      return (
        <>
          <View style={styles.main}>
            <Text style={styles.mainText} >Desafio MasterMaq
          </Text>

            <View style={styles.subMain}>
              <Text>Numero de usuarios : {this.state.numUsers}</Text>
            </View>

          </View>


          <View style={styles.container}>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (

                <TouchableOpacity
                  style={styles.card}
                  onPress={() => this.userDetails(item)}
                //onPress={() => { this.props.navigation.push('UserDetails', { 'name': this.state.name }) }}
                //onPress={() => { this.teste() }}
                >
                  <Image
                    source={{ uri: item.picture.medium }}
                    //                  source={{ uri: item.picture.large }}
                    style={styles.avatar}

                  />

                  <View style={styles.info}>

                    <View style={styles.user}>
                      <Text style={styles.name}> {item.name.first} {item.name.last} </Text>
                      <Text style={styles.email}> {item.login.username}</Text>
                      <Text style={styles.email}>{item.gender}</Text>
                      <Text style={styles.email}>{item.email}</Text>
                      <Text style={styles.email}>{item.phone}</Text>
                      <Text style={styles.email}>{item.login.username}</Text>

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

    /*    flex: 1,
       alignItems: 'center',
       justifyContent: 'center', */
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
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#e9e9e9e9',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginHorizontal: 10,
    marginVertical: 10

  },
  avatar: {
    width: 80,
    height: 80,
    marginRight: 10,
    alignSelf: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 50,
    borderColor: '#5c0408',
    borderWidth: 4,
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginHorizontal: 18,
    marginVertical: 10
  },
  user: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  name: {
    fontSize: 12
  },
  email: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});





/*
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

export default function App() {


  return (
    <>

      <View style={styles.container}>
        <TouchableOpacity>

          <Text style={{
            color: '#fff',
            fontSize: 26
          }}
          >
            Hello MMQ </Text>
        </TouchableOpacity>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5c0408',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */