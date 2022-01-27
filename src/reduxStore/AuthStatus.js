const initialState = { 
    isLogged: false
}

const AuthReducer = (AuthState = initialState, action) => {

    switch (action.type){
        case "LOG":
            return { ...AuthState, isLogged: action.payload.isLogged}

        
        default:
            return AuthState;
    }
};

export default AuthReducer;