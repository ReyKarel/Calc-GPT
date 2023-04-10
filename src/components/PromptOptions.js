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
        onChoosePrompt()
    };
    return (
        <div className='prompt-buttons'>
            <div onClick={() => handlePromptClick(prompts.defaultPrompt)}>
                <HiOutlineLightBulb  />
                <span>Interesting facts (default)</span>
            </div>
            <div onClick={() => handlePromptClick(prompts.piratePrompt)}>
                <GiPirateHat  />
                <span>Answer like a pirate</span>
            </div>
            <div onClick={() => handlePromptClick(prompts.historyFactPrompt)}>
                <GiEmptyHourglass  />
                <span>History facts</span>
            </div>
            <div onClick={() => handlePromptClick(prompts.zenPoemPrompt)}>
                <MdOutlineTempleBuddhist  />
                <span>Zen poem</span>
            </div>
            <div onClick={() => handlePromptClick(prompts.inspirationalQuotePrompt)}>
                <BsChatSquareQuote  />
                <span>Inspirational quote</span>
            </div>
            <div onClick={() => handlePromptClick(prompts.scienceFictionPrompt)}>
                <GiSpaceship  />
                <span>Science fiction</span>
            </div>
        </div>
    );
};

export default PromptOptions;