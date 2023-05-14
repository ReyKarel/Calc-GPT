import ChatPrompt from "../components/ChatPrompt";
import Display from "../components/Display";
import DropdownPrompts from "../components/DropdownPrompts";
import Info from "../components/Info";
import CalcGrid from "../components/CalcGrid";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { SiOpenai } from 'react-icons/si';
import { information } from "../components/Info";
import { screens, setScreen } from "../store/slices/displaySlice";
import { useDispatch, useSelector } from "react-redux";
import { abortRequest } from "../store/slices/gptSlice";
import WelcomeModal from "../components/WelcomeModal";
import PromptMenu from "../components/PromptMenu";
import ScrollWrapper from "../components/ScrollWrapper";

const Mobile = () => {

    const dispatch = useDispatch();

    const handleTabSelect = (tab) => {
        if (isLoading) {
            dispatch(abortRequest());
            dispatch(setScreen(tab));
            return;
        }
        dispatch(setScreen(tab));
    };
    const { currentScreen, isLoading, isResponse } = useSelector((state) => {
        return {
            currentScreen: state.display.currentScreen,
            isLoading: state.gpt.loading,
            isResponse: (state.gpt.response !== '')
        };
    });
    useEffect(() => {
        if ((isLoading || isResponse) && currentScreen !== 'chat') {
            dispatch(setScreen('chat'));
        }

    }, [isLoading, isResponse]);



    return (
        <div className="mobile-screen">
            <NavBar currentTab={currentScreen} onTabSelect={handleTabSelect} />
            {/* {screens[currentScreen]} */}
            <div className="calculator-grid ">
                <Display />
                <CalcGrid />
            </div>
            <WelcomeModal />
            <PromptMenu />
            <ScrollWrapper className={"info-card"}>{information} </ScrollWrapper>
            <ChatPrompt className="chat-window-open" />
        </div>
    );
};
export default Mobile;