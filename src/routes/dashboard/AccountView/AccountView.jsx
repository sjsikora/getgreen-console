import "./AccountView.css";
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getAccountInfo } from "../../../logic/ApiCalls";
import leavesURL from "../../../assets/leaves.png";

function AccountView() {

    const [apiKey, setApiKey] = useState("");
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const navigate = useNavigate();

    const inputsToShow = {
        "authType": "Auth Type",
        "endDate": "Last Login",
        "location": "Location",
        "partnerCode": "Partner Code",
        "startDate": "Start Date",
        "timeAdded": "Time Added",
        "userGuid": "User GUID",
        "userName": "Username",
        "userServiceCode": "User Service Code",
        "userTier": "User Tier",
        "userTierStartDate": "User Tier Start Date",
        "zipCode": "Zip Code"
    }


    useEffect(() => {
        if(location.state === null) navigate('/');
        if(!('user' in location.state)) navigate('/dashboard', { state: { key: location.state.key, token: location.state.token}});
        
        getAccountInfo(location.state.key, location.state.token, location.state.user.guid).then((response) => {
            console.log('response: ', response);
            setData(response);
        }).finally(() => {
            setLoading(false);
        });

    }, [location, navigate]);

    if(loading) return <div> Loading... </div>

    return <div>

        <div className="topView">

            <div className="accountViewContainer drop-shadow">
                <div className="profileImageContainer"> profile image </div>
                <div className="usernameAndEmail">
                    <div className="username">{data["userName"]}</div>
                    <div className="email">{data["email"]}</div>
                </div>
            </div>

            <div className="leafCountContainer drop-shadow">
                <div className="leafCount">{data["totalLeaves"]}</div>
                <div className="leafImage"><img src={leavesURL} width={80} height={80}/></div>
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
                    {Object.entries(inputsToShow).map(([key, value]) => {
                    return (
                        <tr key={key}>
                            <td>{value}</td>
                            <td>{data[key]}</td>
                            <td><span className="material-symbols-outlined">edit</span></td>
                        </tr>
                    );
                })}
                </table>
            </div>
        </div>

        <div className="recentActionsContainer drop-shadow">
            <h2> Recent Actions </h2>
        </div>
    </div>
}

export default AccountView;