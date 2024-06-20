import "./AccountView.css";
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getAccountInfo } from "../../../logic/ApiCalls";
import leavesURL from "../../../assets/leaves.png";
import EditButton from "./components/EditButton";
import { updatePartnerCode } from "../../../logic/ChangeFunctions";

function AccountView() {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [inputsToShow, setInputsToShow] = useState({});

    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        if(location.state === null) navigate('/');
        if(!('user' in location.state)) navigate('/dashboard', { state: { key: location.state.key, token: location.state.token}});


        const key = location.state.key;
        const token = location.state.token;
        const email = location.state.user.user.email;
        const guid = location.state.user.user.guid;
        
        getAccountInfo(key, token, guid).then((response) => {
            console.log('response: ', response);
            response["email"] = email;
            setData(response);
        }).finally(() => {
            setInputsToShow({
                "authType": {
                    fullname: "Auth Type",
                    editable: false
                },
                "endDate": {
                    fullname: "Last Login",
                    editable: false
                },
                "location": {
                    fullname: "Location",
                    editable: false
                },
                "partnerCode": {
                    fullname: "Partner Code",
                    editable: true,
                    function: (newPartnerCode) => updatePartnerCode(key, token, email, newPartnerCode)
                },
                "startDate": {
                    fullname: "Start Date",
                    editable: false
                },
                "timeAdded": {
                    fullname: "Time Added",
                    editable: false
                },
                "userGuid": {
                    fullname: "User GUID",
                    editable: false
                },
                "userName": {
                    fullname: "Username",
                    editable: true
                },
                "userServiceCode": {
                    fullname: "User Service Code",
                    editable: true,
                },
                "userTier": {
                    fullname: "User Tier",
                    editable: true
                },
                "userTierStartDate": {
                    fullname: "User Tier Start Date",
                    editable: false
                },
                "zipCode": {
                    fullname: "Zip Code",
                    editable: false 
                },
                "email" : {
                    fullname: "Email",
                    editable: false
                }
            });

            setLoading(false);
        });

        console.log('location.state: ', location.state);

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
                    {Object.entries(inputsToShow).map(([key]) => {
                    return (
                        <tr key={key}>
                            <td>{inputsToShow[key]["fullname"]}</td>
                            <td>{data[key]}</td>
                            <td>{inputsToShow[key]["editable"] ? <EditButton sendInputup={inputsToShow[key]["function"]}/> : null }</td>
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