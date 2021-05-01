import React from "react";
import ShortChat from "./shortchat/shortChat";
import styled  from "styled-components"


const SideBarBlock = styled.div`
    width: 31%;
    box-sizing: border-box;
    height: 100%;
    border-right: 2px solid #E9EBED;
    padding-top: 30px;
`

const SideBar = (props) =>{
    console.log(props)

    let ChatsList = props.chatsList.map((item, index)=> <ShortChat key={item._id}
                                                                   _id={item._id}
                                                                   name={item.name}
                                                                   index={index}
                                                                   time={item.lastMessage.date}
                                                                   author={item.lastMessage.author}
                                                                   text={item.lastMessage.text}
                                                                   avatarColor={item.avatarColor}
    />)


    return (

        <SideBarBlock>


            {ChatsList}


        </SideBarBlock>

    )
}




export default SideBar