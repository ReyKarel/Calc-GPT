import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    firstOperand: null,
    operation: null,
    secondOperand: null,
    currentNumber: null,
    result: null
};

const buttonsSlice = createSlice({
    name: 'buttons',
    initialState: initialState,
    reducers: {
        addDecimal(state) {
            if (state.currentNumber === null) {
                state.currentNumber = '0.';
            } else if (state.currentNumber.includes('.')) {
                return state;
            } else {
                state.currentNumber = state.currentNumber + '.';
            }
        },

        changeOperation(state, action) {
            if (state.result !== null) {

                state.firstOperand = state.result;
                state.result = null;
                state.operation = action.payload;
                state.secondOperand = null;
                state.currentNumber = null;
            }

            if (!state.operation) {
                if (state.firstOperand === null) {
                    state.operation = action.payload;
                    state.firstOperand = state.currentNumber || '0';
                    state.currentNumber = null;
                } else {
                    state.operation = action.payload;
                    state.firstOperand = parseFloat(state.currentNumber);
                    state.currentNumber = null;
                }
            } else {
                state.operation = action.payload;

            }



        },

        addDigit(state, action) {

            if (state.result !== null) {
                state.currentNumber = action.payload;
                state.firstOperand = null;
                state.secondOperand = null;
                state.operation = null;
                state.result = null;
            } else if (state.currentNumber !== null) {
                if (state.currentNumber.length < 16) state.currentNumber += action.payload;
            } else {
                state.currentNumber = action.payload;
            }
        },
        deleteDigit(state) {
            if (state.currentNumber.length > 1) {
                state.currentNumber = state.currentNumber.slice(0, -1);

            } else {
                state.currentNumber = null;
            }
        },
        clearAll(state) {
            return initialState;
        },
        getResult(state) {

            if (state.result !== null) {
                state.firstOperand = state.result;
                state.result = null;
                state.currentNumber = state.secondOperand;
            }
            if (state.firstOperand !== null) {
                state.secondOperand = parseFloat(state.currentNumber) || "0";
                state.result = eval(`${state.firstOperand} ${state.operation} ${state.secondOperand}`);

            } else {
                state.secondOperand = state.currentNumber || '0';
                state.result = state.currentNumber || '0';

            }
        }
    }
});




export const { addDecimal, getResult, clearAll, deleteDigit, changeFirstOperand, addDigit, changeOperation, changeSecondOperand } = buttonsSlice.actions;
export const buttonsReducer = buttonsSlice.reducer;