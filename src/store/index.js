import { configureStore } from "@reduxjs/toolkit";

import { buttonsReducer, changeFirstOperand, changeOperation, changeSecondOperand } from './slices/buttonsSlice';
import { gptReducer } from "./slices/gptSlice";

const store = configureStore({
    reducer: {
        buttons: buttonsReducer,
        gpt: gptReducer
    }

});

export { store, changeFirstOperand, changeOperation, changeSecondOperand };