import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


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
        const displayEl = document.getElementById('display').clientWidth || null;
        if (displayEl) {
            setDisplayWidth(displayEl);
        }
    }, []);

    const getLineLength = (elements) => {
        let length = 0;
        for (let el of elements) {
            if (el) {
                length += el.toString().length;
            }
        }
        return Math.max(1, length * 0.7);
    };

    const bottomLine = getLineLength([result || currentNumber]);
    const topLine = getLineLength([firstOperand, operation, secondOperand]);


    const root = document.documentElement;
    const currentNumSize = getComputedStyle(root).getPropertyValue('--current-number');
    const prevNumSize = getComputedStyle(root).getPropertyValue('--previous-number');


    return (
        <div id="display" className="output" style={{ fontFamily: "Lucida Console" }}>

            <div className="previous-operand"
                style={{ fontSize: `min(${prevNumSize},${displayWidth / topLine}px)` }}
            >
                {firstOperand}
                {operation}
                {secondOperand}
                {result !== null && '='}
            </div>
            <div
                style={{ fontSize: `min(${currentNumSize},${displayWidth / bottomLine}px)` }}
                className="current-operand">{result || currentNumber || "0"}</div>
        </div>
    );


};
export default Display;


