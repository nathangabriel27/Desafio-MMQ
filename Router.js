import React, { Component } from 'react'
import { View, StatusBar, } from 'react-native'

import { Scene, Router } from 'react-native-router-flux';

import Home from './src/pages/Home/home'
import UserDetails from './src/pages/UserDetails/userDetails'
import Setings from './src/pages/Setings/setings'
import Register from './src/pages/Signup/register'
import Profile from './src/pages/components/Profile/profile'
import UserDetailsGit from './src/pages/UserDetails/userDetailsGit'

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

              <Scene
                key='setings'
                component={Setings}
              />
              <Scene key='home'
                component={Home}
                initial

                />
              <Scene
                key='userDetails'
                component={UserDetails}
                />
              <Scene
                key='userDetailsGit'
                component={UserDetailsGit}
              />

              <Scene
                key='register'
                component={Register}
              />
              <Scene
                key='profile'
                component={Profile}
              />
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

