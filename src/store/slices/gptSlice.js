import { createSlice } from "@reduxjs/toolkit";
import { clearAll } from "./buttonsSlice";
import { processChatGPTRequest } from "../../components/api";

// const defaultPrompt = "When I provide you with a number, please provide me with a few interesting facts about it, as a short paragraph rather than a list of points. If there aren't any fascinating facts about the number, feel free to provide a shorter response rather than include irrelevant information. limit the response length to 50 words";

export const prompts = {
    defaultPrompt: "When I provide you with a number, please provide me with a few interesting facts about it, as a short paragraph rather than a list of points. If there aren't any fascinating facts about the number, feel free to provide a shorter response rather than include irrelevant information. limit the response length to 50 words.",
    piratePrompt: "when i write you a number i want you to respond as if you were a pirate and i were a random person who just blurted out that number to you without context. also limit the answer to 40 words",
    scienceFictionPrompt: "when i give you a number, Write a short science fiction passage that includes a fictional year represented by the number given. Only include the passage itself without any additional sentences or introductions. limit the length of the reponse to 40 words",
    historyFactPrompt: "when i give you a number, respond with a history fact related to the number. the number does not have to represent the year in history, but could represent anything related to any historic event. the number does not have to be exactly the same as the one i gave you, so if there is something interesting about a similar number - give me a fact using that. keep the response shorter than 40 words. ",
    zenPoemPrompt: "when i give you a number i want you to write a short zen-style poem that includes it",
    inspirationalQuotePrompt: "when i give you a number i want you to respond with a ridiculous inspiring quote you made up that includes the number. limit the response to 40 words and don't preface it with anything other than the quote itself, and also don't include credit for the writer of the quote at the end"
};
const initialState = {
    prompt: prompts.defaultPrompt,
    response: '',
    loading: false,
    error: null,
    abort: false
};

const gptSlice = createSlice({
    name: 'gpt',
    initialState: initialState,
    reducers: {
        setPrompt(state, action) {
            state.prompt = action.payload;
        },
        setResponse(state, action) {
            if (action.payload[1]) {
                state.response = '';
                state.abort = false;
            } else {
                state.response = action.payload[0];
            }
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
        setAbort: (state, action) => {
            state.abort = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(clearAll, (state) => {
            if (state.loading) state.abort = true;
        });
    }
});



export const { setAbort, setLoading, setError, clearError, clearResponse, setPrompt, setResponse } = gptSlice.actions;
export const gptReducer = gptSlice.reducer;

