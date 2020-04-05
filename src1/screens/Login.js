import React from 'react';
import styled from 'styled-components/native';
import { StackActions, NavigationActions } from 'react-navigation';

const Container = styled.SafeAreaView`
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
                NavigationActions.navigate({routeName:'HomeTab'})
            ]
        });
        props.navigation.dispatch(resetAction);
    }

    return (
        <Container>
            <Texto>Pagina de Login</Texto>
            <Botao title="Fazer Login" onPress={handleLogin} />
        </Container>
    )
}

Page.navigationOptions = () => {
    return {
        title:'Login'        
    }
};

export default Page;