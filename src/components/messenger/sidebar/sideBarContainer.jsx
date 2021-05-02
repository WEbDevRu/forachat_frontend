import React from "react";
import {connect} from "react-redux";
import SideBar from "./sideBar";
import {setCurrentChatInfo} from "../../../redux/chat-reducer"

const SideBarContainer = (props) =>{
    return (
        <SideBar chatsList={props.chatsList} setCurrentChatInfo={props.setCurrentChatInfo}/>
    )
}


let mapStateToProps = (state) =>{
    return{
        chatsList: state.auth.chatsList,
    }
}



export default connect(mapStateToProps, {setCurrentChatInfo})(SideBarContainer)
