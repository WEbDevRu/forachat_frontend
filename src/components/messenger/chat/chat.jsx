import React from "react";
import MessagesContainer from "./messages/messagesContainer";
import InputPanelContainer from "./inputpanel/inputPanelContainer";
import styled from "styled-components";

const ChatBlock = styled.div`
width: 69%;
  height: 100%;
`
const Chat = (props) =>{
    return (

        <ChatBlock>
            <MessagesContainer />
            <InputPanelContainer />
        </ChatBlock>

    )
}




export default Chat