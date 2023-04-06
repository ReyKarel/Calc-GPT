import { useDispatch } from "react-redux";
import { changeOperation } from "../store/slices/buttonsSlice";


const OperationButton = ({ operation }) => {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(changeOperation(operation))}>{operation}</button>
    );

};
export default OperationButton;