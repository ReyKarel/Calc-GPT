import ChatPrompt from "./components/ChatPrompt";
import Display from "./components/Display";
import DropdownPrompts from "./components/DropdownPrompts";
import Info from "./components/Info";
import CalcGrid from "./components/CalcGrid";

const App = () => {
    return (
        <div className='box'>
                <div className="row-item">
                    <ChatPrompt />
                </div>
                <div className="row-item">
                    <div className="calculator-grid" >
                        <Display />
                        <CalcGrid/>
                    </div>
                </div>
                <div className="row-item">
                    <DropdownPrompts  />
                </div>
            <Info className='info-card'/>
        </div>
    );
};
export default App;