import style from "./AccountView.module.css"; 
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getAccountInfo } from "../../../logic/ApiCalls";
import leavesURL from "../../../assets/leaves.png";
import EditButton from "./components/EditButton";
import { updatePartnerCode, sendResetPasswordEmail } from "../../../logic/ChangeFunctions";
import BackButton from "./components/BackButton";

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
            // This is a checky little work around because we want the password field to have a row to send reset password
            response["password"] = "********"; 
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
                    function: (inputs) => updatePartnerCode(key, token, email, inputs),
                    dataRequired: {
                        newPartnerCode: {
                            fullname: "New Partner Code",
                        },
                        newProjectId: {
                            fullname: "New Project ID",
                        }
                    }
                },
                "password": {
                    fullname: "Password",
                    editable: true,
                    function: () => sendResetPasswordEmail(key, email),
                    dataRequired: {}
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
                    editable: false
                },
                "userServiceCode": {
                    fullname: "User Service Code",
                    editable: false,
                },
                "userTier": {
                    fullname: "User Tier",
                    editable: false
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

    }, [location, navigate]);

    console.log('data: ', data);

    if(loading) return <div> Loading... </div>

    return <div>

    <div className={style.topView}>

        <div className={style.backAndQuickViewContainer}>

            <div className={style.backContainer}>
                <BackButton handleBack={() => navigate('/dashboard', {state : {key: location.state.key, token: location.state.token}})}/>
            </div> 

            <div className={style.accountViewContainer + " drop-shadow"}>
                <div className={style.profileImageContainer}>
                    {data["profileImage"] === "" ? <div>No Image</div> : <img src={data["profileImage"]} width={60} height={60} />}
                </div>
                <div className={style.usernameAndEmail}>
                    <div className={style.username}>{data["userName"]}</div>
                    <div className={style.email}>{data["email"]}</div>
                </div>
            </div>

        </div>

        <div className={style.leafCountContainer + " drop-shadow"}>
            <div className={style.leafCount}>{data["totalLeaves"]}</div>
            <div className={style.leafImage}><img src={leavesURL} width={50} height={50}/></div>
        </div>
    </div>


    <div className={style.accountInfoContainer + " drop-shadow"}>
        <h2> Account information </h2>
        <div className={style.tableContainer}>
            <table className={style.accountTable}>
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
                        <td>{inputsToShow[key]["editable"] ? 
                            <EditButton sendInputup={inputsToShow[key]["function"]} 
                                        dataRequired={inputsToShow[key]['dataRequired']} 
                                        subjectFullName={inputsToShow[key]["fullname"]} /> : null }</td>
                    </tr>
                );
                })}

            </table>
        </div>
    </div>

    <div className={style.recentActionsContainer + " drop-shadow"}>
        <h2> Recent Actions </h2>
        <div>
        {data?.activityChallenges ?
            <table className={style.recentActionsTable}>
                <tr>
                    <th>Action</th>
                    <th>Time</th>
                    <th>Difficulty</th>
                    <th>Leaves</th>
                </tr>

                {data["activityChallenges"].map((activity) => {

                    return (
                        <tr key={activity["action"]["id"]}>
                            <td>{activity["action"]["title"]}</td>
                            <td>{activity["activityTime"]}</td>
                            <td>{activity["action"]["effortLevel"]}</td>
                            <td> 
                                <div className={style.leafCell}>

                                <div> {activity["leafValue"]} </div> 
                                <div className={style.leafImage}><img src={leavesURL} width={40} height={40}/> </div>
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </table>

        : <div> No actions have been completed on this account </div>}

        </div>
    </div>
</div>
}
export default AccountView;