import style from '../Root.module.css';

function Login({inputs, setInputs, handleSubmit, error}) {
    return (
    <form className={style.form} id='key' name='key' onSubmit={handleSubmit}>
        <div className={style.key_input}>
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

        <div className={style.key_input}>
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

        <p className='error'> {error !== '' ? error : null} </p>

    <button className={style.submit_button} type='submit'>Submit</button>

    </form>
    )

}

export default Login;