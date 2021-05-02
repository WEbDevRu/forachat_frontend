import React from "react";
import styled  from "styled-components"
import {Avatar} from "../../../common/commonUI";
import {NavLink} from "react-router-dom";
import {formatToAMPM} from "../../../common/utils";

const activeClassName = 'nav-item-active'

const ChatBlock = styled.div`
  width: 100%;
  height: 62px;
  cursor: pointer;
  background: white;
  display: flex;
  justify-content: flex-start;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  box-sizing: border-box;
  padding-top: 7px;
  padding-bottom: 7px;
  
`

const ProfileImageWr = styled.div`
    width: 78px;
    height: 100%;
`



const TextWr = styled.div`
  width: calc(100% - 144px);
  overflow: hidden;
  padding-top: 4px;
`

const ChatName = styled.p`
  font-weight: 700;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 7px;
  color: black;
`

const TimeWr = styled.div`
  width: 66px;
  padding-right: 18px;
  box-sizing: border-box;
  p{
    font-size: 11px;
    line-height: 18px;
    text-align: right;
    color: #b3b3b3;
  }
`

const LastMessage = styled.div`
display: flex;
justify-content: flex-start;
  width: 100%;
  overflow: hidden;
`

const MessageAuthor = styled.p`
  margin-right: 4px;
  color: #517ea5;
  &:after{
    content: ':'
  }
`

const Message = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  
`


const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  &.${activeClassName} {
    color: red !important;
    .chatBlock{
      background: #6490b1;
    }
    .chatName{
      color: white;
    }
    .chatAuthor{
      color: white;
    }
    .chatMessage{
      color: white;
    }
    .chatTime{
      color: white;
    }
  }
 
`;





const ShortChat = (props) => {



    return (

        <StyledNavLink to={'/chat/'+props._id} onClick={()=>{props.changeCurrentChat()}}>
            <ChatBlock className="chatBlock" >
                <ProfileImageWr>
                    <Avatar name={props.name} width="48px" color={props.avatarColor}/>
                </ProfileImageWr>
                <TextWr>
                    <ChatName className="chatName">{props.name}</ChatName>
                    <LastMessage>
                        <MessageAuthor className="chatAuthor">{props.author}</MessageAuthor>
                        <Message className="chatMessage" ariaCurrent={props["aria-current"]}>{props.text}</Message>
                    </LastMessage>
                </TextWr>

                <TimeWr active={props.active}>
                    <p className="chatTime">{formatToAMPM(props.time).hours}</p>
                </TimeWr>
            </ChatBlock>
        </StyledNavLink>


    )
}




export default ShortChat