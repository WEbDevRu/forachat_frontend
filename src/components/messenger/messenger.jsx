import React from "react";
import Navbar from "./navbar/navbar";
import Chat from "./chat/chat";
import SideBar from "./sidebar/sideBar";

const Messenger = (props) =>{
    return (

    <div>
        <Navbar />
        <SideBar />
        <Chat />
    </div>

    )
}




export default Messenger