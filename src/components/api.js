import axios from "axios";


const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
export async function processChatGPTRequest(prompt, result, controller) {
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
        },
        signal: controller.signal
    }).then((response) => {
        return response.data.choices[0].message.content;
    }).catch((error) => {
        if (axios.isCancel(error)) {
            console.log('Request canceled', error.message);
        } else {
            console.error(error);
        }
    });
    return response;
}


