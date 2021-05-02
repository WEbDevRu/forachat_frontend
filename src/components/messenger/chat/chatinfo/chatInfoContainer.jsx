import React, {useEffect} from "react";
import ChatInfo from "./chatInfo";
import {connect} from "react-redux";
import {setOnlineUsers} from "../../../../redux/chat-reducer"

const ChatInfoContainer = (props) =>{
    useEffect(()=>{
        props.socketRef.on('chat/ONLINE_USERS',(data)=>{
            props.setOnlineUsers(data)
        })
    }, [])

    return (

        <ChatInfo onlineUsers={props.onlineUsers} chatName={props.chatName} chatColor={props.chatColor} membersCount={props.membersCount} chatId={props.chatId}/>

    )
}


let mapStateToProps = (state) =>{
    return{
        chatId: state.chat.chatId,
        chatName: state.chat.chatName,
        chatColor: state.chat.avatarColor,
        membersCount: state.chat.membersCount,
        onlineUsers: state.chat.onlineUsers
    }
}



export default connect(mapStateToProps, {setOnlineUsers})(ChatInfoContainer)
