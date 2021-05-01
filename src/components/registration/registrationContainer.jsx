import Registration from "./registration";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {setAuthInfo, toggleIsAuth} from "../../redux/auth-reducer";

const RegistrationContainer = (props) =>{





    return (
        <>
            {props.isAuth ? <Redirect to='/chat' /> : <Registration socketRef={props.socketRef}
                                                                    setAuthInfo={props.setAuthInfo}
                                                                    toggleIsAuth={props.toggleIsAuth}/>}
        </>



    )
}


let mapStateToProps = (state) =>{
    return{
            isAuth: state.auth.isAuth
    }
}



export default connect(mapStateToProps, {setAuthInfo, toggleIsAuth})(RegistrationContainer)
