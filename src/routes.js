import { createAppContainer } from 'react-navigation'
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
           size: 40 */
      }
    },
    UserDetails: {
      screen: UserDetails,
      navigationOptions: {
        title: 'Detalhes do Usuario',
       
        /*  
        header: null
           size: 40 */
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


