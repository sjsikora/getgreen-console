import "./Dashboard.css";
import { useState } from "react";

function Dashboard() {

    const [emailOrUsername, setEmailOrUsername] = useState('');


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
                                    />
                            </div>
                        <button type='submit'>Search</button>
                    </form>
                </div>
            </div>
            <div className="findResultsContainer">
                <h1> here are the results</h1>
            </div>
        </div>
    </div>
}

export default Dashboard;