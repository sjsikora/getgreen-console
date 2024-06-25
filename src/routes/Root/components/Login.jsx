

function Login({inputs, setInputs, handleSubmit, error}) {
    return (
    <form className='login-form' id='key' name='key' onSubmit={handleSubmit}>
        <div className="key-input">
            <label htmlFor="apiKey">Username or Email</label>
            <input
                type="text"
                id="userNameOrEmail"
                name="userNameOrEmail"
                placeholder="Enter Username or Email"
                value={inputs["userNameOrEmail"]}
                onChange={(e) => setInputs({...inputs, userNameOrEmail: e.target.value})}
                />
        </div>

        <div className="key-input">
            <label htmlFor="apiKey">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={inputs["password"]}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
                />
        </div>

        <p> {error !== '' ? error : null} </p>

    <button className='submit-button' type='submit'>Submit</button>

    </form>
    )

}

export default Login;