import React from 'react';
import { connect } from 'react-redux';
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

            <Texto>Nome: {props.name} </Texto>

            <Botao title="Sair" onPress={()=>props.navigation.navigate('Perfil')} />
        </Container>
    );
}

Page.navigationOptions = () =>{
    return{
        title:'Home'
    };
}

const mapStateToProps = (state) => {
    return{
        name:state.userReducer.name,
        email:state.userReducer.email,
        idade:state.userReducer.idade
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        setName:(name) => dispatch({type:'SET_NAME', payload:{name}})
    };
};

export default connect(mapStateToProps, mapDispatchToProps )(Page);