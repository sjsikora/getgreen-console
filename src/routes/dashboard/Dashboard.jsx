import { useLocation } from "react-router-dom";
import "./Dashboard.css";
import { useState, useEffect } from "react";
import { searchForUser } from "../../logic/ApiCalls";

function Dashboard() {

    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [searchUserResults, setSearchUserResults] = useState({});
    // SUCCESS, USER_NOT_FOUND
    const [responseCode, setResponseCode] = useState("");

    const location = useLocation();


    useEffect(() => {
       let { key } = location.state;
        setApiKey(key);
        console.log('api key is: ', key);
    }, [location]);

    function handleSubmit(e) {
        e.preventDefault();

        searchForUser(apiKey, emailOrUsername).then((response) => {
            console.log('response: ', response);
            setSearchUserResults(response);
            setResponseCode(response.code);
        }).catch((error) => {

            switch(error.message) {
                case 'Request failed with status code 400':
                    setResponseCode('USER_NOT_FOUND');
                    break;
                case 'Request failed with status code 401':
                    setResponseCode('UNAUTHORIZED');
                    break;
                default:
                    setResponseCode('ERROR');
            }

        });

    }


    return <div>
        <div className='findContainer'>

            <div className='findSearchContainer'>

                <h2>
                    Find an Account
                </h2>

                <div>
                    <form className='find-account-form' id='findAccountForm'>
                        <div className="inputAndLabelContainer">
                                <label> Email or Username</label>
                                <input 
                                    type='text'
                                    id='emailOrUsername' 
                                    name='emailOrUsername'
                                    placeholder='john-283939'
                                    value={emailOrUsername}
                                    onChange={(e) => setEmailOrUsername(e.target.value)}
                                    />
                            </div>
                        <button type='submit' onClick={handleSubmit}>Search</button>
                        
                    </form>
                    <div className="errorMessage">
                        {responseCode === 'USER_NOT_FOUND' && 'User not found'}
                        {responseCode === 'UNAUTHORIZED' && 'Unauthorized, please check your API key'}
                    </div>
                </div>
            </div>
            <div className="findResultsContainer">
                <h1> here are the results</h1>
            </div>
        </div>
    </div>
}

export default Dashboard;