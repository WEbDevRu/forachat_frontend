let initialState = {
    isAuth: false
}


const authReducer =(state =initialState, action) =>{
    switch (action.type){
        case "auth/TOGGLE_IS_AUTH":
            return{
                ...state,
               isAuth: action.isAuth
            }
        default:
            return state
    }
}


export const toggleIsAuth = (isAuth) => ({
    type: "auth/TOGGLE_IS_AUTH",
    isAuth: isAuth
})

export const Auth = () => (dispatch) =>{

    dispatch(toggleIsAuth(true))
}

export  default authReducer
