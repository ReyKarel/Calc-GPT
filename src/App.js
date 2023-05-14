import ChatPrompt from "./components/ChatPrompt";
import Display from "./components/Display";
import DropdownPrompts from "./components/DropdownPrompts";
import Info from "./components/Info";
import CalcGrid from "./components/CalcGrid";
import useWindowSize from "./hooks/useWindowSize";
import NavBar from "./components/NavBar";
import Mobile from "./views/Mobile";
const App = () => {

    const [height, width] = useWindowSize();
    return (
        <> 
        {height < 700 ? document.documentElement.style.setProperty('--calc-button',`${height/9}px`) :document.documentElement.style.setProperty('--calc-button','clamp(3rem, 4rem + 5vw, 6rem)') }
<Mobile />
            {/* {width < 600 ? <><Mobile/></> 
            : <div>
                <div className='box'>
                    {width < 800 && <NavBar />}
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
            </div>} */}
        </>
    );
};
export default App;