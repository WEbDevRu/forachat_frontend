import messenger from "../components/messenger/messenger";

let initialState = {
    chatId: '',
    chatName: '',
    membersCount: '',
    avatarColor: '',
    onlineUsers: [],
    messages: []
}


const chatReducer =(state =initialState, action) =>{
    switch (action.type){
        case "chat/SET_CURRENT_CHAT_INFO":
            return{
                ...state,
                chatId: action.chatId,
                chatName: action.name,
                avatarColor: action.avatarColor,
                membersCount: action.totalMembers,
                messages: []
            }
        case "chat/SET_ONLINE_USERS":
            return {
                ...state,
                onlineUsers: action.users.list
            }
        case "chat/ADD_MESSAGES":{
            return {
                ...state,
                messages: [...state.messages, action.messages]
            }

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

export const setOnlineUsers = (users) =>({
    type: "chat/SET_ONLINE_USERS",
    users: users
})

export const addMessages = (messages) => ({
    type: "chat/ADD_MESSAGES",
    messages: messages
})

export default chatReducer
