import { SlInfo } from 'react-icons/sl';

import { BsCalculatorFill, BsChatDots } from 'react-icons/bs';
import { useState } from 'react';
import NavButton from './NavButton';
import { SiOpenai } from 'react-icons/si';

const NavBar = ({onTabSelect, currentTab}) => {

    
    return (
        <div className='navbar'>
            <NavButton clickHandler={onTabSelect} choice="calculator" selected={currentTab}>
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