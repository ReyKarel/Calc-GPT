import { useDispatch } from "react-redux";
import { addDigit, setOperation, clearAll, deleteDigit, addDecimal, getResult } from "../store/slices/buttonsSlice";



const CalcButton = ({ digit, operation, children }) => {
    const dispatch = useDispatch();
    if (digit) return <button onClick={() => dispatch(addDigit(digit))}>{digit}</button>;
    if (operation) return <button onClick={() => dispatch(setOperation(operation))}>{children}</button>;
    switch (children) {
        case 'AC': return <button onClick={() => dispatch(clearAll())} className='span-two'>AC</button>;
        case '=': return <button id="bottom-right-corner" onClick={() => dispatch(getResult())} className='span-two'>=</button>;
        case '.': return <button id="bottom-left-corner" onClick={() => dispatch(addDecimal())}>.</button>;
        case 'DEL': return <button onClick={() => dispatch(deleteDigit())}>DEL</button>;
    }
};

export default CalcButton;