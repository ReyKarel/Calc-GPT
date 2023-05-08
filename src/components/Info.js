import { SlInfo } from 'react-icons/sl';
import { useState } from 'react';
import { SiOpenai } from 'react-icons/si';
import { IoIosClose } from 'react-icons/io';

export const information = <p>Welcome to Calc-GPT! Use the calculator as normal, when you have a result - click the OpenAI icon (<SiOpenai size={'1rem'} />) that appears in the calculator display to ask Chat-GPT about that number. You can also click the dropdown menu on the right to change the style of answer you get back from ChatGPT. Enjoy!</p>;
const Info = () => {
    const [showInfo, setShowInfo] = useState(false);
    const handleInfoClick = () => {
        setShowInfo(!showInfo);
    };


    return (
        <div className='info-section'>
            { !showInfo && <SlInfo size={'4rem'} onClick={handleInfoClick} className='info-icon' />}
            <div className={`info-card ${showInfo && 'show'}`}>{information} <IoIosClose size={'1.5rem'} onClick={handleInfoClick} className='close-info'/></div>
        </div>
    );
};
export default Info
