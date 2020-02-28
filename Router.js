import React, { Component } from 'react'
import { View, StatusBar, } from 'react-native'

import { Scene, Router } from 'react-native-router-flux';

import Home from './pages/Home/home'
import UserDetails from './pages/UserDetails/userDetails'
import Setings from './pages/setings/setings'

class RouterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Scene key='app'>
            <Scene key='auth' initial hideNavBar >

              <Scene key='home'
                component={Home}
                initial />
              <Scene
                key='userDetails'
                component={UserDetails} />
              <Scene
                key='setings'
                component={Setings} />

            </Scene>
          </Scene>

        </Router>
      </View>
    )
  };
}

const styles = {
  container: { flex: 1 }
}

export default RouterComponent

