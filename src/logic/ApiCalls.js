import axios from "axios";

function getHeaders(apiKey) {
    return {
        headers: {
            'Api-Key': apiKey,
            'Content-Type': '*/*'
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

export async function getAccountInfo(apiKey, userId) {

    const headers = {
        headers: {
            'Api-Key': apiKey,
            'X-Oguid': userId,
            'Content-Type': '*/*'
        }
    }

    const response = await axios.get("http://localhost:5173/api/account", headers);

}