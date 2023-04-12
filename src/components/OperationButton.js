import { useDispatch } from "react-redux";
import { changeOperation } from "../store/slices/buttonsSlice";


const OperationButton = ({ operation, children }) => {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(changeOperation(operation))}>{children}</button>
    );

};
export default OperationButton;