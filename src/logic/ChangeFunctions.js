import axios from 'axios';

// This file wll hold every function to call when a change will be made.

// Needs email not username
export const updatePartnerCode = async (apiKey, token, email, newPartnerCode, newProjectID) => {
    console.log('email: ', email);
    const headers = {
        headers: {
            'Api-Key': apiKey,
            'Authorization': 'Bearer ' + token,
            'Content-Type': '*/*'
        }
    }

    const data = {
        'email': email,
        'newPartnerCode': newPartnerCode,
        'newProjectCode': newProjectID // This is a temporary e
    }


    const response = await axios.post("http://localhost:5173/api/account/partner-code", data, headers);
    console.log('response: ', response);
    return response.data;
}