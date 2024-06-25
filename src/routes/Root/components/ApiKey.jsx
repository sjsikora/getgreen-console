import style from "../Root.module.css";

function ApiKey({inputs, setInputs, handleSubmit, error}) {
    return (
    <form className={style.form} id='key' name='key' onSubmit={handleSubmit}>
        <div className={style.key_input}>
            <label htmlFor="apiKey">API Key</label>
            <input
                type="text"
                id="apiKey"
                name="apiKey"
                placeholder="Enter API Key"
                value={inputs["apiKey"]}
                onChange={(e) => setInputs({...inputs, apiKey: e.target.value})}
                />
        </div>

        <p className="error"> {error !== '' ? error : null} </p>
    <button className={style.submit_button} type='submit'>Submit</button>

    </form>
    )

}

export default ApiKey;