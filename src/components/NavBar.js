import { SlInfo } from 'react-icons/sl';
import { BsChatDots } from 'react-icons/bs';
import NavButton from './NavButton';
import { SiOpenai } from 'react-icons/si';


const NavBar = ({ onTabSelect, currentTab }) => {

    return (
        <div className='navbar'>
            <NavButton id={"gpt-tooltip"} clickHandler={onTabSelect} choice="chat" selected={currentTab}>
                <SiOpenai className='nav-icon' />
            </NavButton>
            <NavButton clickHandler={onTabSelect} choice="prompts" selected={currentTab}>
                <BsChatDots className='nav-icon' />
            </NavButton>
            <NavButton clickHandler={onTabSelect} choice="info" selected={currentTab}>
                <SlInfo className='nav-icon' />
            </NavButton>
        </div>
    );
};
export default NavBar;