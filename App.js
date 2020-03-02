import React, { Component } from 'react';
import Router from './Router'
import firebase from 'firebase';

//import "./src/config/statusBarConfig";
console.disableYellowBox = true;

class App extends Component {
  componentWillMount() {
    //Posso Fazer qualquer tipo de configuração global aqui como por exemplo o Firebase
    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        apiKey: "AIzaSyAOdwErzElMHClZxGKKqJT5cMZ2CQq_b8g",
        authDomain: "desafio-mmq-f0924.firebaseapp.com",
        databaseURL: "https://desafio-mmq-f0924.firebaseio.com",
        projectId: "desafio-mmq-f0924",
        storageBucket: "desafio-mmq-f0924.appspot.com",
        messagingSenderId: "519090392471",
        appId: "1:519090392471:web:f5299e39fa303bb36088d2"
      })
    }
  }
  render() {
    return (
      <Router></Router>
    )
  }
}

export default App

