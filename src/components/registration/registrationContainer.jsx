import Registration from "./registration";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const RegistrationContainer = (props) =>{





    return (
        <>
            {props.isAuth ? <Redirect to='/chat' /> : <Registration socketRef={props.socketRef}/>}
        </>



    )
}


let mapStateToProps = (state) =>{
    return{
            isAuth: state.auth.isAuth
    }
}



export default connect(mapStateToProps, {})(RegistrationContainer)
