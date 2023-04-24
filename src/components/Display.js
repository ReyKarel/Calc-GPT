import { useDispatch, useSelector } from "react-redux";
import { SiOpenai } from 'react-icons/si';
import { setAbort, setError, setLoading, setResponse } from "../store/slices/gptSlice";
import { processChatGPTRequest } from "./api";
import { Tooltip } from "react-tooltip";



const Display = () => {
    const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
        maximumFractionDigits: 0
    });
    function prettifyNum(num) {
        if (num) {
            if (num === '/') return '÷';
            else if (num === '*') return '×';
            else if (typeof num === 'number') {
                const [integer, decimal] = num.toString().split('.');
                if (decimal === undefined) return INTEGER_FORMATTER.format(integer);
                return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;

            } else if (typeof num === 'string') {
                if (num === '+' || num === '-') return num;
                const [integer, decimal] = num.split('.');
                if (!decimal && num.length === integer.length) return INTEGER_FORMATTER.format(integer);
                if (num.charAt(num.length - 1) === '.') return `${INTEGER_FORMATTER.format(integer)}.`;
                return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
            }
        } else {
            return num;
        }
    }
    const { result, currentNumber, secondOperand, firstOperand, operation, prompt, abort } = useSelector((state) => {
        return {
            firstOperand: prettifyNum(state.buttons.firstOperand),
            operation: prettifyNum(state.buttons.operation),
            currentNumber: prettifyNum(state.buttons.currentNumber),
            result: prettifyNum(state.buttons.result),
            secondOperand: prettifyNum(state.buttons.secondOperand),
            prompt: state.gpt.prompt,
            abort: state.gpt.abort
        };
    });
    console.log(prompt);
    const dispatch = useDispatch();



    const handleGPT = async () => {
        dispatch(setLoading(true));
        try {
            const response = await processChatGPTRequest(prompt, result);

            dispatch(setResponse([response, abort])); 
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
            <div className="current-operand">{result !== null ? result : currentNumber === null ? '0' : currentNumber}</div>

        </div>
    );


};
export default Display;


