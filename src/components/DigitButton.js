import { useDispatch } from "react-redux";
import { addDigit } from "../store/slices/buttonsSlice";

const DigitButton = ({ digit }) => {
    const dispatch = useDispatch();
    return (
        <button onClick={()=>dispatch(addDigit(digit))}>{digit}</button>
    );
};
export default DigitButton; 