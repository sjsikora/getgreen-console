import "./AccountView.css";

function AccountView() {
    return <div>

        <div className="topView">

            <div className="accountViewContainer drop-shadow">
                <div className="profileImageContainer"> profile image </div>
                <div className="usernameAndEmail">
                    <div className="username">username</div>
                    <div className="email">email</div>
                </div>
            </div>

            <div className="leafCountContainer drop-shadow">
                <div className="leafCount">leaf count</div>
                <div className="leafImage"> leaf image</div>
            </div>
        </div>


        <div className="accountInfoContainer drop-shadow">
            <h2> Account information </h2>
        </div>

        <div className="recentActionsContainer drop-shadow">
            <h2> Recent Actions </h2>
        </div>
    </div>
}

export default AccountView;