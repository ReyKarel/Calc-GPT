import ChatPrompt from "../components/ChatPrompt";
import Display from "../components/Display";
import DropdownPrompts from "../components/DropdownPrompts";
import Info from "../components/Info";
import CalcGrid from "../components/CalcGrid";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { SiOpenai } from 'react-icons/si';
import { information } from "../components/Info";

const Mobile = () => {

    const tabs = {
        'calculator': <div className="calculator-grid mobile">
            <Display />
            <CalcGrid />
        </div>,
        'prompts': <div className="mobile">
            <DropdownPrompts />
        </div>,
        'info': 
            <div className={"info-card"}>{information} </div>
        
    };

    const [displayedSection, setDisplayedSection] = useState('calculator');

    const handleTabSelect = (tab) => {
        setDisplayedSection(tab);
    };

    return (
        <div className="mobile-screen">
            {console.log('mobile')}
            <NavBar currentTab={displayedSection} onTabSelect={handleTabSelect} />
            {tabs[displayedSection]}
        </div>
    );
};
export default Mobile;