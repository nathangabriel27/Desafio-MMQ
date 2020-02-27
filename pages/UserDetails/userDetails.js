import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item
    }
  }

  render() {
    return (
      <>

        <View style={styles.container}>

          <Image
            source={{ uri: this.state.item.picture.large }}
            //source={{ uri: this.state.item.picture.thumbnail }}
            //source={{ uri: this.state.item.picture.medium }}
            style={styles.avatar}

          />
          <TouchableOpacity>

            <Text style={styles.texto}>Nome : {this.state.item.name.first}{this.state.item.name.last}</Text>
            <Text style={styles.texto}>Telefone: {this.state.item.phone}</Text>
            <Text style={styles.texto}>Sexo:{this.state.item.gender}</Text>
            <Text style={styles.texto}>Email: {this.state.item.email}</Text>
            <Text style={styles.texto}>Username:{this.state.item.login.username}</Text>
            {/* 
            <Text style={styles.texto}> {item.login.username}</Text>
            <Text style={styles.texto}>{item.login.gender}</Text>
            <Text style={styles.texto}>{item.login.email}</Text>
            <Text style={styles.texto}>{item.login.phone}</Text>
            <Text style={styles.texto}>{item.login.login.username}</Text> */}

          </TouchableOpacity>
        </View>

      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5c0408',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 25
  },
  avatar: {
    width: 180,
    height: 180,
    marginRight: 10,
    alignSelf: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 4,
  },
});


/*

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';


export default class app extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numUsers: 10
      ,
      data: [],

    }
  }

  loadUsers = () => {


    fetch(`https://randomuser.me/api/?results=${this.state.numUsers}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results || []

        })

      })
  }

  functionNumUsers() {
    console.log('function numUsers ');

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
            <Text>detalhes do usuario : {this.state.numUsers}</Text>
          </View>

        </View>


        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (

              <TouchableOpacity style={styles.card}>
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
                  {/*
                  <Text style={styles.email}>{item.gender}</Text>
                  <Text style={styles.email}>{item.email}</Text>
                  <Text style={styles.email}>{item.phone}</Text>
                  <Text style={styles.email}>{item.login.username}</Text> */
/*
}

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
/*
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
borderWidth:4,
},
info: {
flexDirection: 'column',
justifyContent: 'flex-start',
marginHorizontal: 18,
marginVertical: 10
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


*/
