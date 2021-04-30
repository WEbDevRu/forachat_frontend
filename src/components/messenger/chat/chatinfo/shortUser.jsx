import React from "react";
import styled from "styled-components";

const ShortUserBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 14px;
`

const UserAvatarWr = styled.div`
  width: 42px;
  margin-right: 12px;
`

const UserAvatar = styled.div`
width: 42px;
  height: 42px;
  border-radius: 50%;
  border-radius: 50%;
  background: #1e98ca;
  span{
    color: white;
    font-size: 18px;
    text-align: center;
    display: block;
    line-height: 42px;
  }
`

const UserInfoWr = styled.div`
width: calc(100% - 54px);
`
const UserName = styled.p`
  font-weight: 700;
  display: block;
  margin-bottom: 6px;

`

const UserStatus= styled.p`
    color: #3a6d99;
  line-height: 100%;
`

const ShortUser = () =>{
    return(
        <ShortUserBlock>
            <UserAvatarWr>
                <UserAvatar>
                    <span>НК</span>
                </UserAvatar>
            </UserAvatarWr>

            <UserInfoWr>
                <UserName>Nikita Krainev</UserName>
                <UserStatus>online</UserStatus>
            </UserInfoWr>
        </ShortUserBlock>
    )
}
export default ShortUser