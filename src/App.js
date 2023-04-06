import { useState } from "react";
import { useDispatch } from "react-redux";
import ChatPrompt from "./components/ChatPrompt";
import DigitButton from "./components/DigitButton";
import Display from "./components/Display";
import OperationButton from "./components/OperationButton";
import { Box } from "@mui/material";
import { addDecimal, clearAll, deleteDigit, getResult } from "./store/slices/buttonsSlice";
import { clearResponse } from "./store/slices/gptSlice";
import OptionCard from "./components/OptionCard";

const App = () => {
    const dispatch = useDispatch();
    const [answerStyle, setAnswerStyle] = useState("When I provide you with a number, please provide me with 2-3 interesting facts about it, as a short paragraph rather than a list of points. If there aren't any fascinating facts about the number, feel free to provide a shorter response rather than include irrelevant information. limit the response length to 40 words");

    const handleAnswerStyleChange = () => {
        return;
    };

    return (
        <Box className='box'>
            <div className="calculator-grid" >
                <Display />
                <button onClick={() => dispatch(clearAll())} className='span-two'>AC</button>
                <button onClick={() => dispatch(deleteDigit())}>DEL</button>
                <OperationButton operation={'+'}></OperationButton>
                <DigitButton digit={'7'}></DigitButton>
                <DigitButton digit={'8'}></DigitButton>
                <DigitButton digit={'9'}></DigitButton>
                <OperationButton operation={'-'}></OperationButton>
                <DigitButton digit={'4'}></DigitButton>
                <DigitButton digit={'5'}></DigitButton>
                <DigitButton digit={'6'}></DigitButton>
                <OperationButton operation={'x'}></OperationButton>
                <DigitButton digit={'1'}></DigitButton>
                <DigitButton digit={'2'}></DigitButton>
                <DigitButton digit={'3'}></DigitButton>
                <OperationButton operation={'÷'}></OperationButton>
                <button id="bottom-left-corner" onClick={() => dispatch(addDecimal())}>.</button>
                <DigitButton digit={'0'}></DigitButton>
                <button id="bottom-right-corner" onClick={() => dispatch(getResult())} className='span-two'>=</button>
                <ChatPrompt prompt={answerStyle} />
            <OptionCard />
            </div>
        </Box>

    );
};
export default App;