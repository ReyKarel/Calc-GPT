import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    firstOperand: null,
    operation: null,
    secondOperand: null,
    currentNumber: '0',
    result: null
};

const buttonsSlice = createSlice({
    name: 'buttons',
    initialState: initialState,
    reducers: {
        addDecimal(state) {
            if (state.currentNumber.includes('.')) {
                return state;
            } else {
                state.currentNumber = state.currentNumber + '.';
            }
        },
        changeFirstOperand(state, action) {
            state.firstOperand = parseFloat(action.payload);
            console.log(typeof state.firstOperand);
        },
        changeSecondOperand(state, action) {
            if (action.payload !== '0') { state.secondOperand = parseFloat(action.payload); }

        },
        changeOperation(state, action) {
            if (state.result !== null) {

                state.firstOperand = state.result;
                state.result = null;
                state.operation = action.payload;
                state.secondOperand = null;
                state.currentNumber = '0';
            }

            if (!state.operation) {
                state.operation = action.payload;
                state.firstOperand = parseFloat(state.currentNumber);
                state.currentNumber = '0';
            }



        },
        addDigit(state, action) {

            if (state.result !== null) {
                state.currentNumber = '0';
                state.firstOperand = null;
                state.secondOperand = null;
                state.operation = null;
                state.result = null;
            }
            if (state.currentNumber === '0') {
                state.currentNumber = action.payload;

            } else {
                state.currentNumber += action.payload;
            }
        },
        deleteDigit(state) {
            if (state.currentNumber.length > 1) {
                state.currentNumber = state.currentNumber.slice(0, -1);

            } else {
                state.currentNumber = '0';
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
                state.secondOperand = parseFloat(state.currentNumber);
                switch (state.operation) {
                    case 'x':
                        state.result = state.firstOperand * state.secondOperand;
                        break;
                    case '÷':
                        state.result = state.firstOperand / state.secondOperand;
                        break;
                    case '+':
                        state.result = state.firstOperand + state.secondOperand;
                        break;
                    case '-':
                        state.result = state.firstOperand - state.secondOperand;
                        break;
                    default:
                        break;
                }
            }
        }
    }
});

// currentnumber tracks the current number
// pressing an operation locks current number as first operand
// this also resets currentNumber to 0
// operation can be changed, first operand remains the same though
// new digits become the second operand
// operation or = locks first and second operand and returns
// the result
//



export const { addDecimal, getResult, clearAll, deleteDigit, changeFirstOperand, addDigit, changeOperation, changeSecondOperand } = buttonsSlice.actions;
export const buttonsReducer = buttonsSlice.reducer;