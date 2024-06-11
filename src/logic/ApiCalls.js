import axios from "axios";

export async function searchForUser(apiKey, emailOrUsername) {

    const apiEndpoint = import.meta.env.API_ENDPOINT
    
    const headers = {
        headers: {
            'Api-Key': apiKey,
            'Content-Type': '*/*'
        }
    };

    const data = {
        userNameOrEmail: emailOrUsername
    }

    try {
        const response = await axios.post(`${apiEndpoint}/account/userNameOrEmail`, data, headers);
        return response.data;
    } catch (error) {
        return error.response.data;
    }




}