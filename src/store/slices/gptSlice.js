import { createSlice } from "@reduxjs/toolkit";



export const prompts = {
    'default': "When I provide you with a number, please provide me with a few interesting facts about it, as a short paragraph rather than a list of points. If there aren't any fascinating facts about the number, feel free to provide a shorter response rather than include irrelevant information. limit the response length to 50 words.",
    'pirate': "when i write you a number i want you to respond as if you were a pirate and i were a random person who just blurted out that number to you without context. also limit the answer to 40 words",
    'sciFi': "when i give you a number, Write a short science fiction passage that includes a fictional year represented by the number given. Only include the passage itself without any additional sentences or introductions. limit the length of the reponse to 40 words",
    'history': "when i give you a number, respond with a history fact related to the number. the number does not have to represent the year in history, but could represent anything related to any historic event. the number does not have to be exactly the same as the one i gave you, so if there is something interesting about a similar number - give me a fact using that. keep the response shorter than 40 words. ",
    'zen': "when i give you a number i want you to write a short zen-style poem that includes it",
    'quote': "when i give you a number i want you to respond with a ridiculous inspiring quote you made up that includes the number. limit the response to 40 words and don't preface it with anything other than the quote itself, and also don't include credit for the writer of the quote at the end"
};

const initialState = {
    prompt: prompts.default,
    response: '',
    loading: false,
    error: null,
    abortController: null
};

const gptSlice = createSlice({
    name: 'gpt',
    initialState: initialState,
    reducers: {
        setPrompt(state, action) {
            state.prompt = action.payload;
        },
        setResponse(state, action) {
            state.response = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
        
        setAbortController: (state, action) => {
            state.abortController = action.payload;
        },
        abortRequest: (state) => {
            if (state.loading) {
                state.abortController.abort();
            }
        }
    },
    
});



export const { abortRequest, setAbortController, setLoading, setError, clearError, setPrompt, setResponse } = gptSlice.actions;
export const gptReducer = gptSlice.reducer;

