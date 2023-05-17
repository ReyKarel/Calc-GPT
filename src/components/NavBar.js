import { SlInfo } from 'react-icons/sl';

import { BsChatDots } from 'react-icons/bs';
import { useState } from 'react';
import NavButton from './NavButton';
import { SiOpenai } from 'react-icons/si';
import { Tooltip } from 'react-tooltip';
import { useDispatch, useSelector } from 'react-redux';


const NavBar = ({ onTabSelect, currentTab }) => {
    const dispatch = useDispatch();
    const { result, response, loading } = useSelector((state) => {
        return {
            result: state.buttons.result,
            response: state.gpt.response,
            loading: state.gpt.loading,
        };
    });
    // const handleGPT = async () => {
    //     const controller = new AbortController();
    //     dispatch(setAbortController(controller));
    //     dispatch(setLoading(true));
    //     try {
    //         const response = await processChatGPTRequest(prompt, result, controller);
    //         dispatch(setResponse(response || ''));
    //     } catch (error) {
    //         dispatch(setError(error.message));
    //         dispatch(setScreen('calculator'));

    //     } finally {
    //         dispatch(setLoading(false));
    //     }
    // };

    return (
        <div className='navbar'>
            <Tooltip offset={20} anchorSelect="#gpt-tooltip" place="top" delayShow={20} delayHide={60}>
                asdf
            </Tooltip>
            <NavButton  id={"gpt-tooltip"} clickHandler={onTabSelect} choice="chat" selected={currentTab}>
                <SiOpenai className='nav-icon' />
            </NavButton>
            <NavButton  clickHandler={onTabSelect} choice="prompts" selected={currentTab}>
                <BsChatDots className='nav-icon' />
            </NavButton>
            <NavButton clickHandler={onTabSelect} choice="info" selected={currentTab}>
                <SlInfo className='nav-icon' />
            </NavButton>
        </div>
    );
};
export default NavBar;