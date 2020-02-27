import React, { Component } from 'react'
import {View, StatusBar,} from 'react-native'

import { Scene, Router } from 'react-native-router-flux';

import Home from './pages/Home/home'
import UserDetails from './pages/UserDetails/userDetails'

class RouterComponent extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <View style={styles.container}>
        <Router>
          <Scene key='app'>
              <Scene key='home'
                component={Home}
                initial />
              <Scene
                  key='userDetails'
                  component={UserDetails} />
            </Scene>
        </Router>
      </View>
    )
  };
}

const styles = {
  container: {
    flex: 1
  },
  sceneStyle: {
    backgroundColor: '#F5F6F7'
  },
  navigationBarStyle: {
    elevation: 10,
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  titleStyle: {
    color: '#FFFFFF',
    letterSpacing: 1,
    fontWeight: '500',
    textAlign: 'left',
    marginLeft: -30,
  }
}

export default RouterComponent





/* import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../pages/Home/home'
import UserDetails from '../pages/UserDetails/userDetails';


const Routes = createAppContainer(

  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
        /*    title: 'Desafio MasterMaq',
           size: 40 *//*
      }
    },
    UserDetails: {
      screen: UserDetails,
      navigationOptions: {
        title: 'Detalhes do Usuario',
       
        /*  
        header: null
           size: 40 *//*
      }
    },

  },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#5c0408',

        },
        headerTintColor: '#fff'
      },
    }

  ),
);

export default Routes


 */