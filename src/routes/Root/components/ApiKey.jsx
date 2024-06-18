

function ApiKey({inputs, setInputs, handleSubmit}) {
    return (
    <form className='login-form' id='key' name='key' onSubmit={handleSubmit}>
        <div className="key-input">
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

    <button className='submit-button' type='submit'>Submit</button>

    </form>
    )

}

export default ApiKey;