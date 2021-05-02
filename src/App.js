import './App.css';
import {Route, Switch, useParams} from "react-router-dom";
import Messenger from "./components/messenger/messenger";
import RegistrationContainer from "./components/registration/registrationContainer";
import {connect} from "react-redux";
import Loading from "./components/common/loading";
import {useEffect, useRef} from "react";
import socketIOClient from "socket.io-client";
import {toggleIsInitialized} from "./redux/app-reducer";
import {toggleIsAuth, setAuthInfo} from "./redux/auth-reducer";
import {getCookie} from "./components/common/utils";
import {setCurrentChatInfo} from "./redux/chat-reducer"
import Join from "./components/join/join";
const SOCKET_SERVER_URL = "http://localhost:8081";



const App  = (props) => {


    let {chatId} = useParams()
    const socketRef = useRef();


    useEffect(() => {


        // Creates a WebSocket connection
        socketRef.current = socketIOClient(SOCKET_SERVER_URL);


        if (getCookie('token')) {
            socketRef.current.emit("auth/AUTH", {
                token: getCookie('token')
            })
            socketRef.current.on('auth/AUTH_INFO', (data) => {
                props.setAuthInfo(data)
                props.setCurrentChatInfo(data.chats[0])
                props.toggleIsAuth(true)
                props.toggleIsInitialized()


            })

        } else {
            props.toggleIsAuth(false)
            props.toggleIsInitialized()
        }

        return () => {
            socketRef.current.disconnect();
        };
    }, []);


    return (

        <>
            {props.isInitialized ? <>
                <Route path='/chat/:chatId?' render={() => <Messenger socketRef={socketRef.current}/>}/>
                <Route path='/registration' render={() => <RegistrationContainer socketRef={socketRef.current}/>}/>
                <Route path='/join/:chatId?' render={() => <Join socketRef={socketRef.current}/>}/>
            </> : <Loading/>
            }
        </>


    )
}
let mapStateToProps = (state) =>{
    return{
        isInitialized: state.app.isInitialized,
        isAuth: state.auth.isAuth,
    }
}



export default connect(mapStateToProps, {toggleIsInitialized, toggleIsAuth, setAuthInfo, setCurrentChatInfo})(App)

