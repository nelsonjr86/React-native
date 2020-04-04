import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CustomTabBar from '../componentes/CustomTabBar';
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
        tabBarComponent:(props)=>(
            <CustomTabBar 
                {...props}
                items={[
                    {text:'Inicio', route:'Welcome'},
                    {text:'sobre', route:'Login'},
                    {text:'configuraçoes', route:'Welcome'}
                ]}
            />
        )
    }
});

export default MainNavigator;