import { useState } from 'react';
import logoURL from "../../assets/large_logo.png";
//import { useNavigate} from 'react-router-dom';
import ApiKey from './components/ApiKey';
//import Login from './components/Login';

import './Root.css';
import Login from './components/Login';
/*
  This is the landing page. We need to get the API key from the user and
  an account login. We then pass this to our dashboard.
*/
function Root() {

  const [inputs, setInputs] = useState({apiKey: "", userNameOrEmail: "", password: ""});
  const [focusedOnApiKey, setFocusedOnApiKey] = useState(true);

  //const navigate = useNavigate();

  const handleSubmitApiKey = (e) => {
    e.preventDefault();
    setFocusedOnApiKey(false);
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault();


  }


  return (
    <div className='container'>
        <img className='logo' id='logo' src={logoURL} alt='GetGreen Logo' width={400}/>
        <div className='text-container drop-shadow'>
          {focusedOnApiKey ? <ApiKey inputs={inputs} setInputs={setInputs} handleSubmit={handleSubmitApiKey}/> 
                            : <Login inputs={inputs} setInputs={setInputs} handleSubmit={handleSubmitLogin}/> }
          
        </div>
    </div>
  )
}

export default Root; 
