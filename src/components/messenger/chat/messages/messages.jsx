import React from "react";
import Message from "./message";
import styled from "styled-components";
import { Scrollbars } from 'react-custom-scrollbars';
const MessagesBlock = styled.div`
  width: 100%;
  height: calc(100% - 128px);
  overflow-x: hidden;
  overflow-y: auto;
`

const MessagesWr = styled.div`
    max-width: 530px;
    padding-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
    margin: auto;
`

const Messages = (props) =>{



    console.log(props.messages)
        let messagesList = props.messages.map((item)=> <Message name={item.message.creatorName}
                                                                time={item.message.date}
                                                                text={item.message.text}
                                                                creatorColor={item.message.creatorColor}/>)




    return (


        <MessagesBlock>
           <MessagesWr>
                   {messagesList}
           </MessagesWr>
        </MessagesBlock>

    )
}




export default Messages