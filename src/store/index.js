import { configureStore } from "@reduxjs/toolkit";

import { buttonsReducer, setOperation } from './slices/buttonsSlice';
import { gptReducer } from "./slices/gptSlice";
import { displayReducer } from "./slices/displaySlice";

const store = configureStore({
    reducer: {
        buttons: buttonsReducer,
        gpt: gptReducer,
        display: displayReducer
    }

});

export { store, setOperation };