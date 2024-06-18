import "./AccountView.css";

function AccountView() {

    const data = {
        "code": "200",
        "message": "Hello, this is a message",
        "user": {
          "authType": "Apple",
          "email": "johnDoe@gmail.com",
          "firstName": "John",
          "guid": "3028302930293",
          "lastName": "Doe",
          "userName": "johndoe1234"
        }
    };





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