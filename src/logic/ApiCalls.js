import axios from "axios";

export async function searchForUser(apiKey, emailOrUsername) {

    const headers = {
        headers: {
            'Api-Key': apiKey,
            'Content-Type': '*/*'
        }
    };

    const data = {
        userNameOrEmail: emailOrUsername
    }


    const response = await axios.post("http://localhost:5173/api/userNameOrEmail", data, headers);
    return response.data;

}