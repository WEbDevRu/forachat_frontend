import React from "react";
import InputPanel from "./inputpanel";
import {connect} from "react-redux";

const InputPanelContainer = (props) =>{
    return (
            <InputPanel name={props.name}
                        avatarColor={props.avatarColor}
                        chatName={props.chatName}
                        chatColor={props.chatColor}
            />
    )
}


let mapStateToProps = (state) =>{
    return{
        name: state.auth.name,
        avatarColor: state.auth.avatarColor,
        chatName: state.chat.chatName,
        chatColor: state.chat.avatarColor
    }
}



export default connect(mapStateToProps, {})(InputPanelContainer)
