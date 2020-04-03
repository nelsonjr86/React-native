import React, { useState, useEffect } from 'react';
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

const Input =styled.TextInput`
    font-size:15px;
    border:1px solid #000;
    width:200px;
    height:50px;
`;

const TituloLogo = styled.Image`
    width:30px;
    height:30px;
`;

const Screen = (props) => {
    const [nome, setNome] = useState('');

    const mudarBG = () =>{
        props.navigation.setParams({
            bg:nome
        });
    }

    const fazerLogin = () =>{
        props.navigation.navigate('Login',{nome});
    }

    useEffect(()=>{
        props.navigation.setParams({
            titulo:nome
        })
    }, [nome] );

    return (
        <Page>
            <Texto>{props.navigation.state.params.titulo}</Texto>

            <Input value={nome} onChangeText={e=>setNome(e)} />

            <Botao title="Mudar BG do Header" onPress={mudarBG} />
            <Botao title="Fazer Login" onPress={fazerLogin} />
        </Page>
    )
}

Screen.navigationOptions = ({navigation}) => {
    let bg = '#EEE';
    if(navigation.state.params && navigation.state.params.bg){
        bg = navigation.state.params.bg;
    }


    return {
        title:navigation.state.params.titulo,
        headerStyle:{
            backgroundColor:bg
        }
    }
};

export default Screen;