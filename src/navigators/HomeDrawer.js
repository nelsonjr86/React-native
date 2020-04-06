import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from '../screens/Home';
import Perfil from '../screens/Perfil';

const HomeDrawer = createDrawerNavigator({
    Home:{
        screen:Home
    },
    Perfil:{
        screen:Perfil
    }
});

export default HomeDrawer;