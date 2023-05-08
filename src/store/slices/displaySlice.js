import { createSlice } from "@reduxjs/toolkit";
import DropdownPrompts from "../../components/DropdownPrompts";
import Display from "../../components/Display";
import CalcGrid from "../../components/CalcGrid";
import Info from "../../components/Info";


const screens = {
    'calculator': <>
        <Display />
        <CalcGrid />
    </>,
    'prompts': <DropdownPrompts />,
    'info': <Info />
};

const displaySlice = createSlice({
    name: 'display',
    initialState: { currentScreen: 'calc' },
    reducers: {
        setScreen(state, action) {
            state.currentScreen = screens[action.payload];
        }
    },

});



export const {setScreen } = displaySlice.actions;
export const displayReducer = displaySlice.reducer;





