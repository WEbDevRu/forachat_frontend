import React from "react";
import {connect} from "react-redux";
import SideBar from "./sideBar";


const SideBarContainer = (props) =>{
    return (
        <SideBar chatsList={props.chatsList}/>
    )
}


let mapStateToProps = (state) =>{
    return{
        chatsList: state.auth.chatsList,
    }
}



export default connect(mapStateToProps, {})(SideBarContainer)
