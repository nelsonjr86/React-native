import { createBottomTabNavigator } from 'react-navigation-tabs'
import Welcome from '../screens/WelcomeTabs';
import Login from '../screens/LoginTabs';

const MainNavigator = createBottomTabNavigator({
    Welcome:{
        screen:Welcome,
        params:{
            titulo:'Teste'
        }
    },
    Login:{
        screen:Login
    }
},{
    tabBarOptions:{
        activeTintColor:'#FF0000',
        labelStyle:{
            fontSize:18
        },
        labelPosition:'below-icon'
    },
    defaultNavigationOptions:{

    }

    
});

export default MainNavigator;