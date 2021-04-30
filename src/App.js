import './App.css';
import  {Route, Switch} from "react-router-dom";
import Messenger from "./components/messenger/messenger";
import RegistrationContainer from "./components/registration/registrationContainer";

const App  = () =>{
  return (
    <>
      <Route path='/chat' render={()=> <Messenger />}/>
      <Route path='/registration' render={()=><RegistrationContainer />}/>

    </>
  )
}

export default App;
