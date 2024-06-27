import axios from 'axios';

// This file wll hold every function to call when a change will be made.

// Needs email not username
export const updatePartnerCode = async (apiKey, token, email, inputs) => {

    const headers = {
        headers: {
            'Api-Key': apiKey,
            'Authorization': 'Bearer ' + token,
            'Content-Type': '*/*'
        }
    }

    const data = {
        'email': email,
        ...inputs
    };

    console.log(data)


    const response = await axios.post("http://localhost:5173/api/account/partner-code", data, headers);
    console.log('response: ', response);
    return response.data;
}

export const sendResetPasswordEmail = async (apiKey, email) => {
    const headers = {
        headers: {
            'Api-Key': apiKey,
            'Content-Type': '*/*'
        }
    }

    const data = {
        userNameOrEmail: email
    }

    const response = await axios.post("http://localhost:5173/api/account/reset-password", data, headers);
    return response.data;
}