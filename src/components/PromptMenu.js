import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { prompts, setPrompt } from '../store/slices/gptSlice';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { promptOptions } from './prompts';



const PromptMenu = () => {
    const dispatch = useDispatch();
    const [selectedPrompt, setSelectedPrompt] = useState("default");
    const handlePromptSelect = (choice) => {
      setSelectedPrompt(choice);
      dispatch(setPrompt(prompts[choice]));
    };
    
    const promptButtons = promptOptions.map(({ key, icon, label }) => {
      const classNames = key === selectedPrompt ? 'selected-prompt' : '';
      return (
        <div key={key} className={classNames} onClick={() => handlePromptSelect(key)}>
          <div className='prompt-option'>
            {icon}
            {label}
          </div>
        </div>
      );
    });
  
    const remainingPromptOptions = Object.values(promptButtons).filter((option) => option.key !== selectedPrompt);
    const selectedPromptButton = promptButtons.find(({ key }) => key === selectedPrompt);
  
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
}
export default PromptMenu