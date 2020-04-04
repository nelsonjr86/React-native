import React from 'react';
import styled from 'styled-components/native';
import { StackActions, NavigationAction } from 'react-navigation';

const Conteiner = styled.SafeAreaView`
    flex:1;
    background-color:#FFF;
`;
const Texto = styled.Text`
    font-size:15px;
`;
const Botao = styled.Button``;

const Page = (props) => {

    const handleLogin = () => {
        
        const resetAction = StackActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate('HomeTab')
            ]
        });

        props.navigation.dispatch({routeName:'HomeTab'});
    }

    return (
        <Conteiner>
            <Texto>Pagina de Login</Texto>
            <Botao title="Fazer Login" onPress={handleLogin} />
        </Conteiner>
    )
}

Screen.navigationOptions = () => {
    return {
        title:'Login'        
    }
};

export default Page;