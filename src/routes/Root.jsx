import { useState } from 'react';
import logoURL from "../assets/large_logo.png";
import { useNavigate} from 'react-router-dom';

import './Root.css';

function Root() {

  const [apiKey, setApiKey] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard', { state: { key: apiKey } });
  
  }


  return (
    <div className='container'>
        <img className='logo' id='logo' src={logoURL} alt='GetGreen Logo' width={400}/>
        <div className='text-container drop-shadow'>
            <form className='api-key-form' id='key' name='key' onSubmit={handleSubmit}>
                <div className="key-input">
                    <label htmlFor="apiKey">API Key</label>
                    <input
                        type="text"
                        id="apiKey"
                        name="apiKey"
                        placeholder="Enter API Key"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        />
                </div>
                <button className='submit-button' type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Root; 
