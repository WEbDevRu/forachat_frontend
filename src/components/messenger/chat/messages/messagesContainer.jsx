import React, {useEffect} from "react";
import Messages from "./messages";
import {connect} from "react-redux";
import {addMessages} from "../../../../redux/chat-reducer"


const MessagesContainer = (props) =>{
    useEffect(()=>{

        props.socketRef.on('chat/NEW_MESSAGE_POSTED', (data)=>{
            props.addMessages(data)
        })
    },[])
    return (
            <Messages messages={props.messages}/>
    )
}

let mapStateToProps = (state) =>{
    return{
        messages: state.chat.messages
    }
}



export default connect(mapStateToProps, {addMessages})(MessagesContainer)

