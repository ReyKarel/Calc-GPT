import { SlInfo } from 'react-icons/sl';
import { useState } from 'react';
import { SiOpenai } from 'react-icons/si';
import { IoIosClose } from 'react-icons/io';
import { BsChatDots } from 'react-icons/bs';

export const information = <p><h3>Calc-GPT</h3><br/>Press the {<SiOpenai />} symbol to ask Chat-GPT about your result/current number. <br/><br/> Press <BsChatDots/> to choose the style of answer you get back.<br/></p>;
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
