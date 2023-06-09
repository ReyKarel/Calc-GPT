import 'bootstrap/dist/css/bootstrap.min.css';
import { setPrompt } from '../store/slices/gptSlice';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { promptOptions } from './prompts';
import { setScreen } from '../store/slices/displaySlice';
import ScrollWrapper from './ScrollWrapper';



const PromptMenu = () => {
    const { currentPrompt } = useSelector((state) => {
        return { currentPrompt: state.gpt.prompt };
    });

    const dispatch = useDispatch();

    const handlePromptSelect = (choice) => {
        
        dispatch(setPrompt(choice));
        setTimeout(() => dispatch(setScreen('calculator')), 50);
    };


    const promptButtons = promptOptions.map(({ key, icon, label }) => {
        const classNames = key === currentPrompt ? 'selected-prompt' : 'prompt-option ';
        return (
            <div key={key} className={classNames} onClick={() => handlePromptSelect(key)}>
                {icon}
                {label}
            </div>
        );
    });


    return (
        <ScrollWrapper className='prompt-menu'>
            {promptButtons}
        </ScrollWrapper>
    );
};
export default PromptMenu;