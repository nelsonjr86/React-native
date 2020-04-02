import { createStackNavigator } from 'react-navigation-stack'
//import { createStackNavigator } from 'react-navigation/stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';

const MainNavigator = createStackNavigator({
    Welcome:{
        screen:Welcome
    },
    Login:{
        screen:Login
    },
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#0000FF',
            height:80
        },
        headerTitleStyle:{
            fontSize:30,
            fontWeight:'bold'
        },
        headerTintColor:'#FFF'
    }
});

export default MainNavigator;