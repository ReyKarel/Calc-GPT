import { useDispatch, useSelector } from "react-redux";
import { SiOpenai } from 'react-icons/si';
import { setAbort, setError, setLoading, setResponse } from "../store/slices/gptSlice";
import { API_KEY } from "./ChatPrompt";
import { processChatGPTRequest } from "./api";
import { Tooltip } from "react-tooltip";
import { useEffect } from "react";



const Display = () => {
    const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
        maximumFractionDigits: 0
    });
    function prettifyNum(num) {
        if (num) {
            if (typeof num === 'number') {
                const [integer, decimal] = num.toString().split('.');
                if (decimal === undefined) return INTEGER_FORMATTER.format(integer);
                return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;

            } else if (typeof num === 'string') {
                const [integer, decimal] = num.split('.');
                if (!decimal && num.length === integer.length) return INTEGER_FORMATTER.format(integer);
                if (num.charAt(num.length - 1) === '.') return `${INTEGER_FORMATTER.format(integer)}.`;
                return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
            }
        } else {
            return num;
        }
    }

    const { result, currDig, secondOperand, firstOperand, operation, prompt, abort } = useSelector((state) => {
        return {
            firstOperand: prettifyNum(state.buttons.firstOperand),
            operation: state.buttons.operation,
            currDig: prettifyNum(state.buttons.currentNumber),
            result: prettifyNum(state.buttons.result),
            secondOperand: prettifyNum(state.buttons.secondOperand),
            prompt: state.gpt.prompt,
            abort: state.gpt.abort
        };
    });
    const dispatch = useDispatch();



    const handleGPT = async () => {
        dispatch(setLoading(true));
        try {
            const response = await processChatGPTRequest(prompt, result); // while this is fetching I am setting abort to true elsewhere

            dispatch(setResponse([response, abort])); // but when this line is executed abort returns to false
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
            dispatch(setAbort(false));
        }
    };
    return (
        <div className="output " style={{ fontFamily: "Lucida Console" }}>
            <Tooltip offset={20} anchorSelect="#gpt-tooltip" place="top" delayShow={20} delayHide={60}>
                Click here to ask ChatGPT about {result && result.length < 12 ? result : "your result"}
            </Tooltip>
            {result !== null &&
                <SiOpenai id="gpt-tooltip" onClick={handleGPT} size={'1.5em'} className="gpt-symbol" />
            }
            {result !== null ? <div className="previous-operand">
                {firstOperand}
                {operation}
                {secondOperand}
                =
            </div> :
                <div className="previous-operand">
                    {firstOperand}
                    {operation}
                </div>}
            <div className="current-operand">{result !== null ? result : currDig}</div>

        </div>
    );


};
export default Display;


