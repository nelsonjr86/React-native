import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    flex:1;
    background-color:#FFF;
`;
const Texto = styled.Text`
    font-size:15px;
`;
const Botao = styled.Button``;

const Page = (props) => {
    return(
        <Container>
            <Texto>Pagina Home</Texto>

            <Botao title="Fulano" onPress={()=>props.navigation.navigate('Perfil')} />

            <Botao title="Abrir Drawer" onPress={()=>props.navigation.openDrawer()} />
        </Container>
    );
}

Page.navigationOptions = () =>{
    const DrawerImage = styled.Image`
        width:25px;
        height:25px;
    `;

    return{
        title:'Home',
        drawerIcon:({focused, tintColor})=>(
            <DrawerImage focused={focused?require('../images/home-action.png'):require('../images/home-black.png')} />
        )
    };
}

export default Page;