import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import Store from './src1/Store';
import MainNavigator from './src1/navigators/MainNavigator';

const AppContainer = createAppContainer(MainNavigator);

export default () => (
    <Provider store={Store}>
        <AppContainer />
    </Provider>
)
