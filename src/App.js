import ChatPrompt from "./components/ChatPrompt";
import Display from "./components/Display";
import DropdownPrompts from "./components/DropdownPrompts";
import Info from "./components/Info";
import CalcGrid from "./components/CalcGrid";
import useWindowSize from "./hooks/useWindowSize";

const App = () => {
    const [height,width] = useWindowSize()
    return (
        <div className='box'>
            <div className="row-item">
                <ChatPrompt className='child'/>
            </div>
            <div className="row-item">
                <div className="calculator-grid child" >
                    <Display />
                    <CalcGrid />
                </div>
            </div>
            <div className="row-item">
                <DropdownPrompts className='child'/>
            </div>
            <Info className='info-card' />
        </div>
    );
};
export default App;