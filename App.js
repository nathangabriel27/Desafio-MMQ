import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';


export default class app extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teste: 15,
      data: [],

    }
  }

  loadUsers = () => {

    fetch(`https://randomuser.me/api/?results=${this.state.teste}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results || []

        })

      })
  }


  componentDidMount() {
    this.loadUsers()
  }

  render() {
    return (
      <>
        <View style={styles.main}>
          <Text style={styles.mainText} >Desafio MasterMaq
          </Text>

          <View style={styles.subMain}>
            <Text>Numero de Usuarios: {this.state.teste}</Text>
          </View>

        </View>


        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (

              <TouchableOpacity style={styles.line} >
                <Image
                  source={{ uri: item.picture.medium }}
                  //                  source={{ uri: item.picture.large }}
                  style={styles.avatar}
                />
                <View style={styles.info}>

                  <View style={styles.user}>
                    <Text style={styles.name}> {item.name.first} {item.name.last} </Text>
                    <Text style={styles.email}> {item.login.username}</Text>

                  </View>

                  <Text style={styles.email}>{item.gender}</Text>
                  <Text style={styles.email}>{item.email}</Text>
                  <Text style={styles.email}>{item.phone}</Text>
                  <Text style={styles.email}>{item.login.username}</Text>

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
  line: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1

  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
    alignSelf: 'center'
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  user: {
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  },

  name: {
    fontSize: 12
  },
  email: {
    fontSize: 14,
    fontWeight: 'bold'
  }
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