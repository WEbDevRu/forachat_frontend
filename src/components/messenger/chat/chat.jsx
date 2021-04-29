import React from "react";
import MessagesContainer from "./messages/messagesContainer";
import InputPanelContainer from "./inputpanel/inputPanelContainer";

const Chat = (props) =>{
    return (

        <div>
            <MessagesContainer />
            <InputPanelContainer />
        </div>

    )
}




export default Chat