import React from "react";
import ChatNavbar from "./chatnavbar";
import {connect} from "react-redux";
import {toggleModalState} from "../../../../redux/app-reducer";

const ChatNavbarContainer = (props) => {
    return (

        <ChatNavbar {...props}  chatName={props.chatName} membersCount={props.membersCount}/>
    )
}

let mapStateToProps = (state) =>{
    return{
        chatName: state.chat.chatName,
        membersCount: state.chat.membersCount
    }
}



export default connect(mapStateToProps, {toggleModalState})(ChatNavbarContainer)
