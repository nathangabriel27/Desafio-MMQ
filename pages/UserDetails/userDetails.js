import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native';

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
            <Text style={styles.texto}>Sexo:{this.state.item.gender}</Text>
            <Text style={styles.texto}>idade:{this.state.item.dob.age}</Text>
            <Text style={styles.texto}>Nome : {this.state.item.name.first} {this.state.item.name.last}</Text>
            <Text style={styles.texto}>Email: {this.state.item.email}</Text>
            <Text style={styles.texto}>Telefone: {this.state.item.phone}</Text>
            <Text style={styles.texto}>Aniversario:{this.state.item.dob.date}</Text>


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
    //    color: '#000',
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
    //borderWidth: 4,
    /*     blurType: "light",
        blurAmount: 3,
        blurRadius: 5, */
  },
});




