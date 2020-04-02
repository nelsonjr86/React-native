import React, {useState , useEffect} from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex:1;
    justify-content:center;
    align-items:center;
    background-color:#EEE;
`;
const  Box = styled.View`
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.5);
    justify-content:center;
    align-items:center;
`;
const BoxBody = styled.View`
    width:90%;
    height:200px;
    background-color:#FFF;
    border-radius:10px;
`;
const Botao = styled.Button``;

export default () => {
    const [ modalVisible, setModalVisible ] = useState(false);

     return (
        <Page>
            <Botao title="Mostrar Modal" onPress={()=>setModalVisible(true)} />

            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={false}
                onRequestClose={()=>setModalVisible(false)}
            >
                <Box>
                    <BoxBody>
                        <Botao title="Fechar" onPress={()=>setModalVisible(false)} />
                    </BoxBody>
                </Box>
            </Modal>
        </Page>        
    );
}
