import React, {useRef, useState} from "react";
import styled from "styled-components";
import IconsSprite from "../../../../assets/sprite.png"
import ShortUser from "./shortUser";

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

const ProfileImage = styled.div`
  display: block;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #1e98ca;
  margin: auto;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  span{
    color: white;
    font-size: 32px;
    text-align: center;
    display: block;
    line-height: 72px;
  }
 
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

const ClickToCopy = styled.div`

`

const ClickToCopyRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
const ClickToCopyInput = styled.input`
  border: 0px;
  appearance: none;
  border-radius: 0px;
  outline: none;
  margin-bottom: 10px;
  margin-top: 10px;
;
`
const ClickToCopyButton = styled.button`
  color: #8c8c8c;
  font-size: 13px;
  line-height: 13px;
  height: 13px;
  border-radius: 0;
  min-width: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover{
    color: #8c8c8c;
    text-decoration: underline;
  }
`

const CopiedBadge = styled.p`
line-height: 13px;
  margin-left: 10px;
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

    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    let copyToClipboard = (e) =>{
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('copied');
        setTimeout(()=>{setCopySuccess('')}, 3000)
    };




    return (


        <ChatInfoBlock>
            <Header>
                <ChatMainInfo>
                    <ProfileImageWr>
                        <ProfileImage>
                            <span>НК</span>
                        </ProfileImage>
                    </ProfileImageWr>
                    <MainInfoWr>
                        <ChatName>Chat</ChatName>
                        <ChatCount>24977 members</ChatCount>
                    </MainInfoWr>
                </ChatMainInfo>
            </Header>
            <InviteBlock>
                <InviteIcon>
                    <i />
                </InviteIcon>
                <InviteText>
                    <InviteP>Invite link</InviteP>
                    <ClickToCopy>

                            <ClickToCopyInput onClick={(e)=>{e.target.select()}} ref={textAreaRef} value="https://trackyour.site" />
                            <ClickToCopyRow>
                                <ClickToCopyButton primary onClick={copyToClipboard}>Click to copy</ClickToCopyButton>
                                {copySuccess === 'copied' ? <CopiedBadge>Copied</CopiedBadge> : ''}
                            </ClickToCopyRow>


                    </ClickToCopy>
                </InviteText>

            </InviteBlock>
            <Divider />
            <UsersBlock>
                <UsersIcon>
                    <i />
                </UsersIcon>
                <UsersList>
                    <ShortUser />
                    <ShortUser />
                    <ShortUser />
                </UsersList>
            </UsersBlock>

        </ChatInfoBlock>

    )
}




export default ChatInfo