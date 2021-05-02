import React, {useEffect, useRef, useState} from "react";
import MessagesContainer from "./messages/messagesContainer";
import InputPanelContainer from "./inputpanel/inputPanelContainer";
import styled from "styled-components";
import ModalContainer from "../../modal/modalContainer";
import ChatInfoContainer from "./chatinfo/chatInfoContainer";
import {getCookie} from "../../common/utils";
import {connect} from "react-redux";
import {setOnlineUsers} from "../../../redux/chat-reducer";


const ChatBlock = styled.div`
width: 69%;
  height: 100%;
`
const Chat = (props) =>{
    let prevChatId = useRef(null)

    useEffect(()=>{
        props.socketRef.emit('chat/ENTER',{chatId: props.chatId, token: getCookie("token")})
        props.socketRef.on('chat/ONLINE_USERS',(data)=>{
            props.setOnlineUsers(data)
        })
    },[])

    useEffect(()=>{
        props.socketRef.emit('chat/ENTER',{chatId: props.chatId, token: getCookie("token")})
        props.socketRef.emit('chat/LEAVE',{chatId: prevChatId.current, token: getCookie("token")})
        prevChatId.current = props.chatId
    },[props.chatId])

    return (

        <ChatBlock>
            <MessagesContainer />
            <InputPanelContainer />
            <ModalContainer>
                <ChatInfoContainer socketRef={props.socketRef}/>
            </ModalContainer>
        </ChatBlock>

    )
}

let mapStateToProps = (state) =>{
    return{}
}



export default connect(mapStateToProps, {setOnlineUsers})(Chat)
