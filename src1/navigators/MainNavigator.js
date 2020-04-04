import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import HomeTab from '../navigators/HomeTab';

const MainStack = createStackNavigator({
    Login:{
        screen:Login
    },
    HomeTab:{
        screen:HomeTab
    }
},{
    defaultNavigationOptions:{
        header:null
    }
});

export default MainStack;