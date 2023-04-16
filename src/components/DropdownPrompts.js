import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { GiPirateHat, GiEmptyHourglass, GiSpaceship } from 'react-icons/gi';
import { MdOutlineTempleBuddhist } from 'react-icons/md';
import { BsChatSquareQuote } from 'react-icons/bs';
import { HiOutlineLightBulb } from 'react-icons/hi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { prompts, setPrompt } from '../store/slices/gptSlice';
import { useDispatch } from 'react-redux';



const DropdownPrompts = () => {
  const promptOptionsList = {
    "default":
      <div className='dropdown-option' onClick={() => handlePromptSelect("default")}><HiOutlineLightBulb size={'2rem'} />
        <p>General facts</p></div>,
    "pirate":
      <div className='dropdown-option' onClick={() => handlePromptSelect("pirate")}><GiPirateHat size={'2rem'} />
        <p>Answer like a pirate</p></div>,
    "history":
      <div className='dropdown-option' onClick={() => handlePromptSelect("history")}><GiEmptyHourglass size={'2rem'} />
        <p>History facts</p></div>,
    "zen":
      <div className='dropdown-option' onClick={() => handlePromptSelect("zen")}><MdOutlineTempleBuddhist size={'2rem'} />
        <p>Zen poem</p></div>,
    "quote":
      <div className='dropdown-option' onClick={() => handlePromptSelect("quote")}><BsChatSquareQuote size={'2rem'} />
        <p>Inspirational quote</p></div>,
    "sciFi":
      <div className='dropdown-option' onClick={() => handlePromptSelect("sciFi")}><GiSpaceship size={'2rem'} />
        <p>Science fiction</p></div>,
  };
  const dispatch = useDispatch();
  const [selectedPrompt, setSelectedPrompt] = useState("default");
  const handlePromptSelect = (choice) => {
    setSelectedPrompt(choice);
    dispatch(setPrompt(promptLegend[choice]));
  };
  const promptLegend = {
    "default": prompts.defaultPrompt,
    "pirate": prompts.piratePrompt,
    "sciFi": prompts.scienceFictionPrompt,
    "history": prompts.historyFactPrompt,
    "zen": prompts.zenPoemPrompt,
    "quote": prompts.inspirationalQuotePrompt
  };

  const remainingPromptOptions = Object.keys(promptOptionsList).filter((option) => option !== selectedPrompt);

  const promptButtons = remainingPromptOptions.map(option => <Dropdown.Item key={option} onClick={() => handlePromptSelect(option)}>{promptOptionsList[option]}</Dropdown.Item>);
  console.log(remainingPromptOptions);
  console.log(selectedPrompt);
  return (
    <>
      <style type="text/css">
        {`
    .dropdown-toggle-calc {
      background-color: purple;
      color: white;
    }
    `}
      </style>
      <DropdownButton variant='dark' menuVariant='dark' id="dropdown-basic-button" title={promptOptionsList[selectedPrompt]}>
        {/* <Dropdown > */}
        {/* <Dropdown.Toggle variant="calc" id="dropdown-custom-1">{promptOptionsList[selectedPrompt]}</Dropdown.Toggle> */}
        {/* <Dropdown.Menu className="dropdown"> */}
        {promptButtons}
        {/* </Dropdown.Menu> */}
        {/* </Dropdown> */}
      </DropdownButton>
    </>
  );
};
export default DropdownPrompts;