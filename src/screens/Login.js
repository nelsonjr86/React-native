import React from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex:1;
    justify-content:center;
    align-items:center;
`;
const Texto = styled.Text`
    font-size:20px;
`;
const Botao = styled.Button``;

const Screen = (props) => {

    const voltar = () => {
        props.navigation.goBack();
    }

    return (
        <Page>
            <Texto>Tela de Login</Texto>
            <Texto>Nome: {props.navigation.state.params.nome}</Texto>
            <Botao title="voltar" onPress={voltar} />
        </Page>
    )
}

Screen.navigationOptions = () => {
    return {
        title:'Login'        
    }
};

export default Screen;