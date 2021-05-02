import React from "react";
import ChatInfo from "./chatInfo";
import {connect} from "react-redux";


const ChatInfoContainer = (props) =>{
    return (

        <ChatInfo chatName={props.chatName} chatColor={props.chatColor} membersCount={props.membersCount} chatId={props.chatId}/>

    )
}


let mapStateToProps = (state) =>{
    return{
        chatId: state.chat.chatId,
        chatName: state.chat.chatName,
        chatColor: state.chat.avatarColor,
        membersCount: state.chat.membersCount
    }
}



export default connect(mapStateToProps, {})(ChatInfoContainer)
