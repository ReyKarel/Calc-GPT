import { SlInfo } from 'react-icons/sl';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { useState } from 'react';
import PromptOptions from './PromptOptions';
const OptionCard = () => {
    
    const [showInfo, setShowInfo] = useState(false);
    const handleInfoClick = () => {
        setShowInfo(!showInfo);
        setShowPrompts(false)
    };

    const [showPrompts, setShowPrompts] = useState(false);
    const handlePromptsClick = () => {
        setShowPrompts(!showPrompts);
        setShowInfo(false);

    };

    const info = "Welcome to Calc-GPT! Use the calculator as normal. Then, when you have a result, click the OpenAI icon that appears in the calculator display to ask Chat-GPT about that number. You can also click the chat bubble button that appears here to change the style of answer you get back from ChatGPT. Enjoy!";
    return (
        <div className={showInfo ? "option-card option-card-open" : "option-card"}>
            <div className='option-buttons'>
                <SlInfo onClick={handleInfoClick} size={'2.5em'} className='info-symbol' />
                <IoChatbubbleEllipsesOutline onClick={handlePromptsClick} size={'2.7em'} className='prompt-symbol' />
            </div>
            <div className='option-card-content'>
                {showInfo && info}
                {showPrompts && <PromptOptions onChoosePrompt={handlePromptsClick}/>}
            </div>
        </div>
    );
};
export default OptionCard;


