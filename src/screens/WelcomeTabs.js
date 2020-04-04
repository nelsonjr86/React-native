import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import TabBarIcon from '../componentes/TabBarIcon';


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


const Screen = (props) => {
    const [nome, setNome] = useState('');

    const fazerLogin = () =>{
        props.navigation.navigate('Login');
    }

    useEffect(()=>{
        props.navigation.setParams({
            titulo:nome
        })
    }, [nome] );

    return (
        <Page>
            <Texto>Seja bem vindo(a)</Texto>

            <Input value={nome} onChangeText={e=>setNome(e)} />

            <Botao title="Fazer Login" onPress={fazerLogin} />
        </Page>
    )
}
const Imagem = styled.Image`
    width:30px;
    height:30px;
`;

const TabBarButtonArea = styled.TouchableOpacity`
    flex:1;
    height:50px;
    background-color:#000;
`;
const TabBarButtonText = styled.Text`
    color:#FFF;
`;

Screen.navigationOptions = ({navigation}) => {
    let img = null;

    const TabBarButton = ({ onPress }) => {
        return (
            <TabBarButtonArea onPress={onPress}>
                <TabBarButtonText>...</TabBarButtonText>
            </TabBarButtonArea>
        )
    }

    return {
        tabBarLabel:'Bem vindo(a)',
        tabBarIcon:({focused, tintColor})=>{
            return <TabBarIcon focused={focused} route="WelcomeTabs" badge={5} />           
        },
        tabBarButtonComponent:(props)=><TabBarButton {...props} />
    }
};

export default Screen;