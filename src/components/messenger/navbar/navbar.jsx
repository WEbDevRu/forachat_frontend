import React from "react";
import NavLogo from "./navbarlogo/navbarlogo";
import ChatNavbarContainer from "./chatnavbar/chatnavbarContainer";

const Navbar = (props) =>{
    return (

        <nav>
            <NavLogo />
            <ChatNavbarContainer />
        </nav>

    )
}




export default Navbar