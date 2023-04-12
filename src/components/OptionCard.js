import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import PromptOptions from './PromptOptions';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownPrompts from './DropdownPrompts';

const OptionCard = () => {
    

    const [showPrompts, setShowPrompts] = useState(false);
    const handlePromptsClick = () => {
        setShowPrompts(!showPrompts);

    };

    return (
        // <div className={"option-card"}>
        //     <div className='option-buttons'>
        //         <IoChatbubbleEllipsesOutline onClick={handlePromptsClick} size={'2.5em'} className='prompt-symbol' />
        //     </div>
        //     <div className='option-card-content'>
        //         {showPrompts && <PromptOptions onChoosePrompt={handlePromptsClick}/>}
        //     </div>
        // </div>
       <></>
    );
};
export default OptionCard;


