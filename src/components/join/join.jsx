import React, {useEffect, useState, useRef} from "react";
import Loading from "../common/loading";
import {Redirect, useParams} from "react-router-dom";
import {getCookie} from "../common/utils";
import {connect} from "react-redux";
import {setAuthInfo} from "../../redux/auth-reducer";


const Join = (props) =>{
    let {chatId} = useParams()
    let [redirect, setRedirect] = useState(false)

    useEffect(()=>{
        props.socketRef.emit('chat/JOIN', {token: getCookie('token'), chatId: chatId})
        props.socketRef.on('chat/JOIN_ERROR', (data)=>{
            console.log('error')
            setRedirect(true)
        })

        props.socketRef.on('chat/JOIN_SUCCESS', (data)=>{
            props.socketRef.emit("auth/AUTH", {
                token: getCookie('token')
            })
            props.socketRef.on('auth/AUTH_INFO', (data) => {
                props.setAuthInfo(data)
                setRedirect(true)
            })


        })
    },[])
    return (
        <>
            {redirect === true ? <Redirect to='/chat' /> : ''}
        {
            props.isAuth ? <Loading />
                :
                <Redirect to='/registration'/>
        }
        </>


    )
}


let mapStateToProps = (state) =>{
    return{
        isAuth: state.auth.isAuth
    }
}



export default connect(mapStateToProps, {setAuthInfo})(Join)
