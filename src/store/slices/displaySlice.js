import { createSlice } from "@reduxjs/toolkit";
import DropdownPrompts from "../../components/DropdownPrompts";
import Display from "../../components/Display";
import CalcGrid from "../../components/CalcGrid";
import Info from "../../components/Info";
import { information } from "../../components/Info";
import ChatPrompt from "../../components/ChatPrompt";
import PromptMenu from "../../components/PromptMenu";
import ScrollWrapper from "../../components/ScrollWrapper";
export const screens = {
    'calculator': <div className="calculator-grid mobile">
        <Display />
        <CalcGrid />
    </div>,
    'prompts': 
        <PromptMenu />
    ,
    'info':
        <ScrollWrapper className={"info-card"}>{information} </ScrollWrapper>,
    'chat': <ChatPrompt className="chat-window-open"/>
};

const displaySlice = createSlice({
    name: 'display',
    initialState: { currentScreen: 'calculator' },
    reducers: {
        setScreen(state, action) {
            state.currentScreen = action.payload;
        }
    },

});



export const {setScreen } = displaySlice.actions;
export const displayReducer = displaySlice.reducer;





