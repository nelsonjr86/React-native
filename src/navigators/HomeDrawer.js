import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomDrawer from '../componentes/CustomDrawer';

import Home from '../screens/Home';
import Perfil from '../screens/Perfil';

const HomeDrawer = createDrawerNavigator({
    Home:{
        screen:Home
    },
    Perfil:{
        screen:Perfil
    }
}/*,{
    drawerPosition:'left',
    drawerType:'front',
    drawerWidth:160,
    drawerBackgroundColor:'#d5f4e6',
    contentOptions:{
        activeTintColor:'#00FF00',
        activeBackgroundcolor:'#0000FF',
        inactiveTintColor:'#FF0000'
    }
}*/,{
    contentComponent:(props)=><CustomDrawer {...props} />
}
);

export default HomeDrawer;