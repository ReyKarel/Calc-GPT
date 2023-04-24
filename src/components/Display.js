import { useDispatch, useSelector } from "react-redux";
import { SiOpenai } from 'react-icons/si';
import { setAbortController, setError, setLoading, setResponse } from "../store/slices/gptSlice";
import { processChatGPTRequest } from "./api";
import { Tooltip } from "react-tooltip";



const Display = () => {
    const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
        maximumFractionDigits: 0
    });
    function standardizeOperation(op) {
        switch (op) {
            case '/':
                return '÷';
            case '*':
                return '×';
            default:
                return op;
        }
    }

    function prettifyNum(num, cutDecimal=false) {
        if (num) {
            num = num.toString()
            const [integer, decimal] = num.split('.');
            if (num.length === integer.length) return INTEGER_FORMATTER.format(integer);
            if (num.charAt(num.length - 1) === '.') return cutDecimal ? INTEGER_FORMATTER.format(integer) : `${INTEGER_FORMATTER.format(integer)}.`;
            return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
        } else {
            return num;
        }
    }
    const { result, currentNumber, secondOperand, firstOperand, operation, prompt } = useSelector((state) => {
        return {
            firstOperand: prettifyNum(state.buttons.firstOperand,true),
            operation: standardizeOperation(state.buttons.operation),
            currentNumber: prettifyNum(state.buttons.currentNumber),
            result: prettifyNum(state.buttons.result),
            secondOperand: prettifyNum(state.buttons.secondOperand,true),
            prompt: state.gpt.prompt,
        };
    });
    const dispatch = useDispatch();



    const handleGPT = async () => {
        const controller = new AbortController();
        dispatch(setAbortController(controller));
        dispatch(setLoading(true));
        try {
            const response = await processChatGPTRequest(prompt, result, controller);
            dispatch(setResponse(response));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
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


