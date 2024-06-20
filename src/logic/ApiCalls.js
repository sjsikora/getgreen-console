import axios from "axios";

function getHeaders(apiKey) {
    return {
        headers: {
            'Api-Key': apiKey,
            'Content-Type': '*/*',
            
        }
    };
}

export async function searchForUser(apiKey, emailOrUsername) {

    const headers = getHeaders(apiKey);

    const data = {
        userNameOrEmail: emailOrUsername
    }

    const response = await axios.post("http://localhost:5173/api/account/userNameOrEmail", data, headers);
    return response.data;

}

export async function getAccountInfo(apiKey, accessToken, userId) {

    const headers = {
        headers: {
            'Api-Key': apiKey,
            'Authorization': 'Bearer ' + accessToken,
            'X-Oguid': userId,
            'Content-Type': '*/*'
        }
    }

    const response = await axios.get("http://localhost:5173/api/account/profile", headers);
    return response.data;
}


export async function landingPageLogin(apiKey, emailOrUsername, password) {
    
    const headers = getHeaders(apiKey);

    const data = {
        userNameOrEmail: emailOrUsername,
        password: password
    }

    const response = await axios.post("http://localhost:5173/api/auth/login", data, headers);
    return response.data;
}