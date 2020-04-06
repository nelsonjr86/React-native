const initialState = {
    name:'ArquivoX',
    email:'arquivox@teste.com',
    idade:90
};

export default (state = initialState, action) => {

    switch(action.type){
        case 'SET_NAME':
            return {...state, name:action.payload.name};
            break;
        case 'SET_EMAIL':
            return {...state, email:action.payload.email};
            break;
        case 'SET_IDADE':
            return {...state, idade:action.payload.idade};
            break;
    }

    return state;
}