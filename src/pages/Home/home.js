import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import firebase from 'firebase'
import _ from 'lodash'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numUsers: 50,
      loading: true,
      data: [],
      usersData: [],
      githubUsername: 'nathangabriel27',
      resgit: []
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

  loadGitUser = () => {
    fetch(`https://api.github.com/users/${this.state.githubUsername}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results || []
        })

      })
  }

  searchUsers() {
    firebase.database().ref("Users")
      .once("value")
      .then((snapshot) => {
        const usersMaped = _.values(snapshot.val());
        this.setState({ usersData: usersMaped })
        console.log(usersData)
      })
  }
  setings() {
    Actions.register()
  }
  profileGit() {
    Actions.profile()
  }
  userDetails(item) {
    Actions.userDetails({ item })
  }
  componentDidMount() {
    this.loadUsers();
    this.searchUsers()
  }

  renderUser(item) {
    return (
      <TouchableOpacity style={styles.cardGit}
        onPress={() => this.profileGit(usernameGithub)}

      >
        <Image
          //source={{ uri: item.picture.large }}
          //source={{ uri: item.picture.thumbnail }}
          source={{ uri: 'https://avatars2.githubusercontent.com/u/43018177?s=460&v=4' }}
          style={styles.avatarGit}

        />

        <Text style={styles.textGit}> {item.usernameGithub} </Text>
        <View style={styles.iconGitContainer}>
          <Ionicons name="logo-github" style={styles.iconGit} />
        </View>

      </TouchableOpacity >

    )
  }
  /*   componentDidUpdate() {
      this.searchUsers()
    } */
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

          <ScrollView>

            <View style={styles.container}>
              <FlatList
                data={this.state.usersData}
                renderItem={({ item }) => this.renderUser(item)}
              />

              <FlatList
                data={this.state.data}

                renderItem={({ item }) => (

                  <TouchableOpacity

                    style={styles.card}
                    onPress={() => { this.userDetails(item) }}
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
          </ScrollView>
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
  cardGit: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //borderBottomColor: '#ccc',
    //borderBottomWidth: 15,

    //Estilos de elevacao android e ios
    borderRadius: 10,
    elevation: 4,
    backgroundColor: '#000',
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
  avatarGit: {
    width: 60,
    height: 60,
    marginRight: 5,
    alignSelf: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 3,
  },
  textGit: {
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
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
  iconGit: {
    fontSize: 58,
    color: '#fff',
    marginRight: 15,
    marginLeft: 14,
    marginRight: 5,
    alignSelf: 'center',
    marginHorizontal: 5,
    marginVertical: 5,

  },
  iconGitContainer: {

  }
});