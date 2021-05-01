import './App.css';
import  {Route, Switch} from "react-router-dom";
import Messenger from "./components/messenger/messenger";
import RegistrationContainer from "./components/registration/registrationContainer";
import {connect} from "react-redux";
import Loading from "./components/common/loading";
import {useEffect, useRef} from "react";
import socketIOClient from "socket.io-client";
import {toggleIsInitialized} from "./redux/app-reducer";
import {toggleIsAuth, setAuthInfo} from "./redux/auth-reducer";
const SOCKET_SERVER_URL = "http://localhost:8081";



const App  = (props) =>{
    let getCookie = (name) =>{
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    const socketRef = useRef();


    useEffect(() => {

        // Creates a WebSocket connection
        socketRef.current = socketIOClient(SOCKET_SERVER_URL);


        if(getCookie('token')){
            socketRef.current.emit("auth/AUTH", {
                token: getCookie('token')
            })
            socketRef.current.on('auth/AUTH_INFO', (data)=>{
                console.log(data)
                props.setAuthInfo(data)
                props.toggleIsAuth(true)
                props.toggleIsInitialized()


            })

        }
        else{
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
              <Route path='/chat:chatId?'  render={()=> <Messenger />}/>
              <Route path='/registration' render={()=><RegistrationContainer socketRef={socketRef.current}/>}/>
          </> : <Loading />
          }
      </>


  )
}

let mapStateToProps = (state) =>{
    return{
        isInitialized: state.app.isInitialized,
        isAuth: state.auth.isAuth
    }
}



export default connect(mapStateToProps, {toggleIsInitialized, toggleIsAuth, setAuthInfo})(App)

