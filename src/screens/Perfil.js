import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    flex:1;
    background-color:#FFF;
`;
const Texto = styled.Text`
    font-size:15px;
`;

const Page = (props) => {
    return(
        <Container>
            <Texto>Pagina Perfil</Texto>
        </Container>
    );
}

Page.navigationOptions = () =>{
    const DrawerSquare = styled.View`
        width:25px;
        height:25px;
        background-color:#000;
    `;

    return{
        title:'Perfil',
        drawerIcon:({focused, tintColor})=>(
            <DrawerSquare></DrawerSquare>
        )
    };
}

export default Page;