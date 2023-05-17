import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import useFitText from "../hooks/useFitText";


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

    function prettifyNum(num, cutDecimal = false) {
        if (num) {
            num = num.toString();
            const [integer, decimal] = num.split('.');
            if (num.length === integer.length) return INTEGER_FORMATTER.format(integer);
            if (num.charAt(num.length - 1) === '.') return cutDecimal ? INTEGER_FORMATTER.format(integer) : `${INTEGER_FORMATTER.format(integer)}.`;
            return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
        } else {
            return num;
        }
    }
    const { result, currentNumber, secondOperand, firstOperand, operation } = useSelector((state) => {
        return {
            firstOperand: prettifyNum(state.buttons.firstOperand, true),
            operation: standardizeOperation(state.buttons.operation),
            currentNumber: prettifyNum(state.buttons.currentNumber),
            result: prettifyNum(state.buttons.result),
            secondOperand: prettifyNum(state.buttons.secondOperand, true),

        };
    });


    const [displayWidth, setDisplayWidth] = useState(0);
    useEffect(() => {
        const displayEl = document.getElementById('display').clientWidth;
        if (displayEl) {
            setDisplayWidth(displayEl);
        }
    }, []);

    const getLineLength = (elements) => {
        let length = 0;
        for (let el of elements) {
            if (el) {
                length += el.length;
            }
        }
        return Math.max(1, length * 0.75);
    };
   
    const bottomLine = result !== null ? [result] : [currentNumber];

    return (
        <div  className="output " style={{ fontFamily: "Lucida Console" }}>

            {result !== null ? <div id="previous-operand" className="previous-operand"
                style={{ fontSize: `min(1.5rem,${displayWidth / getLineLength([firstOperand, operation, secondOperand])}px)` }} >
                {firstOperand}
                {operation}
                {secondOperand}
                =
            </div> :
                <div id="previous-operand" className="previous-operand"
                // style={{ fontSize: `min(1.5rem,${displayWidth / getLineLength([firstOperand, operation])}px)` }}
                >
                    {firstOperand}
                    {operation}
                </div>}
            <div 
                // style={{ fontSize: `min(2.5rem,${displayWidth / getLineLength(bottomLine)}px)` }} 
                id="current-operand" className="current-operand">{result !== null ? result : currentNumber === null ? '0' : currentNumber}</div>
        </div>
    );


};
export default Display;
{/* <div className="previous-operand"
style={{ fontSize: `min(1.5rem,${displayWidth / getLineLength([firstOperand, operation])}px)` }}>
{firstOperand}
{operation}
</div>}
<div style={{ fontSize: `min(2.5rem,${displayWidth / getLineLength(bottomLine)}px)` }} className="current-operand">{result !== null ? result : currentNumber === null ? '0' : currentNumber}</div> */}



// find better way to dynamically change font size in the calc screen