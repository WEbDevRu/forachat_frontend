let initialState = {
    chatId: '',
    chatName: '',
    membersCount: '',
    avatarColor: '',
}


const chatReducer =(state =initialState, action) =>{
    switch (action.type){
        case "chat/SET_CURRENT_CHAT_INFO":
            return{
                ...state,
                chatId: action.chatId,
                chatName: action.name,
                avatarColor: action.avatarColor,
                membersCount: action.totalMembers
            }

        default:
            return state
    }
}

export const setCurrentChatInfo = (chat) => ({
    type: "chat/SET_CURRENT_CHAT_INFO",
    chatId: chat._id,
    name: chat.name,
    avatarColor: chat.avatarColor,
    totalMembers: chat.totalMembers
})

export default chatReducer
