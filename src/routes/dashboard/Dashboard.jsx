import "./Dashboard.css";
import { useState, useEffect } from "react";
import { searchForUser } from "../../logic/ApiCalls";
import { useNavigate, useLocation } from 'react-router-dom';
import SearchResult from "./components/SearchResult";

function Dashboard() {

    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [token, setToken] = useState(''); // This is the access token for the user that is returned from the login
    const [searchUserResults, setSearchUserResults] = useState({});
    const [responseCode, setResponseCode] = useState(""); // SUCCESS, USER_NOT_FOUND, UNAUTHORIZED, ERROR

    const location = useLocation();
    const navigate = useNavigate();


    // On first load of this page, get the API key from the location state. 
    // If it is not there, navigate back to the root page
    useEffect(() => {
        if (location.state === null) navigate('/');

        console.log('location.state: ', location.state);
        setApiKey(location.state.key);
        setToken(location.state.token);

    }, [location, navigate]);

    // When the user submits the form, search for the user
    async function handleSubmit(e) {
        e.preventDefault();

        await searchForUser(apiKey, emailOrUsername).then((response) => {
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

    const onEditAccountClick = (e) => {
        e.preventDefault();

        navigate('/dashboard/account-view', { state: { key: apiKey, user: searchUserResults, token: token} });
        console.log('Edit account clicked');

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
                        {responseCode === 'USER_NOT_FOUND' ? <p> User Not found</p> : null}
                        {responseCode === 'UNAUTHORIZED' ? <p> Unauthorized, please check your API key: <a href='/'> go back.</a> </p> : null}
                        {responseCode === 'ERROR' ? <p> An unkown error occurred, please try again later </p> : null}
                    </div>  
                </div>
            </div>
            {/* Here are the results from the search. It is handedled in SearchResult comp*/}
            <div className="findResultsContainer">
                <SearchResult searchUserResults={searchUserResults} onClick={onEditAccountClick} />
            </div>
        </div>
    </div>
}

export default Dashboard;