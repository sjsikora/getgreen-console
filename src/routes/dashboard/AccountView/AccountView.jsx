import "./AccountView.css";
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

function AccountView() {

    const [apiKey, setApiKey] = useState("");
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(location.state === null) navigate('/');
        if(!('user' in location.state)) navigate('/dashboard', { state: { key: location.state.key }});
        setApiKey(location.state.apiKey);
        setData(location.state.user);
        console.log('data: ', location.state.user);




        setLoading(false);
    }, [location, navigate]);

    if(loading) return <div> Loading... </div>

    return <div>

        <div className="topView">

            <div className="accountViewContainer drop-shadow">
                <div className="profileImageContainer"> profile image </div>
                <div className="usernameAndEmail">
                    <div className="username">{data["user"]["userName"]}</div>
                    <div className="email">{data["user"]["email"]}</div>
                </div>
            </div>

            <div className="leafCountContainer drop-shadow">
                <div className="leafCount">leaf count</div>
                <div className="leafImage"> leaf image</div>
            </div>
        </div>


        <div className="accountInfoContainer drop-shadow">
            <h2> Account information </h2>
            <div className="tableContainer">
                <table className="accountTable">
                    <tr>
                        <th>Field</th>
                        <th>Data</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Partner Code</td>
                        <td>hello</td>
                        <td> <span className="material-symbols-outlined"> edit </span> </td>
                    </tr>
                </table>
            </div>
        </div>

        <div className="recentActionsContainer drop-shadow">
            <h2> Recent Actions </h2>
        </div>
    </div>
}

export default AccountView;