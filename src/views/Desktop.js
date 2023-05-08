import ChatPrompt from "./components/ChatPrompt";
import Display from "./components/Display";
import DropdownPrompts from "./components/DropdownPrompts";
import Info from "./components/Info";
import CalcGrid from "./components/CalcGrid";

const Desktop = () => {

    return (
        <div>
            <div className='box'>
                <div className="row-item">
                    <ChatPrompt className='child' />
                </div>
                <div className="row-item">
                    <div className="calculator-grid child" >
                        <Display />
                        <CalcGrid />
                    </div>
                </div>
                <div className="row-item">
                    <DropdownPrompts className='child' />
                </div>
            </div>
            <Info className='info-card' />
        </div>
    );
};
export default Desktop;