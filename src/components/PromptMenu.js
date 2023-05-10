import 'bootstrap/dist/css/bootstrap.min.css';
import { setPrompt } from '../store/slices/gptSlice';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { promptOptions } from './prompts';
import { setScreen } from '../store/slices/displaySlice';



const PromptMenu = () => {
    const { currentPrompt } = useSelector((state) => {
        return { currentPrompt: state.gpt.prompt };
    });

    const dispatch = useDispatch();

    const handlePromptSelect = (choice) => {
        dispatch(setPrompt(choice));
        dispatch(setScreen('calculator'))
    };
    

    const promptButtons = promptOptions.map(({ key, icon, label }) => {
        const classNames = key === currentPrompt ? 'selected-prompt prompt-option' : 'prompt-option ';
        return (
            <div key={key} className={classNames} onClick={() => handlePromptSelect(key)}>
                {icon}
                {label}
            </div>
        );
    });


    return (
        <div className='prompt-menu'>
            {/* <Dropdown >
          <Dropdown.Toggle variant='dark' id="dropdown-basic-button" className='dropdown-button'>
            {selectedPromptButton}
          </Dropdown.Toggle>
          <Dropdown.Menu className='dropdown-menu'> */}
            {promptButtons}
            {/* </Dropdown.Menu>
        </Dropdown> */}
        </div>
    );
};
export default PromptMenu;