let initialState = {
    modalIsOpen:  false
}


const appReducer =(state =initialState, action) =>{
    switch (action.type){
        case "app/TOGGLE_MODAL":
            return{
                ...state,
                modalIsOpen: action.isOpen
            }
        default:
            return state
    }
}


export const toggleModalState = (isOpen) => ({
    type: "app/TOGGLE_MODAL",
    isOpen: isOpen
})


export  default appReducer
