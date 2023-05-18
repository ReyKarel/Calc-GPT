import { createSlice } from "@reduxjs/toolkit";
import ChatPrompt from "../../components/ChatPrompt";
import PromptMenu from "../../components/PromptMenu";
import ScrollWrapper from "../../components/ScrollWrapper";
import { SiOpenai } from "react-icons/si";
import { BsChatDots } from "react-icons/bs";


const information = <p><h3>Calc-GPT</h3><br />Press the {<SiOpenai />} symbol to ask Chat-GPT about your result/current number. <br /><br /> Press <BsChatDots /> to choose the style of answer you get back.<br /></p>;
export const screens = {

    'prompts':
        <PromptMenu />
    ,
    'info':
        <ScrollWrapper className={"info-card"}>{information} </ScrollWrapper>,
    'chat': <ChatPrompt className="chat-window-open" />
};

const displaySlice = createSlice({
    name: 'display',
    initialState: { currentScreen: null },
    reducers: {
        setScreen(state, action) {
            state.currentScreen = action.payload;
        }
    },

});



export const { setScreen } = displaySlice.actions;
export const displayReducer = displaySlice.reducer;





