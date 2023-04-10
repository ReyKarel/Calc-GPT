import { useDispatch, useSelector } from "react-redux";
import { setResponse } from "../store/slices/gptSlice";
import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY
console.log(API_KEY)
export async function processChatGPTRequest(prompt, result) {
    const systemMessage = {
        role: 'system',
        content: prompt,
    };
    const userMessage = {
        role: 'user',
        content: result.toString(),
    };
    const apiRequestBody = {
        'model': 'gpt-3.5-turbo',
        'messages': [systemMessage, userMessage],
    };
    const response = await axios.post('https://api.openai.com/v1/chat/completions', apiRequestBody, {
        headers: {
            'Authorization': 'Bearer ' + API_KEY,
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        return response.data.choices[0].message.content;
    }).catch((error) => {
        console.error(error);
    });
    return response;
}


// export async function processChatGPTRequest() {
//     const systemMessage = {
//         role: 'system',
//         content: prompt
//     };
//     const userMessage = {
//         role: 'user',
//         content: result.toString()
//     };
//     const apiRequestBody = {
//         'model': 'gpt-3.5-turbo',
//         'messages': [systemMessage, userMessage]
//     };
//     await fetch('https://api.openai.com/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//             'Authorization': 'Bearer ' + API_KEY,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(apiRequestBody)
//     }).then((data) => {
//         return data.json();
//     }).then((data) => {
//         dispatch(setResponse(data.choices[0].message.content));
//     });
// }