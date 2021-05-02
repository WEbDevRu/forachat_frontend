import React, {useRef, useState} from "react";
import styled from "styled-components";
import {Avatar} from "../../../common/commonUI";
import {getCookie} from "../../../common/utils";
const InputPanelBlock = styled.div`
  width: 100%;
  height: 128px;
  background: white;
`

const InputPanelLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 524px;
  padding-top: 20px;
`

const YourProfileImageWr = styled.div`
  width: 52px;
  margin-right: 15px;
`

const ChatProfileImageWr = styled.div`
  width: 52px;
  margin-left: 15px;
`

const ChatForm = styled.div`
width: calc(100% - 134px);
`


const MessageTextarea = styled.textarea`
  font-family: inherit;
  width: 100%;
  height: 60px;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  border-bottom: 1px solid #d2dbe3;
  outline: none;
  border-radius: 0px;
  resize: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  min-width: 100%;
  transition: .25s all;

  ::-webkit-input-placeholder {color: #b6bcc2; font-size: 12px;}
  ::-moz-placeholder          {color: #b6bcc2; font-size: 12px;}/* Firefox 19+ */
  :-moz-placeholder           {color: #b6bcc2; font-size: 12px;}/* Firefox 18- */
  :-ms-input-placeholder       {color: #b6bcc2; font-size: 12px;}
  &:focus{
    box-shadow: 0 1px 0 0 #77b7e4;
    border-bottom: 1px solid #77b7e4;
  }
`

const SendButton = styled.button`
  color: #499dd9;
  font-size: 13px;
  line-height: 18px;
  height: 18px;
  border-radius: 0;
  float: right;
  min-width: 0;
  margin-top: 5px;
  width: auto;
  padding: 5px;
  font-weight: bold;
  background: transparent;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  &:hover{
    color: #4693ca;
  }
`

const InputPanel = (props) =>{
    const [inputValue, setInputValue] = useState('')
    const InputRef = useRef(null)
    const sendMessage = () =>{
        if(inputValue.length > 0){
            props.socketRef.emit('chat/NEW_MESSAGE', {token: getCookie('token'), chatId: props.chatId, text: inputValue})
        }
        setInputValue('')

    }





    return (

        <InputPanelBlock>
            <InputPanelLine>
                <YourProfileImageWr>
                    <Avatar name={props.name} width="52px" color={props.avatarColor}/>
                </YourProfileImageWr>
                <ChatForm>
                    <MessageTextarea ref={InputRef} onChange={()=>{setInputValue(InputRef.current.value)}} value={inputValue} type="text" placeholder="Write a message..."/>
                    <SendButton onClick={()=>{sendMessage()}}><span>Send</span></SendButton>
                </ChatForm>
                <ChatProfileImageWr>
                    <Avatar name={props.chatName} width="52px" color={props.chatColor}/>
                </ChatProfileImageWr>

            </InputPanelLine>

        </InputPanelBlock>

    )
}




export default InputPanel