import { GiPirateHat, GiEmptyHourglass, GiSpaceship } from 'react-icons/gi';
import { MdOutlineTempleBuddhist } from 'react-icons/md';
import { BsChatSquareQuote } from 'react-icons/bs';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { prompts, setPrompt } from '../store/slices/gptSlice';


const PromptOptions = ({ onChoosePrompt }) => {
    const dispatch = useDispatch();

    const handlePromptClick = (prompt) => {
        dispatch(setPrompt(prompt));
        onChoosePrompt();
    };


    

    return (
        <div className='prompt-buttons'>
            <div>
                <HiOutlineLightBulb onClick={() => handlePromptClick(prompts.defaultPrompt)} />
                <span>General facts (default)</span>
            </div>
            <div>
                <GiPirateHat onClick={() => handlePromptClick(prompts.piratePrompt)} />
                <span>Answer like a pirate</span>
            </div>
            <div>
                <GiEmptyHourglass onClick={() => handlePromptClick(prompts.historyFactPrompt)} />
                <span>History facts</span>
            </div>
            <div>
                <MdOutlineTempleBuddhist onClick={() => handlePromptClick(prompts.zenPoemPrompt)} />
                <span>Zen poem</span>
            </div>
            <div>
                <BsChatSquareQuote onClick={() => handlePromptClick(prompts.inspirationalQuotePrompt)} />
                <span>Inspirational quote</span>
            </div>
            <div>
                <GiSpaceship onClick={() => handlePromptClick(prompts.scienceFictionPrompt)} />
                <span>Science fiction</span>
            </div>
        </div>
    );
};

export default PromptOptions;