import React, {useRef, useState} from "react";
import styled from "styled-components";
import IconsSprite from "../../../../assets/sprite.png"
import ShortUser from "./shortUser";
import {Avatar} from "../../../common/commonUI";
import {ClickToCopy} from "./clickToCopyBlock";

const Header = styled.div`
width: 100%; 
  background: #5580a3;
`

const ChatInfoBlock = styled.div`
    width: 100%;
  `

const ChatMainInfo = styled.div`
  width: calc(100% - 56px);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
  margin: auto;
  padding-top: 24px;
  padding-bottom: 28px;
`

const ProfileImageWr = styled.div`
margin-right: 19px;
  width: 72px;
`


const MainInfoWr = styled.div`
width: calc(100% - 91px);
  
`

const ChatName = styled.p`
  font-size: 14px;
  color: white;
  font-weight: 700;
  padding-top: 15px;
`

const ChatCount = styled.p`
  font-size: 13px;
  color: #ccdeed;
  padding-top: 11px;
`

const InviteBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 20px;
  padding-bottom: 20px;
`

const InviteIcon = styled.div`
  width: 120px;
  i{
    width: 16px;
    height: 16px;
    display: block;
    margin: auto;
    background: url(${IconsSprite});
    background-position: -12px -90px;
  }
`

const InviteText = styled.div`
  width: calc(100% - 120px);
`

const InviteP = styled.p`

`


const Divider = styled.div`
  border-top: 1px solid #dfdfdf;
  min-height: 12px;
  background: #f5f5f5;
  -webkit-box-shadow: inset 0 1px 1px #ededed;
  -moz-box-shadow: inset 0 1px 1px #ededed;
  box-shadow: inset 0 1px 1px #ededed;
`

const UsersBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 15px;
  padding-bottom: 15px;
`

const UsersIcon = styled.div`
  width: 120px;
  i{
    width: 22px;
    height: 14px;
    display: block;
    margin: auto;
    background: url(${IconsSprite});
    background-position: -9px -116px;
  }
`
const UsersList = styled.div`
display: block;
  width: calc(100% - 120px);
`
const ChatInfo = (props) =>{
    console.log(props.onlineUsers)

    let onlineUsers = []
    if(props.onlineUsers){
        onlineUsers = props.onlineUsers.map((item)=> <ShortUser key={item.userId} name={item.name} avatarColor={item.avatarColor}/>)
    }

    return (


        <ChatInfoBlock>
            <Header>
                <ChatMainInfo>
                    <ProfileImageWr>
                        <Avatar name={props.chatName} width="72px" color={props.chatColor}/>
                    </ProfileImageWr>
                    <MainInfoWr>
                        <ChatName>{props.chatName}</ChatName>
                        <ChatCount>{props.membersCount} {props.membersCount === 1 ? 'member' : 'members'}</ChatCount>
                    </MainInfoWr>
                </ChatMainInfo>
            </Header>
            <InviteBlock>
                <InviteIcon>
                    <i />
                </InviteIcon>
                <InviteText>
                    <InviteP>Invite link</InviteP>
                    <ClickToCopy value={"https://trackyour.site/join/"+props.chatId}/>
                </InviteText>

            </InviteBlock>
            <Divider />
            <UsersBlock>
                <UsersIcon>
                    <i />
                </UsersIcon>
                <UsersList>
                    {onlineUsers}
                </UsersList>
            </UsersBlock>

        </ChatInfoBlock>

    )
}




export default ChatInfo