import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { store, persistor } from './src1/Store';
import MainNavigator from './src1/navigators/MainNavigator';

const AppContainer = createAppContainer(MainNavigator);

export default () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
            <AppContainer />
        </PersistGate>        
    </Provider>
)
