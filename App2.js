import React, {useState} from 'react';
import { View ,Text, Button } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex:1;
    justify-content:center;
    align-items:center;
`;

const Header = styled.View`
    flex-direction:row;
    justify-content:center;
    align-items:flex-end;
    background-color:#EEE;
    height:200px;
`;

const Input = styled.TextInput`
    width:200px;
    height:40px;
    border:1px solid #000;
`;

const Quadrado = styled.View`
    width:200px;
    height:200px;
    justify-content:center;
    align-items:center;
    border:3px dashed #000;
    margin-top:30px;
`;

const Hello = () => {
    const [ name, setName ] = useState('Arquivox');
    const [ mostrar, setMostrar ] = useState(false);

    const handleClick = () => {
        setMostrar(!mostrar);
    }

    return (
        <View>
            <Input value={name} onChangeText={t=>setName(t)}/>
            
            <Button title={mostrar ? 'Ocultar Nome' : 'Mostrar Nome'} onPress={handleClick} />
            
            {mostrar && 
                <Quadrado>
                    <Text>Seu Nome é:</Text>
                    <Text>{name}</Text>
                </Quadrado>
            }
            
        </View>
    );
}

export default () => {
    return (
        <Page>
            <Hello />
        </Page>
    );
}
