import { useState } from "react";
import { useDispatch } from "react-redux";
import ChatPrompt from "./components/ChatPrompt";
import DigitButton from "./components/DigitButton";
import Display from "./components/Display";
import OperationButton from "./components/OperationButton";
import { Box } from "@mui/material";
import { addDecimal, clearAll, deleteDigit, getResult } from "./store/slices/buttonsSlice";
import OptionCard from "./components/OptionCard";
import DropdownPrompts from "./components/DropdownPrompts";

const App = () => {
    const dispatch = useDispatch();


    return (
        <div className='box'>
            <div className="row-item">
                <ChatPrompt />
            </div>
            <div className="row-item">
                <div className="calculator-grid" >
                    <Display />
                    <button onClick={() => dispatch(clearAll())} className='span-two'>AC</button>
                    <button onClick={() => dispatch(deleteDigit())}>DEL</button>
                    <OperationButton operation={'+'}>+</OperationButton>
                    <DigitButton digit={'7'}></DigitButton>
                    <DigitButton digit={'8'}></DigitButton>
                    <DigitButton digit={'9'}></DigitButton>
                    <OperationButton operation={'-'}>-</OperationButton>
                    <DigitButton digit={'4'}></DigitButton>
                    <DigitButton digit={'5'}></DigitButton>
                    <DigitButton digit={'6'}></DigitButton>
                    <OperationButton operation={'*'}>×</OperationButton>
                    <DigitButton digit={'1'}></DigitButton>
                    <DigitButton digit={'2'}></DigitButton>
                    <DigitButton digit={'3'}></DigitButton>
                    <OperationButton operation={'/'}>÷</OperationButton>
                    <button id="bottom-left-corner" onClick={() => dispatch(addDecimal())}>.</button>
                    <DigitButton digit={'0'}></DigitButton>
                    <button id="bottom-right-corner" onClick={() => dispatch(getResult())} className='span-two'>=</button>
                </div>
            </div>
            <div className="row-item">
                <DropdownPrompts className="dropdown" />
            </div>
        </div>

    );
};
export default App;