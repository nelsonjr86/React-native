import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    flex:1;
`;
const Texto = styled.Text`
    font-size:15px;
`;
const Botao = styled.Button``;

const Page = (props) => {
    return(
        <Container>
            <Texto>Pagina Home</Texto>

            <Botao title="Sair" onPress={()=>props.navigation.navigate('Perfil')} />
        </Container>
    );
}

Page.navigationOptions = () =>{
    return{
        title:'Home'
    };
}

export default Page;