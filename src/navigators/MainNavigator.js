import { createStackNavigator } from 'react-navigation-stack'
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';

const MainNavigator = createStackNavigator({
    Welcome:{
        screen:Welcome,
        params:{
            titulo:'Teste'
        }
    },
    Login:{
        screen:Login
    },
},{
    defaultNavigationOptions:{
        headerTitleContainerStyle:{
            justifyContent:'center',
            alignItems:'center'
        }
        
    }
});

export default MainNavigator;