import { useState } from 'react';
import logoURL from "../../assets/large_logo.png";
import { useNavigate} from 'react-router-dom';
import ApiKey from './components/ApiKey';
import './Root.css';
import Login from './components/Login';
import { landingPageLogin } from '../../logic/ApiCalls';
/*
  This is the landing page. We need to get the API key from the user and
  an account login. We then pass this to our dashboard.
*/
function Root() {

  const [inputs, setInputs] = useState({apiKey: "", userNameOrEmail: "", password: ""});
  const [focusedOnApiKey, setFocusedOnApiKey] = useState(true);

  const navigate = useNavigate();

  const handleSubmitApiKey = (e) => {
    e.preventDefault();
    setFocusedOnApiKey(false);
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    landingPageLogin(inputs['apiKey'], inputs['userNameOrEmail'], inputs['password']).then((response) => {
      navigate('/dashboard', { state: { key: inputs["apiKey"], token: response.accessToken}});
    }).catch((error) => {
      console.log('error: ', error);
    });
    
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
